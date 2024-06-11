import { Link } from 'react-scroll'
import '../styles/components/MintButton.sass'

const MintButton = () => {
  return (
    <div className="MintButton">
      <span className="MintButton__Label">Pugu NFT</span>
      <Link className="MintButton__Button" to="Mint" spy={true} smooth={true} offset={-100} duration={100}>Coming Soon</Link>
    </div>
  )
}

export default MintButton