import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import img1 from '../images/Attours1.webp';
import './Attournext.css';
import Footers from './Footer';
import { DatePicker } from 'antd';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { productData } from './data.js';
import { Link } from 'react-router-dom';


const { RangePicker } = DatePicker;

export default function Attournext() {
  const [mm, setMM] = useState(productData);
  const params = useParams();
  const mm1 = mm.filter((datas) => datas.id == params.id);

  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(moment()); // Initialize with the current date

  console.log(dates);

  const [adult, setAdult] = useState(0);
  const [children, setChildren] = useState(0);

  useEffect(() => {
    // Retrieve adult and children counts from local storage when the component is mounted
    const storedAdultCount = localStorage.getItem('adultCount');
    const storedChildrenCount = localStorage.getItem('childrenCount');

    if (storedAdultCount) {
      setAdult(parseInt(storedAdultCount));
    }

    if (storedChildrenCount) {
      setChildren(parseInt(storedChildrenCount));
    }
  }, []); // Empty dependency array to run this effect only on component mount

  // Function to increment the number of adults
  const handleIncrementAdult = () => {
    setAdult(parseInt(adult) + 1);
    localStorage.setItem('adultCount', adult + 1);
  };

  // Function to decrement the number of adults if it's greater than 0
  const handleDecrementAdult = () => {
    if (adult > 0) {
      setAdult(parseInt(adult) - 1);
      localStorage.setItem('adultCount', adult - 1);
    }
  };

  // Function to increment the number of children
  const handleIncrementChildren = () => {
    setChildren(parseInt(children) + 1);
    localStorage.setItem('childrenCount', children + 1);
  };

  // Function to decrement the number of children
  const handleDecrementChildren = () => {
    if (children > 0) {
      setChildren(parseInt(children) - 1);
      localStorage.setItem('childrenCount', children - 1);
    }
  };

  const Book = () => {
    if (adult == 0) {
      alert("set the details");
    }
  };

  const showbox = () => {
    const box = document.querySelector('.hideing');
  
    const classss = document.querySelector('.nonflex');
    const mmm = document.querySelector('.mmm');
    const ccc = document.querySelector('.ccc');
    const pp = document.querySelector('.ppp');
    const p = document.querySelector('.pp')
    pp.style.setProperty('display','none','important')
    p.style.setProperty('display','none','important')
    box.style.setProperty('display','block','important')
    ccc.classList.remove('container')
    ccc.classList.add('container-fluid')

    // mmm.style.setProperty('display','flex','important')
    // box.style.setProperty('display', 'block', 'important');
    // classss.classList.remove('container')
    // classss.classList.add('container-fluid');
  }

  const closebox = () => {
    const box = document.querySelector('.hideing');
    box.style.setProperty('display', 'none', 'important');
    const classss = document.querySelector('.nonflex');

    classss.classList.add('container')
    classss.classList.remove('container-fluid');
  }

  function getCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    let day = currentDate.getDate();
    day = day < 10 ? '0' + day : day;
    return `${year}-${month}-${day}`;
  }




  return (
    <div>
      <Navbar />

      {mm1.map((send)=>{
            return(
      <div className="">
        <div className="imgbg ppp" style={{backgroundImage:`url(${send.imges})`}}>

        </div>

          
              <div className="container ccc">

              <div className="row">
                <div className="col-md-8 pp">
                  <div className="tripDetails mt-5 mx-5">
                    <h2 className="my-4">{send.trip}</h2>
    
                    <div className="location">
                      <i className="fa-solid fa-location-dot mx-1" /> {send.place}
                    </div>
    
    
                    <div className="tripde mt-4">
                      <hr />
                      <div className="triptyps d-flex justify-content-between my-4">
    
                        <div className="duration d-flex align-items-center">
                          <i className="fa-regular fa-clock" style={{ fontSize: '25px', color: '#66cccc' }}></i>
                          <div className="durationText row mx-2">
                            <text>Duration</text>
                            <text>{send.days}</text>
                          </div>
                        </div>
    
                        <div className="TourType d-flex align-items-center">
                          <i className="fa-solid fa-shoe-prints" style={{ fontSize: '25px', color: '#66cccc' }}></i>
                          <div className="TourText row mx-2">
                            <text>Tour Type</text>
                            <text>Daily Tour</text>
                          </div>
                        </div>
    
                        <div className="GroupSize d-flex align-items-center">
                          <i className="fa-solid fa-user-group" style={{ fontSize: '25px', color: '#66cccc' }}></i>
                          <div className="GroupText row mx-2">
                            <text>Group Size</text>
                            <text>4 people</text>
                          </div>
                        </div>
    
                        <div className="Language d-flex align-items-center">
                          <i className="fa-solid fa-language" style={{ fontSize: '25px', color: '#66cccc' }}></i>
                          <div className="LanguageText row mx-2">
                            <text>Language</text>
                            <text>_ _ _</text>
                          </div>
                        </div>
    
    
                      </div>
                      <hr />
                    </div>
    
                    <div className="Overview mt-4">
                      <h3 className="my-3">Overview</h3>
                      <p style={{ textAlign: 'justify' }} className="my-4">
                          {send.overview}
                      </p>
                    </div>
                    <hr />
    
                    <div className="highlights mt-4">
                      <h3 className="my-4">HIGHLIGHTS</h3>
                      <ul type="circle" className="my-4" >
                        <li className="my-3"><span>City tour, Light and sound show in cellular jail</span></li>
                        <li className="my-3"><span>Ross Island and North Bay Island</span></li>
                        <li className="my-3"><span>Beautiful sunset at Radha Nagar Beach</span></li>
                        <li className="my-3"><span>Water adventure at Elephant Beach & Kalapathar beach</span></li>
    
                      </ul>
                    </div>
                    <hr />
    
                   <div className="tourLocation my-4">
                    <h3 className="my-4">Tour's Location</h3>
                    <div className="">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4020881.367773878!2d90.58907848694062!3d10.20970292607198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3064a00f2b650ff3%3A0xce80055648fccb2c!2sAndaman%20and%20Nicobar%20Islands!5e0!3m2!1sen!2sin!4v1694433442800!5m2!1sen!2sin" width="850" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <hr />
                   </div>
    
                   <div className="FAQs my-5">
                    <h3 className="my-4">FAQ's</h3>
                      <div className="Q1 my-4">
                        <h6><i className="fa-solid fa-circle-question " style={{marginRight:'5px' , color:'#66cccc'}}></i>Can Indian Currency(INR) be used in Andamans?</h6>
                        <text>Yes, Indian Rupee (INR) is the currency used in Andaman Islands. There are several ATMs and Bank branches on inhabited islands which can be used to withdraw money.</text>
                      </div>
    
                      <div className="Q2 my-4">
                        <h6><i className="fa-solid fa-circle-question " style={{marginRight:'5px' , color:'#66cccc'}}></i>What is the weather like in Andaman and Nicobar Islands?</h6>
                        <text>The weather is quite unpredictable in Andaman Islands. Carry extra clothes as Andaman is famous for sudden rain spells.</text>
                      </div>
    
                      <div className="Q3 my-4">
                        <h6><i className="fa-solid fa-circle-question " style={{marginRight:'5px' , color:'#66cccc'}}></i>What is the culture of Andamans? Are there any religious restrictions on the islands?</h6>
                        <text>Andaman Islands are very relaxed in rules. Just some simple etiquettes like dressing up properly and asking for permission before taking pictures should be kept in mind. Having said that, since Andamans is a protected area, one should not expect comfort equivalent to the level of one on mainland in India.</text>
                      </div>
                   </div>
    
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div className="box1 hideing">
                    
    
    
                    <div className="tripPrice py-4 bg-primary text-white" style={{borderBottom:'1px solid black'}}>
                      <span className="mx-5 text-grey" >from <span style={{fontSize:'24px', marginLeft:'10px'}}>₹{send.price} </span></span>
                    </div>
    
    
                      <div className="Date d-flex align-items-center justify-content-between  p-2 kkk" style={{backgroundColor:'#f9f9f9'}}>
    
                        <span style={{fontSize:'18px'}}>Date</span>
    
                        <DatePicker
  value={selectedDate}
  onChange={(date) => setSelectedDate(date)}
  disabledDate={(current) => {
    // Disable dates in the past (before the current date)
    return current && current < moment().startOf('day');
  }}
  style={{ width: '200px', height: '50px', marginLeft: '12px', marginTop: '5px', border: 'none', outline: 'none' }}
/>
                      </div>
    
                      <div className="Adults  d-flex justify-content-between align-items-center py-4 p-2 kkk" style={{backgroundColor:'#f9f9f9' , borderTop:'1px solid black'}}>
                        <div className="AdultsText" style={{fontSize:'18px'}}>Adults</div>
                        <div className="AdultsValue d-flex justify-content-between mx-2" style={{width:'150px', fontSize:'22px'}}>
                          <span onClick={() =>handleDecrementAdult()} style={{cursor:"pointer"}}>-</span>
                          <input className='tt' type="text" value={adult} onChange={(e) => { setAdult(e.target.value) }} style={{ color: "black" , border:'none'}}></input>
                          <span onClick={() =>  handleIncrementAdult()} style={{cursor:"pointer"}}>+</span>
                        </div>
                      </div>

                     <div className="Adults  d-flex justify-content-between align-items-center py-4 p-2 kkk" style={{backgroundColor:'#f9f9f9' , borderTop:'1px solid black'}}>
                        <div className="AdultsText" style={{fontSize:'18px'}}>Children</div>
                        <div className="AdultsValue d-flex justify-content-between mx-2" style={{width:'150px', fontSize:'22px'}}>
                          <span onClick={() => handleDecrementChildren()} style={{cursor:"pointer"}}>-</span>
                          <input className='tt' type="text" value={children} onChange={(e) => { setChildren(e.target.value) }} style={{ color: "black" , border:'none' }}></input>                          <span onClick={() => handleIncrementChildren()} style={{cursor:"pointer"}}>+</span>
                        </div>
                      </div> 
    
                      <div className="button py-4 text-center" style={{borderTop:'1px solid black' , display:'flex' , flexDirection:'column'}}>
                       <Link to={`/cart/${send.id}`}> <button className="btn bg-primary text-white py-2 " onClick={()=>Book()} >Book Now</button></Link>
                      </div>
    
                  </div>
                </div>
              </div>
    
            </div>
            </div>
            )
          })}
        
        




      
      <Footers className="foot" />


      <div className="whitebox w-100 bg-white d-none" style={{ height: '80px', justifyContent: 'space-between', alignItems: 'center', zIndex: 20, position: "fixed", bottom: '0%' }}>
        <div className="pricesss">
          {
            mm1.map((ele) => {
              return (
                <>
                  <p style={{ fontSize: '25px' }} className="mx-5 fm"><span style={{ fontSize: '19px' }}>from ₹, </span>{ele.price}</p>
                </>
              )
            })
          }
        </div>

        <div className="booking">
          <button className="btn btn-primary mx-5 butt" style={{ width: '200px' }} onClick={showbox}>Book Now</button>
        </div>
      </div>

          

    </div>
  )
}