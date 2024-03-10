import React, { useRef } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from '@inertiajs/react'
import "./LoginRegister.css";


export default function Login() {

    return (
 
            <div className="form-responsive mx-auto mt-5 pt-4">
                <Card className="mx-auto rounded-0 py-5">
                    <h4 className="text-center pb-3">Login in Dashboard</h4>
                    <Card.Body className="p-5 py-4">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control
                                    type="email"
                                    value="thisiskakonray@gmail.com"
                                    placeholder="Enter Email"
                                    className="rounded-0"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control
                                    type="password"
                                    value="123456"
                                    placeholder="Enter Password"
                                    className="rounded-0"
                                />
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
