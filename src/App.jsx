import Header from './containers/Header'
import Home from './containers/Home'
import Adventure from './containers/Adventure'
import Mint from './containers/Mint'
import Manifest from './containers/Manifest'
import Founders from './containers/Founders'
import Footer from './containers/Footer'
import Canvas from './containers/Canvas'
import LoadingScreen from './containers/LoadingScreen'
import React, {useState} from 'react'

const App = () => {

  const [done, setDone] = useState(undefined)

  return (
    <main>
      <Canvas setDone={setDone}/>

      <div className={!done ? ('CoverShow') : ('CoverHide')}>
        <LoadingScreen/>
      </div>

      {done && (
        <main className='App'>
          <Header/>
          <Home/>
          <main className="Content">
            <Adventure/>
            <Mint/>
            <Manifest/>
            <Founders/>
            <Footer/>
          </main>
        </main>
      )}
    </main>
  )
}

export default App