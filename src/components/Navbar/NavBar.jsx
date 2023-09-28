import './NavBar.css'
import Logo from '../../assets/MainLogo.png'
import { Link, animateScroll as scroll } from "react-scroll";
import { useNavigate, NavLink, useLocation } from 'react-router-dom';
import { useEffect,useState } from 'react';
// import { useEffect, useState } from 'react';

export default function NavBar() {
    // const navigate = useNavigate();
        
    // const [dynamicClass, setDynamicClass] = useState('NavComponent');
    // const [serviceClass,setServiceClass] = useState('NavComponent')
    // // const [spyv, setSpyv] = useState(true);

    // const scrollToDetailBox = (itemToScroll) => {
    //     sessionStorage.setItem('itemToScroll', itemToScroll);
    //     sessionStorage.setItem('route','/');
    //     navigate('/');
    // };
    
    // useEffect(() => {
    //     if (location.pathname=='/Services') {
    //         console.log(location.pathname);
    //         setDynamicClass('NavComponentoff');
    //         setServiceClass('NavComponent')
    //         // setSpyv(false);

    //     }
    //     else{
    //         console.log(location.pathname);
    //         setDynamicClass('NavComponent');
    //         setServiceClass('NavComponentoff')
    //         // setSpyv(true);
    //     }

       
    // }, [location.pathname]);

    const [scrolled,setScrolled]=useState(false);
    function handleScroll(){
        if(window.scrollY>100){
            // console.log('scrolled')
            setScrolled(true);
        }
        else{
            setScrolled(false);
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',handleScroll)
        return()=>{
            window.removeEventListener('scroll', handleScroll);
        }
    },[])

    return (
        <div className={`NavContainer ${scrolled? 'scrolled':''}`}>
            <img src={Logo} id='Logo' alt="Logo"></img>
            <div className='NavComponent'>
                <Link to='MapsContainer'
                    className='NavComponentLink' spy={true} smooth={true} offset={-130} duration={500}
                    onClick={() => scrollToDetailBox('MapsContainer')}> UBICACIÓN
                </Link>
            </div>
            <div className='NavComponent'>
                <NavLink to='/Services' className='NavComponentLink' 
                    > NOTICIAS
                </NavLink>
            </div>
            <div className='NavComponent'>
                <NavLink to='/Services' className='NavComponentLink' 
                    > ANUNCIOS
                </NavLink>
            </div>
            <div className='NavComponent'>
                <NavLink to='/Services' className='NavComponentLink' 
                    >SOCIO
                </NavLink>
            </div>
        </div>
    )
}
