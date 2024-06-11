import MintButton from '../components/MintButton'
import Pugu from '../assets/images/pugu-party.png'
import Sneakers from '../assets/images/sneakers.png'
import Arrow from '../assets/images/garabato-arrow-4.png'
import '../styles/containers/Footer.sass'

const Footer = () => {
  return (
    <>
      <footer className="Footer">
        <h3 className="Footer__Title">
          Get Your Pugu Now
          <div className="Footer__Sneakers-Container">
            <img className='Footer__Sneakers Rotate' src={Sneakers}/>
            <img className='Footer__Arrow' src={Arrow}/>
            <span className="Footer__ExtraText">*Pugu's favorite shoes</span>
          </div>
        </h3>
        <MintButton/>

        <img className='Footer__Pugu' src={Pugu}/>

      </footer>
      <div className="Linkchar-Container">
        Powered by
        <a className="Linkchar" href="https://linkchar.com/" target="_blank" rel="noopener noreferrer">
          Linkchar <span>Software Development</span>
        </a>
      </div>
    </>
  )
}

export default Footer