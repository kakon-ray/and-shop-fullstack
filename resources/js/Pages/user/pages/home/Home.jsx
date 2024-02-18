import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Inertia } from '@inertiajs/inertia'
import axios from 'axios';
import { Link } from '@inertiajs/react'
import Swal from 'sweetalert2';
import HeaderNav from '../../component/Navbar/HeaderNav';
import TopNav from '../../component/Navbar/TopNav';
import PageBanner from '../../component/PageBanner/PageBanner';
import Footer from '../../component/Footer/Footer';
import NewCollection from '../../component/NewCollection/NewCollection';
import Product from '../../component/Product/Product';


const Home = () => {

    return (
        <>
            <TopNav />
            <HeaderNav />
            <PageBanner />
            <NewCollection/>
            <Product/>
            <Footer />
        </>
    );
}


export default Home;