
import React, { useContext, useState } from "react";
import DashboardSidebar from "../DashboardSidebar/DashboardSidebar";
import "../../dashboard/Dashboard.css";
import HeaderNav from '../../component/Navbar/HeaderNav';
import TopNav from '../../component/Navbar/TopNav';
import Footer from '../../component/Footer/Footer';
import { Button, Card } from "react-bootstrap";
import { CartContext } from "../../../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


const DashboardPage = () => {
    const [cartList, setCartList] = useContext(CartContext);

    const removeItem = (id) => {
        const removeThenCartItem = cartList.filter(
            (listItem) => listItem?.id !== id
        );
        setCartList([...removeThenCartItem]);
        // console.log(removeThenCartItem);
    };

    const handleChangeSinglePost = (value, id) => {
        // console.log("value>>>", value);
        // console.log("id>>>", id);

        setCartList(
            cartList.map((item) =>
                item.id === id ? { ...item, value: value } : item
            )
        );
    };

    let totalPrice = 0;
    let shipping = 5;
    for (let item of cartList) {
        totalPrice = totalPrice + item.value * item.price;
    }


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
            <h1 className="my-3 text-secondary">My Cart List</h1>

            <div className="px-0 container-fluid cart-page" id="card-page">
                <div className="row table-responsive">
                    <table className="table">
                        <thead id="table-tr-bg">
                            <tr>
                                <th scope="col">Remove</th>
                                <th scope="col">Image</th>
                                <th scope="col">Product</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quality</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody className="text-center text-justify">
                            {cartList.map(
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
                                                <td>
                                                    <input
                                                        className="mt-4"
                                                        id="number"
                                                        type="number"
                                                        defaultValue={item.value}
                                                        min="1"
                                                        style={{ width: "50px" }}
                                                        onChange={(e) =>
                                                            handleChangeSinglePost(e.target.value, item.id)
                                                        }
                                                    ></input>
                                                </td>
                                                <td>
                                                    <p className="mt-4">${item.price * item.value}.00</p>
                                                </td>
                                            </tr>
                                        </React.Fragment>
                                    )
                            )}
                        </tbody>
                    </table>
                    {cartList.length <= 0 && (
                        <p style={{ fontSize: "30px" }} className="text-center py-5">
                            No item Cartlist
                        </p>
                    )}
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <Card>
                            <Card.Body style={{ margin: "0", padding: "0" }}>
                                <Card.Title
                                    style={{
                                        backgroundColor: "#f79837",
                                        color: "#fff",
                                        padding: "10px",
                                        width: "100%",
                                    }}
                                >
                                    COUPON
                                </Card.Title>

                                <div style={{ padding: "15px" }} className="cupon">
                                    <p className="text-secondary ">
                                        Enter your coupon code if you have one.
                                    </p>
                                    <div className="row g-0">
                                        <div className="col-lg-8">
                                            <input
                                                className="form-control rounded-0"
                                                placeholder="Coupon code"
                                                type="text"
                                            />
                                        </div>
                                        <div className="col-lg-4">
                                            <Button variant="dark">APPLY TO CUPON</Button>
                                        </div>
                                    </div>

                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-6">
                        <Card>
                            <Card.Body style={{ margin: "0", padding: "0" }}>
                                <Card.Title
                                    style={{
                                        backgroundColor: "#f79837",
                                        color: "#fff",
                                        padding: "10px",
                                        width: "100%",
                                    }}
                                >
                                    CART TOTAL
                                </Card.Title>
                                <div style={{ padding: "15px" }} className="text-secondary">
                                    <div className="d-flex justify-content-between py-2">
                                        <span>Subtotal</span>
                                        <span>${totalPrice}.00</span>
                                    </div>
                                    <div className="d-flex justify-content-between py-2">
                                        <span>Shipping</span>
                                        <span>
                                            ${totalPrice > 0 ? shipping : (shipping = 0)}.00
                                        </span>
                                    </div>
                                    <p className="text-end py-2">Calculate shipping</p>
                                    <hr />
                                    <div className="d-flex justify-content-between py-2">
                                        <span>Total</span>
                                        <span>${totalPrice + shipping}.00</span>
                                    </div>
                                    <div className="d-flex justify-fontent-end py-2">
                                        <Button variant="dark pb-2 pt-2 ms-auto">
                                            PROCEED TO CHECKOUT
                                        </Button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DashboardPage;
