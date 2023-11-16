import React, { useState, useEffect, useRef } from 'react';
import './dropdown.css';
import logo from '../images/atstaylogo.webp';
import { Link } from 'react-router-dom';

export default function Dropdown() {
    const [isCoverVisible, setIsCoverVisible] = useState(false);
    const coverRef = useRef(null);
    const anywhereRef = useRef(null);

    const openbox = () => {
        setIsCoverVisible(!isCoverVisible);
    };

    const handleOutsideClick = (event) => {
        if (coverRef.current && !coverRef.current.contains(event.target) && !anywhereRef.current.contains(event.target)) {
            setIsCoverVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <div style={{ margin: 'auto' }}>
            <div className="boxrad my-3">
                <div className="subbox">
                    <div className="any" ref={anywhereRef} onClick={openbox}>AnyWhere</div>
                </div>
            </div>

            <div className="coverss">
                <div
                    className={`cover ${isCoverVisible ? 'visible' : ''}`}
                    ref={coverRef}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    <nav className="navbar navbar-expand-xl navbar-light bg-light" style={{ width: '668px' }}>
                        <div className="imap" style={{display:'flex' , justifyContent:'space-around' , width:'100%' , alignItems:'center'}}>
                            <Link to="/" className="navbar-brand">
                                <img src={logo} alt="Logo" className="logoimg" />
                            </Link>
        

        <div className="smtp" id="" style={{width:'300px'}}>
          <ul className="navbar-nav falja">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/attours" className="nav-link">
                Tour
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/atstays" className="nav-link"> 
                Stays
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/bloggerpage" className="nav-link">
                Blogs
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
            <input type="text" className="desti" placeholder="Destination" style={{maxWidth:"150px" ,height:'0px' , marginTop:'13px' , padding:'15px' , border:'1px solid #000' , borderRadius:'20px' , background:'black'}}/>
            {/* <i class="fa-solid fa-magnifying-glass mx-"></i> */}
        </div>
      </div>

      
      
    </nav>

            </div>
        </div>


    </div>
  )
}
