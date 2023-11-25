import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate,Link } from "react-router-dom";
import logo from '../images/atstaylogo.webp';
import pms from './user.json';


const SignIn = () => {
  const history = useNavigate();
  const [user , Setuser] = useState(pms);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const cmd = user.map((ll) => ll.username);
  const csd = user.map((lm) => lm.password);
  const cdd = user.map((ls) => ls.id);

  console.log(cmd , "asdfas");

  let userFound = false;

  async function handleSubmit(e) {
    for(let i =0 ; i<pms.length ;i++ ){
      if(email == cmd[i] && password == csd[i]){
        
        history(`/panel/${cdd[i]}`)
        userFound = true;
        break;
    }

    
    }
if(!userFound){
    alert("Authentication Failed")
    
  }
    
  }

  console.log("hello")

  const mystyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  };


    return (
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
                src={logo}
                alt=""
                style={{ width: "400px", height: "400px" }}
              />
            </Col>
            <Col xs={12} md={6} lg={6} style={{ backgroundColor: "aliceblue" }}>
              <div className="auth-form">
                
                <Form onSubmit={handleSubmit}>
                <h2>Login To Your Pannel</h2>
                  <Form.Group controlId="email" className="py-2">
                    
                    <Form.Control
                      type="text"
                      placeholder="User Name"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId="password" className="py-2">
                    
                    <Form.Control
                      type="text"
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
                    Sign In
                  </Button>
                  
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
};





export default SignIn;
