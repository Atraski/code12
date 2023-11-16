import React, {useState} from 'react';
import { productData4 } from './Atstaynextdata';
import{ useEffect} from 'react';
import {productData} from './Atstaysdata';
import { productData6 } from './Atstaynextprice';

import { productData1 } from './Atstaynextdata';
import { facilities } from './Atstaynextdata';

import carousel1 from '../images/carouselimg1.webp';
import carousel2 from '../images/carouselimg2.webp';
import carousel3 from '../images/carouselimg3.webp';

import Carousel from 'react-bootstrap/Carousel';
import { useNavigate , useParams , Link } from 'react-router-dom';
import './room.css';

import Footer from './Footer.js';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Rooms(){
  const params = useParams();


  // const [nextmm , setNextmm] = useState(productData);
  // const mm4mm = next.filter((ds)=> ds.id == params.id)

    const [next , setNext] = useState(productData4);
    const mm4 = next.filter((ds)=> ds.id == params.id)
    console.log(mm4)

    const [pricedata , setPricedata] = useState (productData6)
    const [data,setdata]=useState(productData)
    const[dd1,setdd]= useState(productData1);
    const[faci,setfaci]= useState(facilities);
    const [checkout, setcheckout] = useState(() => localStorage.getItem('checkout') || '');
    const [checkin, setcheckin] = useState(() => localStorage.getItem('checkin') || '');
    const [numss,setnumss] = useState(() => localStorage.getItem('child'));
    const [nums,setnums] = useState(() => localStorage.getItem('adult'));
    const [num,setnum] = useState(() => localStorage.getItem('room'));
    const [numberOfDays, setNumberOfDays] = useState(0);

    useEffect(() => {
      const checkinDate = new Date(checkin);
      const checkoutDate = new Date(checkout);
  
      if (!isNaN(checkinDate) && !isNaN(checkoutDate)) {
        const timeDifference = checkoutDate - checkinDate;
        const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
  
        setNumberOfDays(daysDifference);
  
        // Store the number of days in localStorage
        localStorage.setItem('numberOfDays', daysDifference.toString());
      }
    }, [checkin, checkout]);
  
  
  
    // const [num,setnum]=useState(0)
    // const [nums,setnums]=useState(0)
    // const [numss,setnumss]=useState(0)
    const mm1 = data.filter((ds)=> ds.id == params.id)
    const mm2 = pricedata.filter((ds)=> ds.id == params.id)
    
   console.log(mm2)
   console.log(dd1)
   console.log('mm2:', mm2);

    const mm3 = faci.filter((ds2)=> ds2.id == params.id)
    
    useEffect(() => {
      localStorage.setItem('productData', JSON.stringify(data));


      localStorage.setItem('productData1', JSON.stringify(dd1));
      localStorage.setItem('facilities', JSON.stringify(faci));
      localStorage.setItem('checkout', checkout);
      localStorage.setItem('checkin', checkin);
      localStorage.setItem('child', numss);
      localStorage.setItem('adult', nums);
      localStorage.setItem('room', num);
    }, [data, dd1, faci, checkout, checkin, numss, nums, num]);
  
  
    
  
  
  
  
  
  
   function navi(){
    console.log(checkout,checkin,num,nums,numss);
   }
  
    const inc=()=>{
      setnum(num+1);
     }
     const inc1=()=>{
       setnums(nums+1);
      }
      const inc2=()=>{
       setnumss(numss+1);
      }
     const dec=()=>{
       if (num>0){
       setnum(num-1);
      }
     else{
     }}
      const dec1=()=>{
       if(nums>0){
       setnums(nums-1);
      }
      else{
      }
     }
      const dec2=()=>{
       if(numss>0){
       setnumss(numss-1);
      }
      else{
      }
     }

     const showbox=()=>{
      const box = document.querySelector('.hideing');
      const classss = document.querySelector('.nonflex');
      box.style.setProperty('display', 'block', 'important');
      classss.classList.remove('container')
      classss.classList.add('container-fluid');
    }
  
    const closebox =()=>{
      const box = document.querySelector('.hideing');
      box.style.setProperty('display', 'none', 'important');
      const classss = document.querySelector('.nonflex');
  
      classss.classList.add('container')
      classss.classList.remove('container-fluid');
    }
    return(

      
        <>
        {mm4.map((nextm)=>{
        return(
          <>
          <div>
          <Carousel styel={{maxwidth:"100%"}}>
            {
              nextm.images.map((ele , i)=>{
                return(
                  
      <Carousel.Item style={{ width:'100%', height:'100%'}} className="mcm">
        <img src={ele.image1} style={{ width:'100%' , height:'700px'}} className="mccm"/>
        <Carousel.Caption  >
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
                )
              })
            }
        
      {/* <Carousel.Item>
      <img src={carousel2}  style={{ width:'100%' ,  height:'600px'}} />        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={ carousel3}  style={{ width:'100%' ,  height:'600px'}}  />
              <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    
    </Carousel>
        </div>
        <div className="container nonflex" style={{ height:"auto", display:"flex"}} >
            <div style={{width:"70%",height:"100%",backgroundColor:"white"}}>
                <div className='mt-5 p-4' style={{padding:""}}>                <h1>Traditional Huts</h1>
                <hr style={{width:"100%"}}></hr>

</div>
<div style={{ display:"flex", justifyContent:"space-between",width:"95%"}}>
    {/* <div  className='p-4'style={{display:"flex"}}>
    <i class="fa-solid fa-bed-pulse mt-1"></i>
    <p>Beds:1</p>
    </div> */}
    <div  className='p-4'style={{display:"flex",}}>
    <i class="fa-solid fa-bed-pulse mt-1 me-2"></i>
    <p>Beds:1</p>
    </div>
    <div  className='p-4'style={{display:"flex"}}>
    <i class="fa-solid fa-children mt-1 me-2"></i>    <p>Adults:2</p>
    </div>
    <div  className='p-4'style={{display:"flex"}}>
    <i class="fa-solid fa-child mt-1 me-2"></i>    <p>Children:1</p>
    </div>
</div>
<hr  className='ms-4'style={{ width:"95%"}}></hr>
<div style={{ display:"flex", flexDirection:"column", justifyContent:"space-between"}}>

<div className='p-4' style={{display:"flex",flexDirection:"row",}}>
    <h1>Room facilities
</h1>

</div>
<div  style={{justifyContent:"space-between",width:"95%"}}> 
<div  className='p-4'style={{display:"flex"}}>
<i class="fa-solid fa-gear me-2 fs-3"></i>
<p> Free wfi</p>
</div>
<div  className='p-4'style={{display:"flex"}}>
<i class="fa-solid fa-gear  me-2 fs-3 "></i>
<p>Air Conditioning</p>
</div>
<div  className='p-4'style={{display:"flex"}}>
<i class="fa-solid fa-gear  me-2 fs-3"></i>
<p>Parking</p>
</div>



</div>
<hr  className='ms-4'style={{ width:"95%"}}></hr>


</div>


            </div>

            <div className='bg-white hideing' style={{ width:"400px"}}>
        <div className=' my-5'style={{ height:"470px",backgroundColor:"#66cccc"}}>
        <i class="fa-solid fa-xmark" onClick={closebox} style={{float:'right' , display:'none',cursor:'pointer'}}></i>


        {/* {mm2.map((rm, rmid) => (
  <div key={rmid}>
    {rm.room1.map((rum, i) => (
      <div style={{ backgroundColor: "#66cccc", height: "70px", display: "flex", justifyContent: "center", alignItems: 'center', border: "0.1px solid #66cccc" }}>
        <h5>{rum.price} from ₹/night</h5>
      </div>
    ))}
  </div>
))} */}
        
        {
  mm2.map((rm, rid) => {
    return (
      <div>
        
              <div style={{ backgroundColor: "#66cccc", height: "70px", display: "flex", justifyContent: "center", alignItems: 'center', border: "0.1px solid #66cccc" }}> <h5>{rm.price} from ₹/night</h5></div>
            
        
      </div>
    )
  })
}

{/* {
  mm2.map((rm)=>{
    return(
      <div>
              <div style={{ backgroundColor: "#66cccc", height: "70px", display: "flex", justifyContent: "center", alignItems: 'center', border: "0.1px solid #66cccc"}}> <h5>{rm.price} from ₹/night</h5></div>

        </div>
    )
  })
} */}



        <div style={{  backgroundColor:"#fff" ,height:"70px" ,display:"flex",justifyContent:"center",alignItems:'center',border:"0.1px solid #66cccc"}} ><h4>Book</h4>

</div>


<div style={{  height:"150px",display:'flex'}}>
<div style={{backgroundColor:"white", height:"100%",width:"50%" ,border:"0.1px solid #66cccc"}}><p className='mt-4 ms-2'>Check In</p>
<input type="date" placeholder="asdf" value={checkin} onChange={(e)=>{setcheckin(e.target.value)}} style={{width:'100%' , padding:'10px',border:"none"}}/></div>
<div   style={{ backgroundColor:"white",height:"100%",width:"50%",border:"0.1px solid #66cccc" ,}}><p className='mt-4 ms-2'>Check Out</p>
<input type="date" placeholder="asdf"  value={checkout} onChange={(e)=>{setcheckout(e.target.value)}} style={{width:'100%' , padding:'10px',border:"none"}}/></div>
  
</div>
<div className='p-5' style={{ display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center",height:"125px",borderTop:'1px solid #66cccc'}}>
            <p style={{fontWeight:"600"}}>Check In-Out</p>

           <div style={{cursor:"pointer", fontWeight:"600", width:"100%", display:"flex", justifyContent:"space-between",}}> <span style={{width:'70px'}}> Room</span> <span style={{width:''}}  onClick={()=>dec()}>-</span><span >{num}</span><span onClick={()=>inc()}>+</span></div>
           <div  style={{cursor:"pointer",fontWeight:"600",width:"100%", display:"flex", justifyContent:"space-between"}}> <span style={{width:"70px"}}> Adult</span> <span style={{width:''}} onClick={()=>dec1()}>-</span><span>{nums}</span><span onClick={()=>inc1()}>+</span></div>
           <div  style={{cursor:"pointer",fontWeight:"600",width:"100%", display:"flex", justifyContent:"space-between"}} ><span style={{width:"70px"}}> Children</span> <span style={{width:''}} onClick={()=>dec2()} className="">-</span><span className=''>{numss}</span><span className='' onClick={()=>inc2()}>+</span></div>


            </div>
<div style={{ backgroundColor:"white", height:"100px",display:"flex",justifyContent:"center",alignItems:'center',border:"0.1px solid #66cccc"}}> 
 <Link to={`/cartpage/${nextm.id}`}>  <button className='' style={{ backgroundColor:"#66cccc" , textTransform:'uppercase', border:'none' , borderRadius:'25px' , padding:'5px 15px'}} onClick={navi}><h2 style={{fontSize:'20px', marginTop:'5px'}} >BOOK Now</h2></button></Link>

</div>

        </div>
        <div className='mt-5 p-4 fs-5' style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center",border:"1px solid #66cccc"}}>
          <div style={{display:"flex"}}><div><i  style={{ color:"#66cccc", fontWeight:"600"}}class="fa-solid fa-envelope mt-1 me-2"></i></div><div style={{fontWeight:"700"}}> Atraski@Gmail.com</div></div>
          <div style={{display:"flex"}}> <div><i  style={{ color:"#66cccc",fontWeight:"600"}}class="fa-solid fa-phone mt-1 me-5"></i></div><div style={{fontWeight:"700"}} className='me-3' >8898734567</div></div>
        </div>
      </div>
        </div>


          </>
        )
      })}
        <Footer></Footer>

        <div className="whitebox w-100 bg-white d-none" style={{height:'80px',justifyContent:'space-between',alignItems:'center',zIndex:20 , position:"fixed" , bottom:'0%'}}>
            <div className="pricesss">
              {
                mm1.map((ele)=>{
                  return(
                    <>
                      <p style={{fontSize:'25px'}} className="mx-5"><span style={{fontSize:'19px'}}>from ₹, </span>{ele.price}</p>
                    </>
                  )
                })
              }
            </div>

            <div className="booking">
                <button className="btn btn-primary mx-5" style={{width:'200px'}} onClick={showbox}>Book Now</button>
            </div>
        </div>
        </>
    )

}
export default Rooms;