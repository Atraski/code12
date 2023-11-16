import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';


 function Footer() {
  return (
    <>
    <div>

    <div className="container-fluid email_update mt-5">
        <div className="mailItem d-flex justify-content-center align-items-center">
        <i className="fa-regular fa-envelope emailicon mx-5"></i>

            <div className="content">
              <h3>Get Updates & More</h3>
              <text>Thoughtful thoughts to your inbox</text>
            </div>

            <div className="emails mx-5">
              <form className="mx-5 redu">
              <input type="email" placeholder="Your Email" className="p-3 textarea border-0"/>
              <button type="submit" className="bg-primary text-white border-0 p-3">SUBSCRIBE</button>
              </form>
            </div>
        </div>
    </div>
        
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3">
          <p className="py-3 border-bottom border-2 w-50">NEED HELP?</p>

            <div className="call mb-5">
            <text className="px-2">Call Us</text>
            <h4  className="px-2">+91 9163720198</h4>
            </div>

            <div className="call">
            <text className="px-2">Email for Us</text>
            <h4  className="px-2">support@attravels.in</h4>
            </div>
        </div>

        <div className="col-md-3">
        <p className="py-3 border-bottom border-2 w-50">ATRASKI TRAVELS</p>

        
        </div>
        
        <div className="col-md-3">
          <p className="py-3 border-bottom border-2 w-50">TERMS & POLICY</p>
         <Link to ="/terms"> <h6>Terms and Conditions new</h6></Link>
        <Link to="/privacy">  <h6 className="mt-4">Privacy Policy New</h6></Link>
          <h6 className="mt-4">Cancellation and Refunds New</h6>
          <h6 className="mt-4">FAQs new</h6>
        </div>
      
        <div className="col-md-3">
          <p className="py-3 border-bottom border-2 w-50">FOLLOW US</p>
          <div className="call">
            <text className="px-2">Follow Us</text>
            <br />
         <Link to="https://www.facebook.com/atraskitravel?mibextid=nW3QTL">  <i class="fa-brands fa-facebook px-3"></i></Link>
         <Link to="https://www.instagram.com/atstaysbyatraski/?igshid=MzRlODBiNWFlZA%3D%3D">  <i class="fa-brands fa-instagram"></i></Link>
          </div>
        </div>
      
      </div>
    </div>
    </div>

    
    </>
  )
}
export default Footer