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

            <section id="contact_area" class="py-5">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="left_side_contact">
                                <div className="ps-5 ps-lg-5 py-5">
                                    <h3>Contact Information</h3>
                                </div>
                                <ul>
                                    <li class="address_location">
                                        <i class="fas fa-map-marker-alt"></i>
                                        <p>32, Choto Mirzapur, Ahsan Ahmed Road Khulna 9100, Bangladesh</p>
                                    </li>
                                    <li class="address_location">
                                        <i class="fas fa-phone-volume"></i>
                                        <div class="contact_widget">
                                            <a href="tel:+8801707500512">+8801707500512</a>
                                            <a href="tel:+8801707500512">+8801707500512</a>

                                        </div>
                                    </li>
                                    <li class="address_location">
                                        <i class="far fa-envelope"></i>
                                        <div class="contact_widget">
                                            <a href="mailto:demo235@gmail.com">demo@gmail.com</a>
                                            <a href="mailto:demo235@gmail.com">demo@gmail.com</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div class="contact_form_one">
                                <h3>Get In Touch</h3>
                                <form action="#!">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Name*" />
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Email*" />
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div class="form-group">
                                                <input type="number" class="form-control" placeholder="Phone*" />
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Subject*" />
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div class="form-group">
                                                <textarea rows="7" class="form-control" placeholder="Message*"></textarea>
                                            </div>
                                            <div class="submit_bitton_contact_one">
                                                <button class="btn btn-outline-warning">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-12 pt-5">
                            <div class="map_area">
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