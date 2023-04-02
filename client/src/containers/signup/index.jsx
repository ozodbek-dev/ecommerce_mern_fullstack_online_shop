import React from "react";
import { Layout } from "../../components";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Input from "../../components/UI/input";

export default function SignUp() {
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <Col md={6}>
                  <Input 
                  label="First Name" 
                  type="text"
                  onChange={()=>{}}
                  value=''
                  placeholder="Jhone"
                  />
                </Col>
                <Col md={6}>
                  <Input 
                  label="Last Name" 
                  type="text"
                  value=''
                  onChange={()=>{}}
                  placeholder="Doe"
                  />
                </Col>
              </Row>
              <Input
                type="email"
                label="Email"
                placeholder="Example@gmail.com"
                onChange={()=>{}}
                value=""
                />

                <Input
                type="password"
                label="Password"
                placeholder="*******"
                onChange={()=>{}}
                value=""
                />

             
              <Button variant="primary" type="submit">
                Register
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
