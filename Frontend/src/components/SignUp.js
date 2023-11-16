import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from 'axios';
import {Link} from 'react-router-dom';
import Navbar from "./Navbar";

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    async function handleSubmit(e) {
      e.preventDefault();
      // Handle sign-in logic

    //   let data= await fetch("http://localhost:5000/signup",{
    //     method:'post',
    //     body : JSON.stringify({name,email,password}),
    //     headers:{
    //         'Content-Type':'application/json',
    //     },
    // })
    // data= await data.json()
    // if (data === "exist") {
    //   alert("Email already exists");
    // } else if(data === "Notexist") {
    //   alert("Sign Up Successful");
    // }

    axios.post('http://localhost:5000/signup' , {
      name : name,
      email : email,
      password : password
    })
    .then(res =>{
      console.log(res.data)
    }).catch(err =>{
      console.log(err)
    })
  
    };
    const mystyle = {
      display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    }
  
      return (
        <>
        <Navbar></Navbar>
        <div style={{ backgroundColor: "aliceblue" }}>
          <Container className="auth-form-container" style={mystyle}>
            <Row className="justify-content-center" style={{ width: "100%" }}>
              <Col
                xs={12}
                md={6}
                lg={6}
                style={{
                  backgroundColor: "aliceblue",
                  display: "flex",
                    justifyContent: "center",
                  alignItems:"center"
                }}
              >
                <img
                  src="PNG_LH.png"
                  alt=""
                  style={{ width: "400px", height: "250px" }}
                />
              </Col>
              <Col xs={12} md={6} lg={6} style={{ backgroundColor: "aliceblue" }}>
                <div className="auth-form">
                  <h2>Sign Up</h2>
                  
                  <Form onSubmit={handleSubmit}>

                  <Form.Group controlId="text" className="py-2">
                      <Form.Label>User Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group controlId="email" className="py-2">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group controlId="password" className="py-2">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>
                    <Button
                      variant="primary"
                      type="submit"
                      className="my-2"
                      style={{
                        // width: "10rem",
                        borderRadius: "10px",
                        backgroundColor: "teal",
                        color: "white",
                        padding: "10px",
                      }}
                    >
                      Sign Up
                    </Button>
                <Link to='/Signin' className="mx-3">SignIn</Link>
                  
                  </Form>
                </div>
              </Col>
              
            </Row>
          </Container>
        </div>
        </>
      );
}
