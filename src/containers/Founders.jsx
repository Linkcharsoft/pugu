import { useState, useEffect, useRef } from 'react'
import Pugu from '../assets/images/pugu-corazones.png'
import Garabato from '../assets/images/garabato-1.png'
import Jeringa from '../assets/images/jeringa.png'
import Arrow from '../assets/images/garabato-arrow-3.png'
import Brain from '../assets/images/brain.png'
import DragonTail from '../assets/images/dragon-tail.png'
import '../styles/containers/Founders.sass'

const Founders = () => {
  const [ puguTopPosition, setPuguTopPosition ] = useState('')
  const foundersRef = useRef(null)

  useEffect(() => {
    setInterval(() => {
      if(window.matchMedia('(max-width: 1200px)').matches && foundersRef.current) {
        const topPosition = foundersRef.current.offsetTop
        setPuguTopPosition(topPosition)
      }
    }, 500)

    window.addEventListener('resize', () => {
      if(window.matchMedia('(max-width: 1200px)').matches) {
        const topPosition = foundersRef.current.offsetTop
        setPuguTopPosition(topPosition)
      }
    })
  }, [foundersRef])

  return (
    <section className="Founders" id='Founders' ref={foundersRef}>
      <img className='Founders__Pugu' style={puguTopPosition ? { top: `${puguTopPosition}px` } : { top: 'unset'}} src={Pugu}/>
      <h2 className="Founders__Title">
        The artist
        {/* <img className='Founders__Garabato' src={Garabato}/> */}
        <img className='Founders__Jeringa' src={Jeringa}/>
        <img className='Founders__Arrow' src={Arrow}/>
      </h2>
      <div className="Founders__Text-Container">
        <span className="Founders__Caption">
          Lina is a Stopmotion artist, content
          creator, brand caretaker, art director.
        </span>
        <p className="Founders__Text">
          Lina is a lover of color, fun and magic. She has worked with
          huge companies like Amazon, McDonald’s, Dove, Pepsi and
          Taco Bell. Now she is building Pugu and the Puguverse! Maybe
          she will get some nice collabs for Pugu in the future.
          <img className='Founders__Brain Rotate' src={Brain}/>
        </p>
        <a className="Founders__Instagram" href="https://www.instagram.com/puguverse/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-instagram"/>
          <span>*Check Lina's work</span>
        </a>
      </div>
      <div className="Founders__Item-Container">
        <div className="Founders__Item">
          <h3 className="Founders__Item-Name">Martin</h3>
          <span className="Founders__Item-Rol">Network in the movie industry.</span>
        </div>
        <div className="Founders__Item">
          <h3 className="Founders__Item-Name">Eze</h3>
          <span className="Founders__Item-Rol">Business Strategy and Execution.</span>
        </div>
        <div className="Founders__Item">
          <h3 className="Founders__Item-Name">Fede</h3>
          <span className="Founders__Item-Rol">Art Director.</span>
        </div>
        <div className="Founders__Item">
          <h3 className="Founders__Item-Name">Joseph</h3>
          <span className="Founders__Item-Rol">Community Builder.</span>
        </div>
        <img className='Founders__Image' src={DragonTail} alt="" />
      </div>
    </section>
  )
}

export default Founders