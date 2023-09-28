import './Home.css'
import Slider from '../../components/Slider/Slider'
import Ubication from '../../components/Ubication/Ubication'
import { useEffect } from 'react'

export default function Home(){


    return(
        <div id="HomeContainer">
            <Slider classname='Slider'></Slider>
            <Ubication></Ubication>
        </div>
        
    )
}