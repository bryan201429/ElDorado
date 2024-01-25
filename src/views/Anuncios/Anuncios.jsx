import './Anuncios.css'
import advertiseIcon from '../../assets/advertiseIcon.png'
/* Develop Anouncements */
/*Falta poner anuncios*/
export default function Anuncios(){
    return(
        <div className="AnunciosContainer">
            <div className='anuncieContainer'><img src={advertiseIcon} id='advertiseIcon' alt='advertiseIcon.jpg'/> ¡Anuncie aqui! </div>
            <div className='advertiseContainer'></div>
        </div>
    )
}   