import React,{useState , useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/atstaylogo.webp';

import Carousel from 'react-bootstrap/Carousel';
import carousel1 from '../images/carouselimg1.webp';
import carousel2 from '../images/carouselimg2.webp';
import carousel3 from '../images/carouselimg3.webp';
import safe1 from '../images/atraskisafe1.webp';
import safe2 from '../images/atraskisafe2.webp';
import safe3 from '../images/atraskisafe3.webp';
import safe4 from '../images/atraskisafe4.webp';
import rooms from '../images/rooms.jpg';
import beach from '../images/beach.jpg';
import lake from '../images/lake.jpg';
import camping from '../images/camping.jpg';
import trending from '../images/trending.jpg';
import mansion from '../images/Mansion.jpg';
import tea from '../images/tea.jpg';
import less from '../images/less.png'
// import './HomeComponents.css';
import Footer from './Footer';
import './HomeComponents.css';
import { useSwipeable } from 'react-swipeable';
import Dropdown from './dropdown';

import { productData } from './Atstaysdata';

export default function HomeComponents() {
  const [imgs, setImg] = useState(productData);
  const [searchQuery, setSearchQuery] = useState("");

  const btnpressprev = () => {
    // const box = document.getElementById('box'); // Get the element by its id
  let box = document.querySelector('.product-container');

    if (box) {
      const width = box.clientWidth;
      box.scrollLeft -= width; // Use -= to scroll to the left
      console.log(width);
    } else {
      console.error('Element with id "box" not found.');
    }
  }

  
  
  const btnpressnext = () => {
    // const box = document.getElementById('box'); // Get the element by its id
  let box = document.querySelector('.product-container');

    if (box) {
      const width = box.clientWidth;
      box.scrollLeft += width; // Use += to scroll to the right
      console.log(width);
    } else {
      console.error('Element with id "box" not found.');
    }
  }

  // window.location.reload();

    const handleProductClick = (productId , productId2) => {
      // Filter product cards based on the clicked image's id
      
      const filteredImgs = imgs.filter((img) => img.ids === productId || img.ids1 === productId2);
      // const filteredImgs1 = imgs.filter((img) => img.ids1 === productId2);
      console.log(filteredImgs)
        setImg(filteredImgs);
        // setImg(filteredImgs1);
      
      

    
      // Update the search query with the selected destination
      setSearchQuery(filteredImgs[0].place);
      
      
      
    };

    const handleSwipe = (direction) => {
      console.log(`Swiped ${direction}`);
      if (direction === 'left') {
        btnpressnext();
      } else if (direction === 'right') {
        btnpressprev();
      }
    };
  
    // Use the useSwipeable hook to add swipe functionality
    const handlers = useSwipeable({
      onSwipedLeft: () => handleSwipe('left'),
      onSwipedRight: () => handleSwipe('right'),
    });
  

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
    const filteredProducts = imgs.filter((img) =>
    img.place.toLowerCase().includes(searchQuery.toLowerCase())
  );
  //  

    return (
      <>
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
                    <nav className="navbar navbar-expand-xl navbar-light" style={{ width: '668px' }}>
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
            <input type="text" className="desti" placeholder="Destination" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={{maxWidth:"150px" ,height:'0px' , marginTop:'13px' , padding:'15px' , border:'1px solid #000' , borderRadius:'20px'}}/>
            {/* <i class="fa-solid fa-magnifying-glass mx-"></i> */}
        </div>
      </div>

      
      
    </nav>

            </div>
        </div>


    </div>

        <div className="product-carousel" {...handlers}>

<button className="pre-btn" onClick={btnpressprev}><p><img src={less} style={{width:'22px'}}/></p></button>
<button className="next-btn" onClick={btnpressnext}><p><img src={less} style={{width:'22px',transform: 'scaleX(-1)'}}/></p></button>

<div className="product-container" >
  <div>
<img
  className="d-block mycard"
  src={rooms}
  alt="First slide"
  onClick={() => handleProductClick(1,2)} 
  
/>
<p>rooms</p>
</div>

<div>
<img
  className="d-block mycard"
  src={beach}
  alt="First slide"
  onClick={() => handleProductClick(2,7)} 
  
  
/>
<p>Beach</p>
</div>

<div>
<img
  className="d-block mycard"
  src={lake}
  alt="First slide"
  onClick={() => handleProductClick(3)} 
  
  
/>
<p>Lakes</p>
</div>

<div>
<img
  className="d-block mycard"
  src={trending}
  alt="First slide"
  onClick={() => handleProductClick(4)} 
  
/>
<p>Trending</p>
</div>

<div>
<img
  className="d-block mycard"
  src={camping}
  alt="First slide"
  
  
/>
<p>Camping</p>
</div>

<div>
<img
  className="d-block mycard"
  src={mansion}
  alt="First slide"
  
  
/>
<p>Mansion</p>
</div>

<div>
<img
  className="d-block mycard"
  src={tea}
  alt="First slide"
  
  
/>
<p> Breakfast</p>
</div>

<div>
<img
  className="d-block mycard"
  src={rooms}
  alt="First slide"
  
  
/>
<p>rooms</p>
</div>

<div>
<img
  className="d-block mycard"
  src={rooms}
  alt="First slide"
  
  
/>
<p>rooms</p>
</div>

<div>
<img
  className="d-block mycard"
  src={rooms}
  alt="First slide"
  
  
/>
<p>rooms</p>
</div>

{/* <div>
<img
  className="d-block mycard"
  src={rooms}
  alt="First slide"
  
  
/>
<p>rooms</p>
</div>


<div>
<img
  className="d-block mycard"
  src={rooms}
  alt="First slide"
  
  
/>
<p>rooms</p>
</div>


<div>
<img
  className="d-block mycard"
  src={rooms}
  alt="First slide"
  
  
/>
<p>rooms</p>
</div>


<div>
<img
  className="d-block mycard"
  src={rooms}
  alt="First slide"
  
  
/>
<p>rooms</p>
</div>*/}
</div> 



</div>  

<div className="container-fluid" style={{display:'flex' , flexWrap:'wrap',gap:'50px' , justifyContent:'center'}}>
{imgs.map((elm) => {
    return(
      <>
      <div className="" style={{display:'flex' }}>
      <Link to={`/atstay/${elm.id}`}>
        <div className="card mt-5 cds mb-5" style={{ borderRadius: '15px', width: '300px', height: '320px', border:'none' }}>
                        <div className="images">
                          <img
                            src={elm.imges}
                            className="img-fluid"
                            style={{ height: '262px', width: '300px', borderRadius:'15px' }}
                          ></img>
                        </div>

                        <div className="tourinfo">
                          <p className="my-2 mx-2 d-flex" style={{ textTransform: 'uppercase', fontSize: '13px' , fontWeight:'700' }}>
                            <i className="fa-solid fa-location-dot mx-1"></i>
                            {elm.place}
                          </p>
                          <h6 className="mx-3 ">{elm.trip}</h6>
                          <span className="" >
                            
                            {elm.days}
                          </span>
                          <span className="mx-3" style={{fontWeight:'700' , fontSize:'18px'}}>₹ {elm.price}</span>
                        </div>
                      </div>
                      </Link>
                      </div>
      </>
    )
  })
}

</div>


    
    {/* <div>
      <div className="container">
          <h2 className="mt-5">Our Commitment to Safe Holidays</h2>

          <div className="d-flex">
          <div className="Image text-center">
            <img src={safe1} className="img-fluid w-75"/>

            <div className="box text-center">
              <text className="heading1">Sanitized Premises</text>
              <p className="">Thoroughly sanitized commute Vehicles, Hotel rooms and premises</p>
            </div>
          </div>

          <div className="Image text-center">
            <img src={safe2} className="img-fluid w-75"/>

            <div className="box text-center">
              <text className="heading1">Sanitized Premises</text>
              <p className="">Thoroughly sanitized commute Vehicles, Hotel rooms and premises</p>
            </div>
          </div>


          <div className="Image text-center">
            <img src={safe3} className="img-fluid w-75"/>

            <div className="box text-center">
              <text className="heading1">Sanitized Premises</text>
              <p className="">Thoroughly sanitized commute Vehicles, Hotel rooms and premises</p>
            </div>
          </div>


          <div className="Image text-center">
            <img src={safe4} className="img-fluid w-75"/>

            <div className="box text-center">
              <text className="heading1">Sanitized Premises</text>
              <p className="">Thoroughly sanitized commute Vehicles, Hotel rooms and premises</p>
            </div>
          </div>
          </div>
      </div>  
    </div> */}


    



    </>
        );
}