import React, { useEffect } from 'react';
import $ from 'jquery';
import Sidebar from '../../component/sidebar/Sidebar';
import Navbar from '../../component/navbar/Navbar';
import { Link, usePage } from '@inertiajs/react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from '@inertiajs/react'
import { postCategory } from '../../../../redux/action/CategoryAction';
import { useDispatch } from 'react-redux';

const  AddCategory = ({ success, error }) => {

    const dispatch = useDispatch();

    const { data, setData, post, progress } = useForm({
        category_name: null,
    })

    function submit(e) {
        e.preventDefault()
        post('/admin/category/add-submit')

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

            dispatch(postCategory(data))
            setTimeout(function () {
               
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
                                    <Form.Label>Category Name</Form.Label>
                                    <input type="text" value={data.category_name} onChange={e => setData('category_name', e.target.value)} className="form-control" name="category_name" placeholder="Add New Category" />
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


export default AddCategory;