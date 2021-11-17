import React from 'react'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from '../Auth/LoginForm';

const Login = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "80vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <LoginForm />
      </div>
    </Container>
  );
}

export default Login