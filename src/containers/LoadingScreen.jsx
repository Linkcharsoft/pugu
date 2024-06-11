import '../styles/containers/LoadingScreen.sass'
import Sneaker from '../assets/images/sneaker.png'
import Header from "@containers/Header";

const LoadingScreen = () => {
    return (
        <>
            <Header/>
            <div className="LoadingScreen">
                <h1 className="LoadingScreen__Title">Loading</h1>
                <div className="LoadingScreen__SneakerContainer">
                    <img className='LoadingScreen__Sneaker LoadingScreen__Sneaker_1' src={Sneaker}/>
                    <img className='LoadingScreen__Sneaker LoadingScreen__Sneaker_2' src={Sneaker}/>
                    <img className='LoadingScreen__Sneaker LoadingScreen__Sneaker_3' src={Sneaker}/>
                    <img className='LoadingScreen__Sneaker LoadingScreen__Sneaker_4' src={Sneaker}/>
                    <img className='LoadingScreen__Sneaker LoadingScreen__Sneaker_5' src={Sneaker}/>
                    <img className='LoadingScreen__Sneaker LoadingScreen__Sneaker_6' src={Sneaker}/>
                    <img className='LoadingScreen__Sneaker LoadingScreen__Sneaker_7' src={Sneaker}/>
                </div>
            </div>
        </>
    )
}

export default LoadingScreen