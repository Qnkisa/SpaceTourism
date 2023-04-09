import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import { useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation();
    const isActive = (path) => {
        return location.pathname === path ? { borderBottom: '2px solid #FFF' } : {};
      };

    const [nav,setNav] = useState(false);
    
    const handleNavbar = () =>{
        setNav(prevValue => !prevValue)
    }

    useEffect(() => {
        return () => {
          setNav(false);
        };
      }, [location]);

  return (
    <header>
        <div className="nav-logo">
            <img src="/logo.svg" alt="" />
        </div>
        <hr className='nav-line'/>
        <nav>
            <ul className={nav ? "navActive" : ""}>
                <li>
                    <Link to="/" style={isActive('/')}> <span>00</span> Home</Link>
                </li>
                <li>
                    <Link to="/destination" style={isActive('/destination')}> <span>01</span> Destination</Link>
                </li>
                <li>
                    <Link to="/crew" style={isActive('/crew')}> <span>02</span> Crew</Link>
                </li>
                <li>
                    <Link to="/technology" style={isActive('/technology')}> <span>03</span> Technology</Link>
                </li>
            </ul>
        </nav>
        <div className={nav ? "hamburger hamburgerActive" : "hamburger"} id='hamburger' onClick={handleNavbar}>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
        </div>
    </header>
  )
}
