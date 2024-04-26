import React, { useEffect } from 'react';
import $ from 'jquery';
import Sidebar from '../../component/sidebar/Sidebar';
import Navbar from '../../component/navbar/Navbar';
import { Link, router, usePage } from '@inertiajs/react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from '@inertiajs/react'
import { postCategory } from '../../../../redux/action/CategoryAction';
import { useDispatch, useSelector } from 'react-redux';
import useTggleSidebar from '../../../Hooks/useToggleSidebar';

const EditProduct = ({ success, error, product, subcategory, categories }) => {

    const dispatch = useDispatch();

    const { data, setData, post, progress } = useForm({
        category_id: null,
        subcategory_id: null,
        name: null,
        code: null,
        unit: null,
        tags: null,
        purchase_price: null,
        selling_price: null,
        discount_price: null,
        stock_quantity: null,
        warehouse: null,
        description: null,
        thumbnail: null,
        images: null,
    })


    function submit(e) {
        e.preventDefault()
        post('/admin/product/edit-submit')

    }

    useEffect(() => {
        setData(product)
  
    }, [product]);




    useEffect(() => {
        if (success) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: success,
                showConfirmButton: false,
                timer: 1500
            });

            dispatch(postCategory(data))
            setTimeout(function () {
                router.visit('/admin/category/manage')
            }, 1000);

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

    useTggleSidebar();

    return <div id='page-top'>
        <div id="wrapper">

            <Sidebar />

            <div id="content-wrapper" className="d-flex flex-column">

                <div id="content">

                    <Navbar />

                    <div className="container-fluid">
                        <div className="card p-4">
                            <Form onSubmit={submit}>


                                <div className="row">
                                    <div className="col-lg-12">
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Product Name</Form.Label>
                                            <input type="text" value={data.name?data.name:''} onChange={e => setData('name', e.target.value)} className="form-control" name="category_name" placeholder="Product Name" />
                                        </Form.Group>
                                    </div>
                       
                                    <div className="col-lg-6">
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Select Category</Form.Label>
                                            <select class="form-select" name="subcategory_id" onChange={e => setData('subcategory_id', e.target.value)}>
                                                <option selected>Open this select menu</option>
                                                {categories.map(function (item) {
                                                    return <option key={item.id} value={item.id}>{item.category_name}</option>
                                                })}

                                            </select>
                                        </Form.Group>
                                    </div>
                                    <div className="col-lg-6">
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Select Subcategory</Form.Label>
                                            <select class="form-select" name="category_id" onChange={e => setData('category_id', e.target.value)}>
                                                <option selected>Open this select menu</option>
                                                {subcategory.map(function (item) {
                                                    return <option key={item.id} value={item.id}>{item.category_name}</option>
                                                })}

                                            </select>
                                        </Form.Group>
                                    </div>

                                    <div className="col-lg-4">
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Product Code</Form.Label>
                                            <input type="text" value={data.code?data.code:''} onChange={e => setData('code', e.target.value)} className="form-control" name="code" placeholder="Product Code" />
                                        </Form.Group>
                                    </div>
                                    <div className="col-lg-4">
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Product Unit</Form.Label>
                                            <input type="text" value={data.unit?data.unit:''} onChange={e => setData('unit', e.target.value)} className="form-control" name="unit" placeholder="Product Unit" />
                                        </Form.Group>
                                    </div>
                                    <div className="col-lg-4">
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Product Tages</Form.Label>
                                            <input type="text" value={data.tags?data.tags:''} onChange={e => setData('tags', e.target.value)} className="form-control" name="tags" placeholder="Product Tags" />
                                        </Form.Group>
                                    </div>
                                    <div className="col-lg-4">
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Purchase Price</Form.Label>
                                            <input type="text" value={data.purchase_price?data.purchase_price:''} onChange={e => setData('purchase_price', e.target.value)} className="form-control" name="purchase_price" placeholder="Purchase Price" />
                                        </Form.Group>
                                    </div>
                                    <div className="col-lg-4">
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Selling Price</Form.Label>
                                            <input type="text" value={data.selling_price?data.selling_price:''} onChange={e => setData('selling_price', e.target.value)} className="form-control" name="selling_price" placeholder="Selling Price" />
                                        </Form.Group>
                                    </div>
                                    <div className="col-lg-4">
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Discount Price</Form.Label>
                                            <input type="text" value={data.discount_price?data.discount_price:''} onChange={e => setData('discount_price', e.target.value)} className="form-control" name="discount_price" placeholder="Discount Price" />
                                        </Form.Group>
                                    </div>
                                    <div className="col-lg-6">
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Stock Quantity</Form.Label>
                                            <input type="text" value={data.stock_quantity?data.stock_quantity:''} onChange={e => setData('stock_quantity', e.target.value)} className="form-control" name="stock_quantity" placeholder="Discount Price" />
                                        </Form.Group>
                                    </div>
                                    <div className="col-lg-6">
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Warehouse</Form.Label>
                                            <input type="text" value={data.warehouse?data.warehouse:''} onChange={e => setData('warehouse', e.target.value)} className="form-control" name="warehouse" placeholder="Warehouse" />
                                        </Form.Group>
                                    </div>
                                    <div className="col-lg-12">
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Description</Form.Label>
                                            <textarea type="text" value={data.description?data.description:''} onChange={e => setData('description', e.target.value)} className="form-control" name="description" placeholder="Description" />
                                        </Form.Group>
                                    </div>
                                    <div className="col-lg-6">
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Thumbnail</Form.Label>
                                            <input type="file"  onChange={e => setData('thumbnail', e.target.value)} className="form-control" name="thumbnail" placeholder="Thumbnail" />
                                        </Form.Group>
                                    </div>
                                    <div className="col-lg-6">
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Images</Form.Label>
                                            <input type="file" onChange={e => setData('images', e.target.value)} className="form-control" name="images" placeholder="Images" />
                                        </Form.Group>
                                    </div>

                                </div>



                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
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


export default EditProduct;