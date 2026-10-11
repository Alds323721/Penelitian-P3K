import { useState, useEffect } from 'react'
import Home from './Pages/Home'
import Materi from './Pages/Materi'
import PageSkeleton from './components/PageSkeleton'
import SmoothScroll from './components/SmoothScroll'
import { resetScroll } from './utils/scrollHelper'
import './index.css'

function App() {
  const getInitialPage = () => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase()
      if (path === '/materi' || path.startsWith('/materi/')) {
        return 'Materi'
      }
    }
    return 'Home'
  }

  const [currentPage, setCurrentPage] = useState(getInitialPage)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [targetPage, setTargetPage] = useState(getInitialPage)
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('site_lang') || 'id'
    }
    return 'id'
  })

  const handleLanguageChange = (newLang) => {
    setLang(newLang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('site_lang', newLang)
    }
  }

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase()
      const newPage = path === '/materi' || path.startsWith('/materi/') ? 'Materi' : 'Home'
      
      setIsTransitioning(true)
      setTargetPage(newPage)
      resetScroll(true)

      setTimeout(() => {
        setCurrentPage(newPage)
        setIsTransitioning(false)
      }, 400)
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const handleNavigate = (page) => {
    if (page === currentPage && !isTransitioning) {
      resetScroll(false)
      return
    }

    setIsTransitioning(true)
    setTargetPage(page)
    resetScroll(true)

    const targetUrl = page === 'Materi' ? '/Materi' : '/'
    if (window.location.pathname !== targetUrl) {
      window.history.pushState(null, '', targetUrl)
    }

    setTimeout(() => {
      setCurrentPage(page)
      setIsTransitioning(false)
    }, 450)
  }

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#131313] text-[#FFFFFF] font-sans selection:bg-[#353534] selection:text-[#FFFFFF]">
        {isTransitioning ? (
          <PageSkeleton targetPage={targetPage} />
        ) : (
          <div key={`${currentPage}-${lang}`} className="page-enter">
            {currentPage === 'Materi' ? (
              <Materi
                onNavigate={handleNavigate}
                lang={lang}
                onLanguageChange={handleLanguageChange}
              />
            ) : (
              <Home
                onNavigate={handleNavigate}
                lang={lang}
                onLanguageChange={handleLanguageChange}
              />
            )}
          </div>
        )}
      </div>
    </SmoothScroll>
  )
}

export default App
