import './Ubication.css'
import mapaUrb from '../../assets/MapaUrba.png'
import googleIcon from '../../assets/googleIcon.png'

export default function Ubication(){

    return(
        <div id='ubicationContainer'>
            <div className='mapContainer'>
                <div className='ubicationTitle'>
                    <img id='googleIcon'src={googleIcon}></img>
                    <h1>Ubicación:</h1>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1464.8919185460418!2d-71.57298679238548!3d-16.42524923894702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91423561e6bbb9fd%3A0x22355c050f755930!2sUrb.%20El%20Dorado%2C%20Arequipa%2004013!5e0!3m2!1ses!2spe!4v1695763578556!5m2!1ses!2spe" 
                className='googleMap'
                style={{ border: "0" }} 
                allowfullscreen="" loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"></iframe>
                


            </div>
            <div className='mapaUrba'>
                    <img id='map' src={mapaUrb}></img>
            </div>
        </div>
    )

}