import gsap from 'gsap'

const HeaderButton = ({ showMenu, handleShowMenu }) => {

  const handleClick = () => {
    handleShowMenu()

    if(showMenu) {
      gsap.to('.Header__Button-Line-1', {
        rotate: 0,
        duration: .2,
      })
      gsap.to('.Header__Button-Line-2', {
        translateX: 0,
        opacity: 1,
        duration: .2
      })
      gsap.to('.Header__Button-Line-3', {
        rotate: 0,
        duration: .2
      })
    } else {
      gsap.to('.Header__Button-Line-1', {
        transformOrigin: '2px -2px',
        rotate: 45,
        duration: .5
      })
      gsap.to('.Header__Button-Line-2', {
        translateX: '100%',
        opacity: 0,
        duration: .2
      })
      gsap.to('.Header__Button-Line-3', {
        rotate: -45,
        duration: .5
      })
    }
  }
  return (
    <svg className="Header__Button" width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleClick}>
      <line className="Header__Button-Line-1" x1="1" y1="3" x2="40" y2="3" stroke="#FFF" strokeWidth="3" strokeLinecap="round"/>
      <line className="Header__Button-Line-2" x1="10" y1="14.5" x2="30" y2="14.5" stroke="#FFF" strokeWidth="3" strokeLinecap="round"/>
      <line className="Header__Button-Line-3" x1="1" y1="27" x2="40" y2="27" stroke="#FFF" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  )
}

export default HeaderButton