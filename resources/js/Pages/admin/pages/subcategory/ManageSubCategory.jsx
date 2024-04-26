import React, { useEffect } from 'react';
import $ from 'jquery';
import Sidebar from '../../component/sidebar/Sidebar';
import Navbar from '../../component/navbar/Navbar';
import { Link, usePage } from '@inertiajs/react'
import Table from 'react-bootstrap/Table';
import './Category.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCategory, deleteSubCategory, getCategory, getSubCategory } from '../../../../redux/action/CategoryAction';
import axios from 'axios';
import useTggleSidebar from '../../../Hooks/useToggleSidebar';

const ManageSubCategory = ({ subcategories }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSubCategory(subcategories))
    }, []);

    const allSubCategory = useSelector(
        (state) => state.category.subcategory
    );



    // delete category
    const deleteHandeler = (removeId) => {
        axios.get(`/admin/subcategory/delete/${removeId}`).then((response) => {
            if (response.data.status == 200) {
                dispatch(deleteSubCategory(removeId))
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Successfully Deleted",
                    showConfirmButton: false,
                    timer: 1500
                });
            }else{
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Faild",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });

    }

    useTggleSidebar();

    
    return <div id='page-top'>
        <div id="wrapper">

            <Sidebar />

            <div id="content-wrapper" className="d-flex flex-column">

                <div id="content">

                    <Navbar />

                    <div className="container-fluid">
                        <Table striped bordered hover>
                            <thead>
                                <tr className='text-center'>
                                    <th>Subcategory Name</th>
                                    <th>Subcategory Slug</th>
                                    <th>Category Name</th>
                                    <th>Category Slug</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {allSubCategory?.map((item) => {
                                return (
                                    <React.Fragment key={item._id}>
                                        <tr>
                                            <td>{item.subcategory_name}</td>
                                            <td>{item.subcat_slug}</td>
                                            <td>{item.add_category?.category_name}</td>
                                            <td>{item.add_category?.category_slug}</td>
                                            <td>
                                                <td className="text-center d-flex gap-2">
                                                   
                                                <button type="submit" onClick={() => deleteHandeler(item.id)} className="btn-danger rounded-circle btn-sm"><i
                                                            className="fas fa-trash"></i></button>
                                                    <Link href={`/admin/subcategory/edit/${item.id}`} type="button"
                                                        className="btn-info btn-circle btn-sm p-3"><i className="fas fa-edit" style={{fontSize:"16px"}}></i></Link>

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


export default ManageSubCategory;