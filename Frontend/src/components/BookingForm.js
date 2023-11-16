import { Divider } from 'antd';
import '../BookingForm.css'
import Footer from './Footer';
import Navbar from './Navbar';
function BookingForm(){
    return(
        <>
    
   

    {/* Make <select> easier to select */}

<Navbar></Navbar>
<form action="">
  <div class="form-group">
    <h2 class="heading">Fill Your Details</h2>
    <div class="controls">
    <label></label>
    
      <input type="text" placeholder="Name" style={{}} />
      
    </div>
    <div class="controls">
      <input type="text" id="email" class="floatLabel" name="email" placeholder='email' />
      <label for="email"></label>
    </div>       
    <div class="controls">
      <input type="tel" id="phone" class="floatLabel" name="phone" placeholder='Phone' />
      <label for="phone"></label>
    </div>
      <div class="grid">
        <div class="col-2-3">
          <div class="controls">
           <input type="text" id="street" class="floatLabel" name="street" placeholder='Adress' />
           <label for="street"></label>
          </div>          
        </div>
        <div class="col-1-3">
          <div class="controls">
            <input type="number" id="street-number" class="floatLabel" name="street-number" placeholder='Number' />
            <label for="street-number"></label>
          </div>          
        </div>
      </div>
      <div class="grid">
        {/* <div class="col-2-3">
          <div class="controls">
            <input type="text" id="city" class="floatLabel" name="city" placeholder='City' />
            <label for="city"></label>
          </div>         
        </div> */}
        <div class="col-1-3">
          <div class="controls">
            <input type="text" id="post-code" class="floatLabel" name="post-code" placeholder='Pin-code' />
            <label for="post-code"></label>
          </div>         
        </div>
      </div>
      <div class="controls">
        <input type="text" id="country" class="floatLabel" name="country" placeholder='Country' />
        <label for="country"></label>
      </div>
  </div>
  <button type="submit" value="Submit" class="col-1-4">Submit</button>

</form>
<Footer></Footer>


        </>

    )

}
export default BookingForm;