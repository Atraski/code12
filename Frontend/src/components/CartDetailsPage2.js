import React, {useState} from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import { productData } from './data.js';
import Footers from './Footer';
import { useNavigate } from 'react-router-dom';
import './CartDetailspage.css';

export default function CartDetailsPage2() {
    const [mm, setMM] = useState(productData);
  const params = useParams();
  const mm1 = mm.filter((datas) => datas.id == params.id);
  const adult = localStorage.getItem('adultCount')
  const child = localStorage.getItem('childrenCount')

  const navigate = useNavigate()
  const totalAmount = adult * mm1[0].price;
  localStorage.setItem('totalAmount', totalAmount);
  console.log(totalAmount,'iiiiiiii')

    


  
  return (
    <div>
        <Navbar />
        <div className="container p-5">
            {mm1.map((elm)=>{
                return(
                    <div className="" style={{display:'flex' , justifyContent:'space-evenly' , flexWrap:'wrap'}}>
                <div className="col-md-7">
                    <div className="heading-1 msm" style={{borderBottom:'1px solid grey' , fontSize:'25px'}}>
                        <h3>Cart Items</h3>
                    </div>

                    <div className="cartDetails my-4 d-flex">
                        <div className="Images">
                            <img src={elm.imges} style={{width:'150px' , height:'150px'}}></img>
                        </div>
                        <div className="Details mx-5">
                            <h6 style={{textTransform:'uppercase' , color:'blue' , letterSpacing:'3px'}}>{elm.trip}</h6>

                            <div className="locationtrip my-3">
                            <i className="fa-solid fa-location-dot" /> {elm.place}
                            </div>

                            <div className="tourtype">
                            <p>Type Tour : Daliy Tour</p> 
                            </div>

                            <div className="departurDate">
                            <p>Departure date : 29/09/2023</p> 
                            </div>
                            
                            <div className="Duration">
                            <p>Duration : {elm.days}</p> 
                            </div>

                            <div className="bookingDetails">
                                <p>Adult : {adult} x ₹ {elm.price}  ₹ {adult * (elm.price)}</p>
                                <p>Children : {child}</p>
                                <div className="total">
                                Total amount : ₹ {adult * (elm.price)}
                                </div>
                            </div>

                        </div>
                        <div className="Pricesss " style={{fontSize:'25px' , marginLeft:'34px'}}>
                        ₹ {elm.price}
                        </div>
                    </div>

                </div>

                <div className="col-md-4 mx-5">
                    <div className="carttotal">
                        <h3>Cart totals</h3>
                    </div>

                    <div className="cardtotalbox p-3" style={{border:'1px solid grey'}}>
                        <div className="box3" style={{display:'flex' , flexDirection:'column' , justifyContent:'center'}}>
                            <div className="d-flex justify-content-between my-3">
                            <span>Subtotal</span>
                            <span>₹ {adult * (elm.price)}</span>
                            </div>

                            <div className="d-flex justify-content-between">
                            <span>Total</span>
                            <span>₹ {adult * (elm.price)}</span>
                            </div>
                            
                            <center><button className="btn btn-primary my-3" onClick={()=>{navigate('/form')}}>Proceed to checkout</button></center>
                        </div>

                        
                    </div>

                </div>

            </div>
                )
                
            })}
            
        </div>
        <Footers />
    </div>
  )
}
