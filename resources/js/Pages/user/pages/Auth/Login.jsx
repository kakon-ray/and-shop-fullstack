import React, { useRef } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from '@inertiajs/react'
import SocialLogin from "./SocialLogin";
import "./LoginRegister.css";
import PageBanner from "../../component/PageBanner/PageBanner";
import HeaderNav from '../../component/Navbar/HeaderNav';
import TopNav from '../../component/Navbar/TopNav';
import Footer from "../../component/Footer/Footer";

export default function Login() {

    return (
        <>
            <TopNav />
            <HeaderNav />
            <PageBanner page="Login" />
            <div className="form-responsive mx-auto pb-4">
                <Card className="mx-auto rounded-0">
                    <h4 className="text-center pb-0 pt-3">Login</h4>
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

                            <Link
                                href="/dashboard"
                                className="btn btn-warning w-100"
                                style={{ backgroundColor: "#f79837", color: "#fff" }}
                                type="submit"
                            >
                                Submit
                            </Link>
                        </Form>
                    </Card.Body>
                    <p className="text-center">
                        Already have a account?{" "}
                        <Link to="/registation" style={{ textDecoration: "none" }}>
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
