import React from 'react'
import './invoice.css';

export default function Invoice2() {
  return (
    <>
    <table border="1" width="80%" cellSpacing="10" cellPadding="10" height="100%"   >
        <tr border="1" > 
            <th>Atstay <br />
            640, Second floor, 262, Westend Marg, Saidulajab New Delhi - 110030<br />
            India<br />
            VAT Reg #: 9919SGP29004OSJ
            </th>

            <th>Invoice # HSG-841693<br />
Invoice Date # 18-11-2023<br />
Invoice Amount # ₹8000.00 (INR)<br />
Order Nr. #<br />
PAID</th>
            
        </tr>

        <tr>
            <th>BILLED TO<br />
chetanya<br />
IN19CCDPD5287P1ZY<br />
b-1662 shastri Nagar Delhi-52<br />
India<br />
chetanyajoshi9654@gmail.com<br />
9711451873</th>
        </tr>
    </table>

    <table width="80%" cellSpacing="10" >
        <tr>
            <td className="jsm">Description</td>
            <td className="jsm">Price</td>
            <td className="jsm">TOTAL EXCL. VAT</td>
            <td className="jsm">AMOUNT (INR)</td>    
        </tr>
        
        <tr>
            <th className="jsm">mmm</th>
            <th className="jsm">mmm</th>
            <th className="jsm">mmm</th>
            <th className="jsm">mmm</th>

        </tr>

        <tr>
            <th className="jsm"></th>
            <th className="jsm"></th>
            <th className="jsm">mmm</th>
            <th className="jsm">mmm</th>

        </tr>
    </table>


    </>
  )
}















{/* <div style={{backgroundColor:" ",height:"auto", display:"flex", padding:"10px"}}>
    
    <div style={{backgroundColor:" ",height:"auto",width:"500px", padding:"10px"}}>
    <p> ATSTAY
    <br></br>
    640, Second floor, 262, Westend Marg, Saidulajab
<br></br>
New Delhi - 110030
<br></br>
India
<br></br>
VAT Reg #: 9919SGP29004OSJ<br></br>
</p>
</div>
<div style={{backgroundColor:"",height:"auto",width:"886px",display:"flex",justifyContent:"flex-end", padding:"10px"}}>
Invoice # HSG-841693<br></br>
Invoice Date # {localStorage.getItem("curdate")}<br></br>
Invoice Amount # ₹{amount}.00 (INR)<br></br>

Order Nr. # {mmmm}<br></br>
PAID
</div>
</div>
<div style={{backgroundColor:"",height:"auto",width:"500px",display:"flex", padding:"15px"}}>
BILLED TO<br></br>
{namess}<br></br>

IN19CCDPD5287P1ZY<br></br>
{add}<br></br>
India<br></br>
{mail}<br></br>
{phone}<br></br>
</div >
<hr style={{height:"15px"}}></hr>
<div  className="container-fluid"style={{display:"flex",justifyContent:"space-between"}}>
 <div style={{width:'200px'}}>
    <h6 style={{fontSize:'13px'}}>Description</h6>
    
</div>
<div style={{width:'200px'}}>
    <h6 style={{fontSize:'13px'}}>Price</h6>

</div>
<div style={{width:'200px'}}>
    <h6 style={{fontSize:'13px'}}>TOTAL EXCL. VAT</h6>
</div>
<div style={{width:'200px'}} >
    <h6 style={{fontSize:'13px'}}>AMOUNT (INR)</h6>
</div>
</div>
<hr></hr>
<div style={{display:"flex",justifyContent:"space-between"}}>
{/* <div style={{width:'200px'}}>{trips}</div>
<div style={{width:'200px'}}>{amount}</div>
<div style={{width:'200px'}}>----</div>
<div style={{width:'200px'}}>{amount}</div> */}

// </div>
// <div  className="container-fluid"style={{display:"flex", height:"30px"}}>

// </div>
// <hr></hr>

// <div style={{ display:"flex",justifyContent:"flex-end"}}>
// <div style={{width:"200px", display:"flex",justifyContent:"flex-end",padding:"10px"}}>
//     TOTAL
// </div>
// <div style={{width:"200px", display:"flex",justifyContent:"flex-end",padding:"10px"}}>₹{amount}.00 (INR)</div>


// </div>
// </div>

// {/* </div> */}

// <button onClick={handleDownload}>Download PDF</button> */}