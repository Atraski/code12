const express = require('express');
const crypto = require('crypto');
const app = express();
require('./Config');
const form = require('./Formm');
var instance = require('./Razorpay');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.json());
const cors = require('cors');
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.listen(5000);

app.post('/Order', async (req, resp) => {
  try {
    const option = {
      amount: Number(req.body.amount * 100),
      currency: 'INR',
    };
    const order = await instance.orders.create(option);
    console.log(order);
    resp.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    console.error('Error creating order:', error);
    resp.status(500).json({
      success: false,
      error: 'Error creating order',
    });
  }
});

app.get('/key', (req, resp) => {
  resp.json({ key: 'rzp_test_OmCfFJhnp3Fztn' });
});

app.post('/saveDataToDatabase', async (req, resp) => {
  try {
    const {
      name,
      mail,
      phone,
      street,
      add,
      pin,
      country,
      amount,
      adult,
      selectedDate,
      children,
    } = req.body;
    const formData = new form({
      name: name,
      mail: mail,
      phone: phone,
      street: street,
      add: add,
      pin: pin,
      country: country,
      amount: amount,
      adult: adult,
      selectedDate: selectedDate,
      children: children,
    });

    const savedFormData = await formData.save();
    console.log('Form data saved:', savedFormData);

    resp.status(200).json({
      success: true,
      message: 'Data saved successfully',
    });
  } catch (error) {
    console.error('Error saving data:', error);
    resp.status(500).json({
      success: false,
      error: 'Error saving data',
    });
  }
});
