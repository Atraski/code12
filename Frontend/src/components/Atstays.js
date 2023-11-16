import React, { useState } from 'react';
import Navbar from './Navbar';
import './Atstays.css';
import './slider.css';
import attour1 from '../images/attour1.webp';
import { Link, useNavigate, useParams } from 'react-router-dom';
import rooms from '../images/rooms.jpg';
import beach from '../images/beach.jpg';
import lake from '../images/lake.jpg';
import camping from '../images/camping.jpg';
import trending from '../images/trending.jpg';
import mansion from '../images/Mansion.jpg';
import tea from '../images/tea.jpg';

import { productData } from './Atstaysdata';
import Footers from './Footer';
import Slider from 'react-slider';

const MIN = 750.00;
const MAX = 17400.00;

export default function Atstays() {
  const params = useParams();

  const [imgs, setImg] = useState(productData);
  const [num, setnum] = useState(0);
  const [nums, setnums] = useState(0);
  const [numss, setnumss] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const [selectedPriceRange, setSelectedPriceRange] = useState([MIN, MAX]);

  const filterTourCards = () => {
    return imgs.filter((datas) => {
      const title = datas.trip.toLowerCase(); // Assuming 'trip' is the title property
      return (
        (title.includes(searchQuery.toLowerCase()) ||
          datas.place.toLowerCase().includes(searchQuery.toLowerCase())) &&
        datas.price >= selectedPriceRange[0] &&
        datas.price <= selectedPriceRange[1]
      );
    });
  };

  const filterTour = filterTourCards();

  const inc = () => {
    setnum(num + 1);
  };
  const inc1 = () => {
    setnums(nums + 1);
  };
  const inc2 = () => {
    setnumss(numss + 1);
  };
  const dec = () => {
    if (num > 0) {
      setnum(num - 1);
    } else {
    }
  };
  const dec1 = () => {
    if (nums > 0) {
      setnums(nums - 1);
    } else {
    }
  };
  const dec2 = () => {
    if (numss > 0) {
      setnumss(numss - 1);
    } else {
    }
  };

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

  const clickhere=()=>{
    const help = document.querySelector('.hideeee');
    help.style.setProperty('display', 'block', 'important');
  }

  const hidebox=()=>{
    const hideboxs = document.querySelector('.hideeee');
    hideboxs.style.setProperty('display', 'none', 'important')
  }

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
        <div className="imgbg" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div 
            style={{
              backgroundColor: 'rgba(0,0,0,0.6)',
              width: '650px',
              display: 'flex',
              alignItems: 'center',
              border: '1px solid #66cccc',
              borderRadius: '10px',
            }}
          >
            <input
              type="text"
              placeholder="Search your destination"
              className="ps-3 place"
              style={{
                width: '100%',
                height: '40px',
                background: 'none',
                border: 'none',
                outline: 'none',
                color: 'white',
              }}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <i style={{ color: 'white' }} class="fa-solid fa-magnifying-glass me-2"></i>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex' }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 hideeee">
              

              <div  style={{ width: '65%', margin: 'auto', border: '3px solid #66cccc', borderRadius: '10px' }} className="mt-5 fil">
                <div className="filter_heading d-flex justify-content-between p-3" style={{ borderBottom: '1px solid #66cccc' }}>
                  <h5>FILTER BY</h5>
                <span className="btn disply"style={{border:'1px solid black' , display:'none'}} onClick={hidebox}>Close</span>

                </div>

                <div className="filterRange p-3">
                  <h6>Filter Price</h6>
                  <span className="mb-4">₹{selectedPriceRange[0]}</span> <span>₹{selectedPriceRange[1]}</span>
                  <Slider
                    className={"slider mt-2"}
                    value={selectedPriceRange}
                    min={MIN}
                    max={MAX}
                    onChange={setSelectedPriceRange}
                  />
                  <h6 className="mt-3" style={{ color: '#66cccc', cursor: 'pointer' }}>
                    APPLY
                  </h6>
                </div>
                {/* <div className="categories p-3" style={{ borderTop: '1px solid #66cccc' }}>
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

<h4 className="mt-5 mx-3">{filterTour.length} stays found</h4>
              <div className="container-fluid d-flex flex-wrap justify-content-between setup">
                {filterTourCards().map((datas) => {
                  return (
                    <Link to={`/atstay/${datas.id}`}>
                      <div className="card mt-5" style={{ borderRadius: '15px', width: '280px', height: '320px' }}>
                        <div className="images">
                          <img
                            src={datas.imges}
                            className="img-fluid"
                            style={{ height: '200px', width: '280px', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}
                          ></img>
                        </div>

                        <div className="tourinfo">
                          <p className="my-2 mx-2" style={{ textTransform: 'uppercase', fontSize: '12px' }}>
                            <i className="fa-solid fa-location-dot mx-1"></i>
                            {datas.place}
                          </p>
                          <h6 className="mx-2 ">{datas.trip}</h6>
                          <span className="mx-2">
                            <i class="fa-regular fa-clock mx-1 my-3" style={{ fontSize: '12px' }}></i>
                            {datas.days}
                          </span>
                          <span className="mx-2">₹{datas.price}</span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footers />
    </div>
  );
}
