import PuguSoccer from '../assets/gifs/pugu-soccer-min.gif'
import Viking from '../assets/images/viking.png'
import Arrow from '../assets/images/garabato-arrow-1.png'
import Garabato from '../assets/images/garabato-1.png'
import '../styles/containers/Adventure.sass'

const Adventure = () => {
  return (
    <section className="Adventure" id='Adventure' >
      <div className='Adventure__Text-Left-Container'>
        <div className="Adventure__Viking-Container">
          <img className='Adventure__Viking-Image' src={Viking} alt="Viking Helmet" title="Viking Helmet"/>
          <img className='Adventure__Viking-Arrow' src={Arrow}/>
          <span className="Adventure__ExtraText">*Viking helmet</span>
        </div>
        <p className="Adventure__Text-Left">Pugu is lost on a great adventure where he is exploring new places, always vibing.</p>
      </div>
      <div>
        <div className="Adventure__Title-Container">
          {/* <img className='Adventure__Garabato' src={Garabato}/> */}
          <h2 className="Adventure__Title">Pugu</h2>
          <span className="Adventure__ExtraText">*Pugu from the puguverse</span>
        </div>
        <p className="Adventure__Text">Pugu is becoming the mascot of huge irl companies, making his own ecosystem.</p>
        <p className="Adventure__Text">He likes to wander around the different places of the Puguverse in search of something. He is looking for 126 lifelong frens who will join him in his big adventure. It is so big that Pugu can’t accomplish it alone. He needs YOU.</p>
      </div>
      <img className="Adventure__Pugu" src={PuguSoccer}/>
    </section>
  )
}

export default Adventure