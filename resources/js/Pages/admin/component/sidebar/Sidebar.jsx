import React from 'react';
import { Link,usePage } from '@inertiajs/react'

const Sidebar = () => {
    return <>
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>

            <hr className="sidebar-divider my-0" />

            <li className="nav-item active">
                <a className="nav-link" href="index.html">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></a>
            </li>


            <hr className="sidebar-divider my-0" />
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Category</span>
                </a>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <Link className="collapse-item" href="/admin/category/manage">Manage Category</Link>
                        <Link className="collapse-item" href="/admin/category/add">Add New Category</Link>
                    </div>
                </div>
            </li>
            <hr className="sidebar-divider my-0" />

            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapse3"
                    aria-expanded="true" aria-controls="collapse3">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Sub Category</span>
                </a>
                <div id="collapse3" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <Link className="collapse-item" href="/admin/subcategory/manage">Manage Sub Category</Link>
                        <Link className="collapse-item" href="/admin/subcategory/add">Add sub Category</Link>
                    </div>
                </div>
            </li>
            <hr className="sidebar-divider my-0" />

            <div className="text-center d-none d-md-inline pt-4">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

        </ul>
    </>;
}
export default Sidebar;