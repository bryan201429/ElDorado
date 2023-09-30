import './Home.css'
import Slider from '../../components/Slider/Slider'
import Ubication from '../../components/Ubication/Ubication'
import History from '../../components/History/History'
import { useEffect } from 'react'

export default function Home(){

    useEffect(()=>{
        const itemToScroll=sessionStorage.getItem('itemToScroll')
        const elementToScroll = document.getElementById(itemToScroll);

        if(itemToScroll){
            elementToScroll.scrollIntoView({
                behavior: 'smooth', // Agrega desplazamiento suave
                block: 'center',     // Desplaza el elemento al principio de la ventana
              });
              sessionStorage.setItem('itemToScroll','');
        }
    },[])
    return(
        <div id="HomeContainer">
            <Slider classname='Slider'></Slider>
            <History></History>
            <Ubication></Ubication>
        </div>
        
    )
}