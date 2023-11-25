import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {productData} from './Atstaysdata';
import './Panel.css';

const Panel1 = () => {
    const params = useParams();
    const [rooms, setRooms] = useState(2);
    const [roomprice, setRoomprice] = useState('');
    const [roomprice1, setRoomprice1] = useState('');
    const [roomprice2, setRoomprice2] = useState('');
    const [trip , Settrip] = useState();
    const [consdata , setConsdata] = useState(productData);

    const [isUpdated, setIsUpdated] = useState(false);

    const cds = consdata.filter((dm)=> dm.id == params.id);
    console.log(cds , "mmm")
    console.log(cds[0].trip , "ccc")
    const s=cds[0].trip;
    

    
    useEffect(() => {
        // Fetch the initial data from the server when the component mounts
        fetchDataFromServer();
        Settrip(s)

    }, [params.id]); // Re-fetch data when params.id changes

    const fetchDataFromServer = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/rooms/${params.id}`);
            const data = await response.json();
            setRooms(data.rooms || 2);
            setRoomprice(data.roomprice || '');
            Settrip(s)
            
        } catch (error) {
            console.error('Error fetching data from server:', error);
        }
    };

    const saveDescription = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/rooms1/${params.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    rooms,
                    roomprice,
                    roomprice1,
                    roomprice2,
                    trip
    
                }),


            });

            if (response.ok) {
                console.log('Data successfully saved to the server');
                localStorage.setItem('updatedRooms', rooms);
                localStorage.setItem('updatedRoomPrice', roomprice);
                console.log('After saving:', { rooms, roomprice });

            } else {
                console.error('Failed to save data to the server');
            }
            alert("Your Data is Updated")
        } catch (error) {
            console.error('Error saving data to the server:', error);
        }
    };

    
    


    return(
        <>
          <div className="heading-1 m-auto" style={{fontSize:'40px' , fontWeight:'700' , color:'#66cccc' , textAlign:'center'}}>
                AtStay Updation Pannel
          </div>
        
        <div className="container-fluid msc" style={{height:'60vh' , width:'80vw' , display:'flex' ,alignItems:'center', justifyContent:'center', boxShadow:'1px 2px 10px black' , flexDirection:'column' , marginTop:'100px'}}>
          

            <div className="updation" style={{width:'75vw' , textAlign:'center'}}>

            
                <p>{trip}</p>


                <table  width="100%" style={{display:'flex' , flexDirection:'column' ,gap:'40px'}}>
                

                    <tr className="hms" style={{display:'flex' , justifyContent:'space-around' , alignItems:'center'}}>
                        {/* <th style={{width:'230px'}}>Update Your Rooms Price</th> */}
                        <th>Single Rooms<input type="number" value={roomprice} onChange={(e)=>{setRoomprice(e.target.value)}} style={{marginBottom:'0px'}}/></th>
                        <th>Double Rooms<input type="number" value={roomprice1} onChange={(e)=>{setRoomprice1(e.target.value)}} style={{marginBottom:'0px'}}/></th>
                        <th>Premium Rooms<input type="number" value={roomprice2} onChange={(e)=>{setRoomprice2(e.target.value)}} style={{marginBottom:'0px'}}/></th>

                    </tr>

                    <tr style={{display:'flex' , justifyContent:'space-around' , alignItems:'center'}}>
                        <th style={{width:'230px'}}>Update Your Rooms Availability</th>
                        <th><input type="number" value={rooms} onChange={(e)=>{setRooms(e.target.value)}} style={{marginBottom:'0px'}}/></th>
                    </tr>
                </table>


            </div>

            <div className="btns mt-5" >
                    <button className="btn-primay"  style={{width:'100px' , borderRadius:'25px' , background:'#66cccc' , fontSize:'18px'}} onClick={saveDescription}>Submit</button>
            </div>

        </div>
        
        </>
    )
}


export default Panel1;