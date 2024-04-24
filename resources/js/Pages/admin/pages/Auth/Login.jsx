import React, { useEffect, useRef } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from '@inertiajs/react'
import "./LoginRegister.css";
import { useState } from 'react'
import { router } from '@inertiajs/react'
import axios from 'axios';
import Swal from 'sweetalert2';

import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'

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
        router.post('/admin/login', values)
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
                window.location.href = '/admin/dashboard';
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

        <div className="form-responsive mx-auto mt-5 pt-4">
            <Card className="mx-auto rounded-0 py-5">
                <h4 className="text-center pb-3">Login in Admin Dashboard</h4>
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
                            <span className="flex justify-around items-center showpassword" onClick={handleToggle}>
                                <Icon className="absolute mr-10" icon={icon} size={25} />
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

            </Card>
        </div>

    );
}
