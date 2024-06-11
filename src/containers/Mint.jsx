import MintButton from '../components/MintButton'
import Title from '../assets/images/get-your-pugu.svg'
import Arrow from '../assets/images/garabato-arrow-2.png'
import Garabato from '../assets/images/garabato-3.png'
import '../styles/containers/Mint.sass'

const Mint = () => {
  return (
    <section className='Mint' id='Mint'>
      <div className="Mint__Title-Container">
        <img className='Mint__Title' src={Title} alt="Get Your Pugu" title="Get Your Pugu"/>
        {/* <h2 className="Mint__Title">
          GET<br/>YOUR<br/>PUGU.
        </h2> */}
        <span className="Mint__ExtraText">
          *Pugu Mint? Your Pugu?<br/>
          Get your pugu!
          {/* <img className='Mint__Garabato' src={Garabato}/> */}
        </span>
      </div>
      <div className="Mint__Aside">
        <div className='Mint__Aside-Items'>
          <h3 className="Mint__Aside-Title">Price</h3>
          <span className='Mint__Aside-Value'>0.2 ETH + Gas Free</span>
          <h3 className="Mint__Aside-Title">Max</h3>
          <span className='Mint__Aside-Value'>1 per Wallet</span>
          <h3 className="Mint__Aside-Title">Supply</h3>
          <span className='Mint__Aside-Value'>
            x126 NFT
            <div className="Mint__Arrow-Container">
              <img className='Mint__Arrow' src={Arrow}/>
              <span className="Mint__ExtraText">*Pugu the mickey<br/>mouse of web3</span>
            </div>
          </span>

        </div>

        <div className="MintButton">
          <span className="MintButton__Label">1 Pugu NFT</span>
          <button className="MintButton__Button">Coming Soon</button>
        </div>
      </div>
    </section>
  )
}

export default Mint
