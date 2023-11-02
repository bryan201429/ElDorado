import './Anuncios.css'
import advertiseIcon from '../../assets/advertiseIcon.png'

export default function Anuncios(){
    return(
        <div className="AnunciosContainer">
            <div className='anuncieContainer'>Anuncie aqui! <img src={advertiseIcon}></img></div>
        </div>
    )
}