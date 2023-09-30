import './History.css'
import { useState,useEffect } from 'react'

export default function History(){
    const[scrollPosition,setScrollPosition]=useState(0);


    useEffect(()=>{

        let slidefromLeft=document.querySelector('.PastContainer');
        let slideFromRight=document.querySelector('.futureContainer');

        const handleScroll=()=>{
            const currentPosition=window.scrollY;
            setScrollPosition(currentPosition);
            
            let desplazamiento= (scrollPosition / 1.2) - 500;
            if(desplazamiento>=0){
                desplazamiento=0;
            }
            slideFromRight.style.right =desplazamiento+'px'; 
            slidefromLeft.style.left = desplazamiento+'px';
        }
        window.addEventListener('scroll',handleScroll);

        return()=>{
            window.removeEventListener('scroll',handleScroll);
        }
    },[scrollPosition])


    return(
        <div className="HistoryContainer">
    
            <div className="PastContainer" >
                <div className='titleContainer'>
                    <h1>Nuestra historia ...</h1>
                </div>
                <div className='historyText'>
                    <h3>Hace décadas, en un terreno baldío en las afueras, visionarios urbanos crearon una urbanización única fusionando naturaleza y modernidad. Con un meticuloso plan, trazaron calles, plantaron árboles y diseñaron casas innovadoras. Con el tiempo, floreció en un vibrante centro comunitario, un testimonio vivo de colaboración y amor. Esta urbanización es un modelo de desarrollo sostenible y una fuente de inspiración para otras comunidades.
                    </h3>
                </div>
            </div>
            <div className='futureContainer'>
                <div className='historyText2'>
                    <h3>
                        En nuestra urbanización futurista, la tecnología redefine nuestro estilo de vida. Desde casas inteligentes hasta movilidad eléctrica y educación virtual, estamos creando un mundo donde la innovación y la sostenibilidad se entrelazan. Somos pioneros, un ejemplo de cómo el futuro puede ser brillante y ecológico. En cada avance, trazamos el camino hacia un mañana más inteligente y respetuoso con el medio ambiente.
                    </h3>
                </div>
                <div className='titleContainer2'>
                    <h1>... Hacia el futuro</h1>
                </div>
            </div>
        </div>
    )
}