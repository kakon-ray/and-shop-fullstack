
import React, { useContext, useState } from "react";
import DashboardSidebar from "../DashboardSidebar/DashboardSidebar";
import "../../dashboard/Dashboard.css";
import HeaderNav from '../../component/Navbar/HeaderNav';
import TopNav from '../../component/Navbar/TopNav';
import Footer from '../../component/Footer/Footer';
import { Button, Card } from "react-bootstrap";
import { WishListContext } from "../../../../context/WishListContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


const WishList = () => {
    const [wishList, setWishList] = useContext(WishListContext);

    const total = 5;

    const removeItem = (id) => {
        const removeThenCartItem = wishList.filter(
            (listItem) => listItem?.id !== id
        );
        setWishList([...removeThenCartItem]);
        // console.log(removeThenCartItem);
    };

  return (
    <>
      <TopNav />
      <HeaderNav />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="dashboard-lg-sidebar">
              <DashboardSidebar />
            </div>
          </div>
          <div className="col-md-9">
            <h1 className="my-3 text-secondary">My Wish List</h1>

            <div className="my-5 container-fluid cart-page">
                <div className="row table-responsive">
                    <table className="table">
                        <thead>
                            <tr id="table-tr-bg">
                                <th scope="col">Remove</th>
                                <th scope="col">Image</th>
                                <th scope="col">Product</th>
                                <th scope="col">Price</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>

                        <tbody className="text-center text-justify">
                            {wishList.map(
                                (item) =>
                                    item && (
                                        <React.Fragment key={item?.id}>
                                            <tr key={item.id} className="cart-table-body">
                                                <th scope="row">
                                                    <FontAwesomeIcon
                                                        icon={faTrash}
                                                        size="lg"
                                                        className="text-danger pt-4"
                                                        onClick={() => removeItem(item.id)}
                                                    />
                                                </th>

                                                <td>
                                                    <img
                                                        src={item.img}
                                                        alt=""
                                                        style={{ width: "80px", height: "80px" }}
                                                    />
                                                </td>
                                                <td>
                                                    <p className="mt-4">{item.name}</p>
                                                </td>
                                                <td>
                                                    <p className="mt-4">{item.price}</p>
                                                </td>
                                                <td style={{ width: "140px" }}>
                                                    <div className="d-flex justify-content-center align-items-center" style={{ width: "140px", height: "80px" }}>
                                                        <button className="btn btn-outline-warning">
                                                            Add To Cart
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </React.Fragment>
                                    )
                            )}
                        </tbody>
                    </table>
                    {wishList.length <= 0 && (
                        <p style={{ fontSize: "30px" }} className="text-center py-5">
                            No item Wishlist
                        </p>
                    )}
                </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WishList;
