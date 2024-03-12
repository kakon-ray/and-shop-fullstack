import React, { useEffect, useRef, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from '@inertiajs/react'
import SocialLogin from "./SocialLogin";
import "./LoginRegister.css";
import PageBanner from "../../component/PageBanner/PageBanner";
import HeaderNav from '../../component/Navbar/HeaderNav';
import TopNav from '../../component/Navbar/TopNav';
import Footer from "../../component/Footer/Footer";
import Swal from 'sweetalert2';
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'
import { router } from '@inertiajs/react'

export default function Login({ success, error }) {

    const [values, setValues] = useState({
        email: "",
        password: "",
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
        router.post('/login', values)
    }

    useEffect(() => {
        if (success) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: success,
                showConfirmButton: false,
                timer: 1500
            });

            setTimeout(function () {
                window.location.href = '/user/dashboard';
            }, 1500);

        } else if (error) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: error,
                showConfirmButton: false,
                timer: 1500
            });

        }

    }, [success, error]);

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
            <PageBanner page="Login" />
            <div className="form-responsive mx-auto pb-4">
                <Card className="mx-auto rounded-0">
                    <h4 className="text-center pb-0 pt-3">Login</h4>
                    <Card.Body className="p-5 py-4">
                    <Form onSubmit={handleSubmit}>
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
                            <span class="flex justify-around items-center showpassword" onClick={handleToggle}>
                                <Icon class="absolute mr-10" icon={icon} size={25} />
                            </span>
                        </Form.Group>

                        <Button
                            className="btn btn-warning w-100"
                            style={{ backgroundColor: "#f79837", color: "#fff" }}
                            type="submit"
                        >
                            Login
                        </Button>
                    </Form>
                    </Card.Body>
                    <p className="text-center">
                        Already have a account?{" "}
                        <Link href="/register" style={{ textDecoration: "none" }}>
                            <span style={{ cursor: "pointer", color: "#f79837" }}>Registation</span>
                        </Link>
                    </p>
                </Card>
                <SocialLogin />
            </div>

            <Footer />
        </>
    );
}
