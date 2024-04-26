import React, { useEffect } from 'react';
import $ from 'jquery';
import Sidebar from '../../component/sidebar/Sidebar';
import Navbar from '../../component/navbar/Navbar';
import { Link, usePage } from '@inertiajs/react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCategory, getCategory } from '../../../../redux/action/CategoryAction';
import axios from 'axios';
import useTggleSidebar from '../../../Hooks/useToggleSidebar';

const ManageProduct = ({ product }) => {


    useTggleSidebar();
    

    return <div id='page-top'>
        <div id="wrapper">

            <Sidebar />

            <div id="content-wrapper" className="d-flex flex-column">

                <div id="content">

                    <Navbar />

                    <div className="container-fluid">
                        <Table striped bordered hover>

                            <tr>
                                <th>Product Image</th>
                                <td><img src={product.thumbnail} className='img-fluid' style={{height:'100px'}} alt="" /></td>
                            </tr>
                            <tr>
                                <th>Product Name</th>
                                <td>{product.name}</td>
                            </tr>
                            <tr>
                                <th>Product Category</th>
                                <td>{product.category.category_name}</td>
                            </tr>
                            <tr>
                                <th>Product Subcategory</th>
                                <td>{product.subcategory.subcategory_name}</td>
                            </tr>
                            <tr>
                                <th>Product Subcategory</th>
                                <td>{product.subcategory.subcategory_name}</td>
                            </tr>
                            <tr>
                                <th>Product Code</th>
                                <td>{product.code}</td>
                            </tr>
                            <tr>
                                <th>Product Unit</th>
                                <td>{product.unit}</td>
                            </tr>
                            <tr>
                                <th>Product Tags</th>
                                <td>{product.tags}</td>
                            </tr>
                            <tr>
                                <th>Product Purchase Price</th>
                                <td>{product.purchase_price}</td>
                            </tr>
                            <tr>
                                <th>Product Selling Price</th>
                                <td>{product.selling_price}</td>
                            </tr>
                            <tr>
                                <th>Product Discount Price</th>
                                <td>{product.discount_price}</td>
                            </tr>
                            <tr>
                                <th>Product Stock Quantity</th>
                                <td>{product.stock_quantity}</td>
                            </tr>
                            <tr>
                                <th>Product warehouse</th>
                                <td>{product.warehouse}</td>
                            </tr>
                            <tr>
                                <th>Product description</th>
                                <td>{product.description}</td>
                            </tr>


                        </Table>
                    </div>

                </div>

                <footer className="sticky-footer bg-white">
                    <div className="container my-auto">
                        <div className="copyright text-center my-auto">
                            <span>Copyright &copy; Your Website 2021</span>
                        </div>
                    </div>
                </footer>
            </div>

            {/* <!-- Scroll to Top Button--> */}
            <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up"></i>
            </a>
        </div>
    </div>;
}


export default ManageProduct;