import { useState } from 'react'
import PuguPesa from '../assets/gifs/pugu-pesa-min.gif'
import Hawai from '../assets/images/hawaii.png'
import Garabato from '../assets/images/garabato-4.png'
import '../styles/containers/Manifest.sass'

const Manifest = () => {
  const [ showText, setShowText ] = useState(false)

  return (
    <section className='Manifest' id='Manifest'>
      <img className='Manifest__Hawai Rotate' src={Hawai}/>
      <img className='Manifest__Pugu' src={PuguPesa}/>
      <div className='Manifest__Text-Container'>
        <h3 className='Manifest__Title'>
          This <span className="Manifest__Title-Highlight">stop motion NFT</span> project is about the community and Pugu going on a life changing adventure.
        </h3>

        <span className="Manifest__Caption">
          One that has the potential to change lives.
        </span>
        <p className='Manifest__Text'>
          Puguverse will become an ecosystem that revolves around genesis and general holders
          and will always benefit them. What does that mean? The founders know so so many
          accomplished people who are involved in the entertainment industry and want to get
          into the NFT space but don't have the know-how. We want to onboard them into the
          Puguverse ecosystem where the founders and genesis holders will help them in exchange
          of free mints and that they use the Puguverse brand in part of their projects.
        </p>
        {
          showText && (
            <p className='Manifest__Text'>
              The reason we want them to use the Puguverse brand is to make Pugu the mickey mouse
              of web3 so then we can license to brands and airdrop the earnings to genesis and
              general holders! This project is a first of its kind. The founders are all doxxed and super
              accomplished. They are using all of their abilities to create a project which actually
              rewards its holders, not with a community fund that holders never benefit from but with
              actual eth airdrops and free mints!
            </p>
          )
        }

        <div className='Manifest__Button-Container'>
          <button className="Manifest__Button" onClick={() => setShowText(!showText)}>
            {
              showText
                ? 'Read less'
                : 'Continue reading...'
            }
          </button>
          <img className='Manifest__Garabato' src={Garabato}/>
          <span className="Manifest__ExtraText">
            {
              showText
                ? '*Tap to read less'
                : '*Tap to continue reading'
            }</span>
        </div>
      </div>
    </section>
  )
}

export default Manifest