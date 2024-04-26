import React, { useEffect } from 'react';
import $ from 'jquery';
import Sidebar from '../../component/sidebar/Sidebar';
import Navbar from '../../component/navbar/Navbar';
import { Link, router, usePage } from '@inertiajs/react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from '@inertiajs/react'
import { postSubCategory } from '../../../../redux/action/CategoryAction';
import { useDispatch, useSelector } from 'react-redux';
import useTggleSidebar from '../../../Hooks/useToggleSidebar';

const AddSubCategory = ({ success, error, categories }) => {

    const dispatch = useDispatch();


    const { data, setData, post, progress } = useForm({
        subcategory_name: null,
        category_id: null,
    })


    function submit(e) {
        e.preventDefault()
        post('/admin/subcategory/add-submit')

    }

    useEffect(() => {
        if (success) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: success,
                showConfirmButton: false,
                timer: 1500
            });

            dispatch(postSubCategory(data))
            setTimeout(function () {
                router.visit('/admin/subcategory/manage')
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
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Subcategory Name</Form.Label>
                                    <input type="text" onChange={e => setData('subcategory_name', e.target.value)} className="form-control" name="subcategory_name" placeholder="Add New subcategory" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <select class="form-select" name="category_id" onChange={e => setData('category_id', e.target.value)}>
                                        <option selected>Open this select menu</option>
                                        {categories.map(function (item) {
                                          return <option key={item.id} value={item.id}>{item.category_name}</option>
                                        })}
                                        
                                    </select>
                                </Form.Group>

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


export default AddSubCategory;