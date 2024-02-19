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

const Shop = () => {
    const [shopItem, setShopItem] = useProducts();
    return (
        <>
            <TopNav />
            <HeaderNav />
            <PageBanner page="Shop" />
            <section className='pb-5'>
                <div className="container-fluid">
                    <div className="row pb-5">
                        <div className="col-lg-4">
                            <p>Filter By Popularity</p>
                            <Form.Select aria-label="Default select example" className='rounded-0'>
                                <option>Filter By Popularity</option>
                                <option value="volvo">Most Popular</option>
                                <option value="saab">Best Seller</option>
                                <option value="mercedes">Tranding</option>
                                <option value="audi">Featured</option>
                            </Form.Select>
                        </div>
                        <div className="col-lg-4">
                            <p>Filter By Price</p>
                            <Form.Select aria-label="Default select example" className='rounded-0'>
                                <option value="Popularity">Filter by Price</option>
                                <option value="newness">Sort by newness</option>
                                <option value="low">price: low to high</option>
                                <option value="high">price: high to low</option>
                            </Form.Select>
                        </div>
                        <div className="col-lg-4">
                            <p>Filter By Dress</p>
                            <Form.Select aria-label="Default select example" className='rounded-0'>
                                <option>Filter By Dress</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </div>
                    </div>
                    <div className="row g-3">
                        {shopItem.map((item) => (
                            <ShopCard
                                key={item.id}
                                position="Trending"
                                title={item.name}
                                price={item.price}
                                img={item.img}
                                img1={item.img2}
                                item={item}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <FollowUs />
            <Footer />
        </>
    );
}


export default Shop;