import './Anuncios.css'
import advertiseIcon from '../../assets/advertiseIcon.png'
/* Develop Anouncements */
export default function Anuncios(){
    return(
        <div className="AnunciosContainer">
            <div className='anuncieContainer'><img src={advertiseIcon} id='advertiseIcon'/> ¡Anuncie aqui! </div>
            <div className='advertiseContainer'></div>
        </div>
    )
}