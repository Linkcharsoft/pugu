import { useState, useEffect, useRef } from 'react'
import { Link, scroller } from 'react-scroll'
import HeaderButton from '../components/HeaderButton'
import '../styles/containers/Header.sass'

const Header = () => {
  const headerRef = useRef(null)
  const [ showMenu, setShowMenu ] = useState(false)
  const [ headerHeight, setHeaderHeight ] = useState(0)

  // Get header height
  useEffect(() => {
    if(headerRef.current) {
      setHeaderHeight(-headerRef.current.offsetHeight)
    }
  }, [headerRef])

  // Add a special class when the user scrolls
  document.addEventListener('scroll', () => {
    if (document.body.scrollTop > window.innerHeight * 2 || document.documentElement.scrollTop > window.innerHeight * 2) {
      headerRef.current.classList.add('Header--Fixed')
    } else {
      headerRef.current.classList.remove('Header--Fixed')
    }
  })

  // Close mobile menu in desktop
  window.addEventListener('resize', () => {
    if(showMenu && !window.matchMedia('(max-width: 768px)').matches) {
      setShowMenu(false)
    }
  })

  const handleShowMenu = () => {
    if(showMenu) {
      headerRef.current.classList.remove('Header--Fixed-Mobile')
    } else {
      headerRef.current.classList.add('Header--Fixed-Mobile')
    }

    setShowMenu(!showMenu)
  }

  return (
    <header className={showMenu ? 'Header--Show' : 'Header'} ref={headerRef}>
      <span className='Header__Title'>Puguverse</span>

      <nav className='Header__Link-Container'>
        <Link className="Header__Link" default activeClass="Header__Link--Active" to="Home" spy={true} smooth={true} offset={headerHeight} duration={100}>Home</Link>
        <Link className="Header__Link" activeClass="Header__Link--Active" to="Adventure" spy={true} smooth={true} offset={headerHeight} duration={100}>Adventure</Link>
        <Link className="Header__Link" activeClass="Header__Link--Active" to="Mint" spy={true} smooth={true} offset={headerHeight} duration={100}>Mint</Link>
        <Link className="Header__Link" activeClass="Header__Link--Active" to="Manifest" spy={true} smooth={true} offset={headerHeight} duration={100}>Manifest</Link>
        <Link className="Header__Link" activeClass="Header__Link--Active" to="Founders" spy={true} smooth={true} offset={headerHeight} duration={100}>Founders</Link>
      </nav>

      <div className='Header__Networks'>
        <a className='Header__Network-Link' href="http://#" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-discord"/>
        </a>
        <a className='Header__Network-Link' href="https://twitter.com/puguverse" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-twitter"/>
        </a>
        <a className='Header__Network-Link' href="https://www.instagram.com/puguverse/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-instagram"/>
        </a>
      </div>

      <HeaderButton showMenu={showMenu} handleShowMenu={handleShowMenu}/>
    </header>
  )
}

export default Header