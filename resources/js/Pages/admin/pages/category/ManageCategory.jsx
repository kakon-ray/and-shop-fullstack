import React from 'react';
import $ from 'jquery';
import Sidebar from '../../component/sidebar/Sidebar';
import Navbar from '../../component/navbar/Navbar';
import { Link, usePage } from '@inertiajs/react'
import Table from 'react-bootstrap/Table';
import './Category.css';

const ManageCategory = ({ categories }) => {
    // Toggle the side navigation
    $("#sidebarToggle, #sidebarToggleTop").on('click', function (e) {
        $("body").toggleClass("sidebar-toggled");
        $(".sidebar").toggleClass("toggled");
        if ($(".sidebar").hasClass("toggled")) {
            $('.sidebar .collapse').collapse('hide');
        };
    });

    return <div id='page-top'>
        <div id="wrapper">

            <Sidebar />

            <div id="content-wrapper" className="d-flex flex-column">

                <div id="content">

                    <Navbar />

                    <div className="container-fluid">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Category Name</th>
                                    <th>Category Slug</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {categories?.map((item) => {
                                return (
                                    <React.Fragment key={item._id}>
                                        <tr>
                                            <td>{item.category_name}</td>
                                            <td>{item.category_slug}</td>
                                            <td>
                                                <td class="th-sm text-center d-flex gap-2">
                                                    <form method="POST" action="{{ route('admin.catagory.delete') }}" enctype="multipart/form-data">

                                                        <input type="text" name="id" value="{{$item->id}}" class="d-none"/>
                                                            <button type="submit" className="btn btn-danger rounded-circle btn-sm"><i
                                                                class="fas fa-trash"></i></button>
                                                    </form>
                                                    <a href={`/admin/category/edit/${item.id}`} type="button"
                                                        className="btn btn-info btn-circle btn-sm"><i class="fas fa-edit"></i></a>

                                                </td>
                                            </td>
                                        </tr>
                                    </React.Fragment>
                                );
                            })}
                            <tbody>


                            </tbody>
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


export default ManageCategory;