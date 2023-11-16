import React, { useState } from "react";
import Navbar from "./Navbar";
import { productData } from "./datas";
import './Blogpages.css';
import Footer from "./Footer";

function Blogpages() {
  const [data, setData] = useState(productData);
  console.log(data)

  return (
    <>
      <div className="mains">
        <Navbar></Navbar>
        <div className="banner-img">
          <div className="conatiner-fluid Banner" style={{ height: "100%", maxWidth: '100%' }}></div>
        </div>
        <div className="container-fluid bg-white my-5">
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: 'center' }}>
            {data && data.map((item) => {
                return (
                  <div key={item.id}>
                    <div className="bg-white m-3" style={{ width: "100%" }}>
                      <div className="card mx-5" style={{ width: '23rem', height: "496px", borderRadius: '35px', boxShadow: '0px 25px 20px -20px rgba(0, 0, 0, 0.45)' }}>
                        <img className="card-img-top" src={item.img} alt="Card image cap" style={{ borderTopLeftRadius: "35px", borderTopRightRadius: "35px" }} />
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">{item.description.slice(0, 385)}...</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
             
            })}
          </div>
        </div>
      </div>
      <div></div>
      <Footer></Footer>
    </>
  )
}

export default Blogpages;
