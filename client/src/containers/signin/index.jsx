import React from "react";
import { Layout } from "../../components";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Input from "../../components/UI/input";


export default function SignIn() {
  return (
    <Layout>
      <Container>
        <Row style={{marginTop:"50px"}}>
          <Col md={{ span: 6  ,offset:3}}>
            <Form>
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
            placeholder= "Password"
            onChange={()=>{}}
            value=""
            />
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
