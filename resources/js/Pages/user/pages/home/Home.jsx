import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Inertia } from '@inertiajs/inertia'
import axios from 'axios';
import { Link } from '@inertiajs/react'
import Swal from 'sweetalert2';
import HeaderNav from '../../component/Navbar/HeaderNav';
import TopNav from '../../component/Navbar/TopNav';
import HeaderBanner from '../../component/HeaderBanner/HeaderBanner';
import Footer from '../../component/Footer/Footer';
import NewCollection from '../../component/NewCollection/NewCollection';
import Product from '../../component/Product/Product';
import OffCollection from '../../component/OffCollection/OffCollection';
import SlickCollection from '../../component/SlickCollection/SlickCollection';
import NewFashon from '../../component/NewFashon/NewFashon';
import LatestBlog from '../../component/LatestBlog/LatestBlog';
import FollowUs from '../../component/FollowUs/FollowUs';


const Home = () => {

    return (
        <>
            <TopNav />
            <HeaderNav />
            <HeaderBanner />
            <NewCollection/>
            <Product/>
            <OffCollection/>
            <SlickCollection/>
            <NewFashon/>
            <LatestBlog/>
            <FollowUs/>
            <Footer />
        </>
    );
}


export default Home;