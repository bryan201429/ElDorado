import './NavBar.css'
import Logo from '../../assets/MainLogo.png'
import { Link, animateScroll as scroll } from "react-scroll";
import { useNavigate, NavLink, useLocation } from 'react-router-dom';
import { useEffect,useState } from 'react';


export default function NavBar() {
    const navigate = useNavigate();
        
    const [dynamicClass, setDynamicClass] = useState('NavComponent');
    const [serviceClass,setServiceClass] = useState('NavComponent')
    // const [spyv, setSpyv] = useState(true);

    const scrollTo = (itemToScroll) => {
        sessionStorage.setItem('itemToScroll', itemToScroll);
        sessionStorage.setItem('route','/');
        navigate('/');
    };
    
    useEffect(() => {
        if (location.pathname!=='/') {
            console.log(location.pathname);
            setDynamicClass('NavComponentoff');
            setServiceClass('NavComponent')
            // setSpyv(false);

        }
        else{
            console.log(location.pathname);
            setDynamicClass('NavComponent');
            setServiceClass('NavComponentoff')
            // setSpyv(true);
        }

       
    }, [location.pathname]);

    const [scrolled,setScrolled]=useState(false);
    function handleScroll(){
        if(window.scrollY>80){
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
            <NavLink to="/" className='logoLink'><img src={Logo} id='Logo' alt="Logo"></img></NavLink>
            
            <div className='NavComponent'>
                <NavLink to='/socio' className='NavComponentLink'  
                    >SOCIO
                </NavLink>
            </div>

            <div className='NavComponent'>
                <NavLink to='/news' className='NavComponentLink' 
                    > NOTICIAS
                </NavLink>
            </div>
            <div className='NavComponent'>
                <NavLink to='/Services' className='NavComponentLink' activeClassName='active'
                    > ANUNCIOS
                </NavLink>
            </div>
            <div className={dynamicClass}>
                <Link to='mapContainer'
                    className='NavComponentLink' spy={true} smooth={true} offset={-50} duration={500}
                    onClick={() => scrollTo('mapContainer')}> UBICACIÓN
                </Link>
            </div>
            <div className={dynamicClass}>
                <Link to='mapaUrba'
                    className='NavComponentLink' spy={true} smooth={true} offset={-50} duration={500}
                    onClick={() => scrollTo('mapaUrba')}> MAPA
                </Link>
            </div>

        </div>
    )
}
