import React from 'react';
import './Footer.css';
import $ from 'jquery';
import logo from "../../../../../../public/assets/img/logo.png";
import pement from "../../../../../../public/assets/img/payment.png";
import { Button } from 'react-bootstrap';

const Footer = () => {
    /*=====================
    24. Cookiebar
    ==========================*/

    window.setTimeout(function () {
        $(".cookie-bar").addClass('show')
    }, 5000);

    $('.cookie-bar .btn, .cookie-bar .btn-close').on('click', function () {
        $(".cookie-bar").removeClass('show')
    });
   
    return <>
        <footer id="footer_one">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-12 col-sm-12 col-12">
                        <div class="footer_left_side">
                            <a href="#!"><img src={logo} alt="logo" /></a>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati culpa assumenda voluptas
                                placeat amet consectetur adipisicing elit. Obcaecati culpa assumenda voluptas placeat.
                            </p>
                            <div class="footer_left_side_icon">
                                <ul>
                                    <li>
                                        <a href="#!"><i class="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li>
                                        <a href="#!"><i class="fab fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="#!"><i class="fab fa-linkedin"></i></a>
                                    </li>
                                    <li>
                                        <a href="#!"><i class="fab fa-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a href="#!"><i class="fab fa-google-plus-g"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                        <div class="footer_one_widget">
                            <h3>INFORMATION</h3>
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li><a href="about-us.html">About Us</a></li>
                                <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                <li><a href="faq.html">Frequently Questions</a></li>
                                <li><a href="order-tracking.html">Order Tracking</a></li>
                                <li><a href="compare.html">Compare</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-6 col-sm-12 col-12">
                        <div class="footer_one_widget">
                            <h3>Your Account</h3>
                            <ul>
                                <li><a href="cart.html">Cart View One</a></li>
                                <li><a href="cart-2.html">Cart View Two </a></li>
                                <li><a href="empty-cart.html">Empty Cart</a></li>
                                <li><a href="wishlist.html">Wishlist</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-12 col-sm-12 col-12">
                        <div class="footer_one_widget">
                            <h3>NEWSLETTER</h3>
                            <div id="mc_embed_signup" class="subscribe-form">
                                <form>
                                    <div class="mc-form">
                                        <input class="form-control" type="email" required="" placeholder="Your Mail*"
                                            name="EMAIL" value="" />
                                        <div class="clear">
                                            <Button variant="outline-secondary" id="button-addon2">
                                                Send Mail
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        <section id="copyright_one">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="copyright_left">
                            <h6>© CopyRight 2022
                                <span>AndShop</span>
                            </h6>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="copyright_right">
                            <img src={pement} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="cookie-bar">
            <p className='pb-0 mb-0'>We use cookies to improve our site and your shopping experience. By continuing to browse our site you accept
                our cookie policy.</p>
            <a href="javascript:void(0)" class="btn btn-dark">Accept</a>
            <a href="javascript:void(0)" class="btn btn-dark">Decline</a>
        </div>

    </>;
}

export default Footer;