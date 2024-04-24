import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Inertia } from '@inertiajs/inertia'
import axios from 'axios';
import { Link } from '@inertiajs/react'
import Swal from 'sweetalert2';
import HeaderNav from '../../component/Navbar/HeaderNav';
import TopNav from '../../component/Navbar/TopNav';
import Footer from '../../component/Footer/Footer';
import PageBanner from '../../component/PageBanner/PageBanner';
import useProducts from '../../../Hooks/useProducts';
import ShopCard from '../../component/ShopCard/ShopCard';
import FollowUs from '../../component/FollowUs/FollowUs';
import Form from 'react-bootstrap/Form';
import './Contact.css';

const Shop = () => {
    const [shopItem, setShopItem] = useProducts();
    return (
        <>
            <TopNav />
            <HeaderNav />
            <PageBanner page="Contact Us" />

            <section id="contact_area" className="py-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="left_side_contact">
                                <div className="ps-5 ps-lg-5 py-5">
                                    <h3>Contact Information</h3>
                                </div>
                                <ul>
                                    <li className="address_location">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <p>32, Choto Mirzapur, Ahsan Ahmed Road Khulna 9100, Bangladesh</p>
                                    </li>
                                    <li className="address_location">
                                        <i className="fas fa-phone-volume"></i>
                                        <div className="contact_widget">
                                            <a href="tel:+8801707500512">+8801707500512</a>
                                            <a href="tel:+8801707500512">+8801707500512</a>

                                        </div>
                                    </li>
                                    <li className="address_location">
                                        <i className="far fa-envelope"></i>
                                        <div className="contact_widget">
                                            <a href="mailto:demo235@gmail.com">demo@gmail.com</a>
                                            <a href="mailto:demo235@gmail.com">demo@gmail.com</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="contact_form_one">
                                <h3>Get In Touch</h3>
                                <form action="#!">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Name*" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Email*" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <input type="number" className="form-control" placeholder="Phone*" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Subject*" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <textarea rows="7" className="form-control" placeholder="Message*"></textarea>
                                            </div>
                                            <div className="submit_bitton_contact_one">
                                                <button className="btn btn-outline-warning">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-12 pt-5">
                            <div className="map_area">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.6962663570607!2d89.56355961427838!3d22.813715829827952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff901efac79b59%3A0x5be01a1bc0dc7eba!2sAnd+IT!5e0!3m2!1sen!2sbd!4v1557901943656!5m2!1sen!2sbd"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FollowUs />
            <Footer />
        </>
    );
}


export default Shop;