import React, { useRef } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from '@inertiajs/react'
import SocialLogin from "./SocialLogin";
import "./LoginRegister.css";
import PageBanner from "../../component/PageBanner/PageBanner";
import HeaderNav from '../../component/Navbar/HeaderNav';
import TopNav from '../../component/Navbar/TopNav';
import Footer from "../../component/Footer/Footer";

import { router } from '@inertiajs/react'
import { useState } from 'react'

import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'

export default function Registation() {

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  })

  const [password, setPassword] = useState("");
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);

  function handleChange(e) {
    const key = e.target.id;
    const value = e.target.value
    setValues(values => ({
      ...values,
      [key]: value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    router.post('/register', values)
  }

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(eye);
      setType('text')
    } else {
      setIcon(eyeOff)
      setType('password')
    }
  }



  return (
    <>
      <TopNav />
      <HeaderNav />
      <PageBanner page="Registation" />
      <div className="form-responsive mx-auto pb-5">
        <Card className="mx-auto rounded-0">
          <h4 className="text-center pb-0 pt-3">Registation</h4>
          <Card.Body className="p-5 py-4">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  id="name"
                  value={values.name} onChange={handleChange}
                  placeholder="Enter Name"
                  className="rounded-0"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  id="email"
                  value={values.email} onChange={handleChange}
                  placeholder="Enter Email"
                  className="rounded-0"
                />
              </Form.Group>
              <Form.Group className="mb-3 position-relative" controlId="formBasicPassword">
                <Form.Control
                  type={type}
                  name="password"
                  id="password"
                  value={values.password} onChange={handleChange}
                  placeholder="Enter Password"
                  className="rounded-0"
                />
                <span className="flex justify-around items-center showpassword" onClick={handleToggle}>
                  <Icon className="absolute mr-10" icon={icon} size={25} />
                </span>
              </Form.Group>
              <Form.Group className="mb-3 position-relative" controlId="formBasicPassword">
                <Form.Control
                  type={type}
                  name="password_confirmation"
                  id="password_confirmation"
                  value={values.password_confirmation} onChange={handleChange}
                  placeholder="Enter Password"
                  className="rounded-0"
                />
              </Form.Group>

              <Button
                className="btn btn-warning w-100"
                style={{ backgroundColor: "#f79837", color: "#fff" }}
                type="submit"
              >
                Register
              </Button>
            </Form>
          </Card.Body>
          <p className="text-center">
            Already have a account?{" "}
            <Link href="/login" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer", color: "#f79837" }}>Login</span>
            </Link>
          </p>
        </Card>
        <SocialLogin />
      </div>
      <Footer />
    </>
  );
}
