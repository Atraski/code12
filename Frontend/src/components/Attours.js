import React, { useState } from 'react';
import Navbar from './Navbar';
import attour1 from '../images/attour1.webp';
import './slider.css';
import './Attours.css';
import { productData } from './Atourdata.js';
import Footers from './Footer';
import Slider from 'react-slider';
import {Link} from 'react-router-dom';
import carousel1 from '../images/carouselimg1.webp';
import rooms from '../images/rooms.jpg';
import beach from '../images/beach.jpg';
import lake from '../images/lake.jpg';
import camping from '../images/camping.jpg';
import trending from '../images/trending.jpg';
import mansion from '../images/Mansion.jpg';
import tea from '../images/tea.jpg';
// import rooms from '../images/rooms.jpg';
// import rooms from '../images/rooms.jpg';


const MIN = 750.00;
const MAX = 67500.00;


export default function Attour() {
  const [imgs, setImg] = useState(productData);
  // const [values, setValues] = useState([MIN, MAX]);
  const [selectedPriceRange, setSelectedPriceRange] = useState([MIN, MAX]);


  const filterTourCards = () => {
    return imgs.filter((datas) => {
      const price = datas.price;
      return price >= selectedPriceRange[0] && price <= selectedPriceRange[1];
    });
  };

  const clickhere=()=>{
    const help = document.querySelector('.hideeee');
    help.style.setProperty('display', 'block', 'important');
  }

  const hidebox=()=>{
    const hideboxs = document.querySelector('.hideeee');
    hideboxs.style.setProperty('display', 'none', 'important')
  }

  const filterTour = filterTourCards();


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
  

  // console.log('value', values);
  return (
   
    <div>


      <Navbar />

   
      {/* <div className="product-carousel">

        <button className="pre-btn" onClick={btnpressprev}><p>&lt;</p></button>
        <button className="next-btn" onClick={btnpressnext}><p>&gt;</p></button>

        <div className="product-container">
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
          src={beach}
          alt="First slide"
          
          
        />
        <p>Beach</p>
        </div>

        <div>
        <img
          className="d-block mycard"
          src={lake}
          alt="First slide"
          
          
        />
        <p>Lakes</p>
        </div>

        <div>
        <img
          className="d-block mycard"
          src={trending}
          alt="First slide"
          
          
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
        <p>Tea and Breakfast</p>
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


        <div>
        <img
          className="d-block mycard"
          src={rooms}
          alt="First slide"
          
          
        />
        <p>rooms</p>
        </div>
        </div>

      </div>
      */}
    

      <div className="container-fluid">
        <div className="imgbg">

        </div>


      </div>

      <div className="container-fluid">
        <div className="row">
          {/* //After some time we will start */}
          <div className="col-md-4 hideeee">

            <div className="filter fil" style={{ border: '1px solid #66cccc', width:'60%', marginLeft:'100px' , marginTop:'60px' , borderRadius:'25px', boxShadow:'2px 2px 5px grey' }}>
              <div className="filter_heading p-3 d-flex justify-content-between" style={{ borderBottom: '1px solid #66cccc' }}>
                <h5>FILTER BY</h5>
                <span className="btn disply"style={{border:'1px solid black' , display:'none'}} onClick={hidebox}>Close</span>
              </div>

              <div className="filterRange p-3" >
                <h6>Filter Price</h6>
                <span className="mb-4">₹{selectedPriceRange[0]}</span>  <span>₹{selectedPriceRange[1]}</span>
                <Slider className={"slider mt-2"}
                  value={selectedPriceRange}
                  min={MIN}
                  max={MAX}
                  onChange={setSelectedPriceRange}
                  
                />
                {/* <h6 className="mt-3" style={{color:'#66cccc' , cursor:'pointer'}}>APPLY</h6> */}
              </div>

              {/* <div className="categories p-3" style={{borderTop:'1px solid #66cccc'}}>
                <h6>Categories</h6>

                
                  <div className="categoriesFilter">
                    <form>
                      <div className="beach">
                      <input type="checkbox" /> Beach
                      </div>                                    

                      <div className="Citytrips">
                      <input type="checkbox" /> City trips
                      </div>

                      <div className="Ecotourism">
                      <input type="checkbox" /> Ecotourism
                      </div>

                      <div className="Escorted">
                      <input type="checkbox" /> Escorted Tour
                      </div>

                      <div className="Family">
                      <input type="checkbox" /> Family
                      </div>

                      <div className="Group">
                      <input type="checkbox" /> Group Tour
                      </div>

                      <div className="Hill">
                      <input type="checkbox" /> Hill Station
                      </div>

                      <div className="Honeymoon">
                      <input type="checkbox" /> Honeymoon
                      </div>

                      <div className="Hosted">
                      <input type="checkbox" /> Hosted Tour
                      </div>

                      <div className="Internation">
                      <input type="checkbox" /> Internation Tour
                      </div>

                      <div className="Ligula">
                      <input type="checkbox" /> Ligula
                      </div>

                      <div className="Mountains">
                      <input type="checkbox" /> Mountains
                      </div>

                      <div className="Trek">
                      <input type="checkbox" /> Trek
                      </div>

                      <div className="Wildlife">
                      <input type="checkbox" /> Wildlife
                      </div>


                    </form>
                  </div>
              </div> */}

            </div>

          </div>


          <div className="col-md-8 exp">
          <div>  <span className="btn mt-2 openn" style={{width:'10%', float:'right',border:'1px solid black' ,marginRight:'50px' , display:'none' }} onClick={clickhere}>Filter</span>            </div>

          <h4 className="mt-5 mx-3">{filterTour.length} tours found</h4>
            
            <div className="container-fluid d-flex flex-wrap justify-content-between setup">
              
              {
                filterTourCards().map((datas) => {
                  return (

                    <Link to={`/family-trip/${datas.id}`} style={{textDecoration:'none'}}>
                    <div className="card mt-3" style={{ borderRadius: '15px', width: '280px', height: '320px' }}>
                      
                      <div className="images">
                        <img src={datas.imges} className="img-fluid" style={{ height: '200px', width: '280px', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}></img>
                      </div>

                      <div className="tourinfo">
                        <p className="my-2 mx-2" style={{ textTransform: 'uppercase', fontSize: '12px' }}><i className="fa-solid fa-location-dot mx-1" ></i>{datas.place}</p>
                        <h6 className="mx-2 ">{datas.trip}</h6>
                        <span className="mx-2"><i class="fa-regular fa-clock mx-1 my-3" style={{ fontSize: '12px' }}></i>{datas.days}</span><span className="mx-2">₹{datas.price}</span>
                      </div>

                    </div>
                    </Link>

                  )
                })
              }
            </div>
          </div>
        </div>
      </div>

      <Footers />

    </div>
    
  )
}
