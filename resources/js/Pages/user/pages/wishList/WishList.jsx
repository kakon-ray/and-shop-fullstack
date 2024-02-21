import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { WishListContext } from "../../../../context/WishListContext";
import PageBanner from '../../component/PageBanner/PageBanner';
import TopNav from "../../component/Navbar/TopNav";
import HeaderNav from "../../component/Navbar/HeaderNav";

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
            <PageBanner page="Wishlsit" />
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
                                                <td style={{ width: "140px"}}>
                                                    <div className="d-flex justify-content-center align-items-center" style={{width: "140px", height: "80px" }}>
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
        </>
    );
};

export default WishList;
