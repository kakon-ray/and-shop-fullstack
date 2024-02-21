import React, { useContext } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { CartContext } from "../../../../../context/CartContext";
import OffCanvasCard from "../OffCanvasCard/OffCanvasCard";
import { Link } from '@inertiajs/react'

const OffCanvasCart = ({ onHideCart, placement, showCart }) => {
  const [cartList, setCartList] = useContext(CartContext);

  const removeItem = (id) => {
    const removeThenCartItem = cartList.filter(
      (listItem) => listItem?.id !== id
    );
    setCartList([...removeThenCartItem]);
    // console.log(removeThenCartItem);
  };
  return (
    <Offcanvas show={showCart} onHide={onHideCart} placement={placement}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="text-center mx-auto textwarning">
          AND SHOP
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartList.map((item) =>
          item ? (
            <OffCanvasCard item={item} removeItem={removeItem} key={item.id} />
          ) : (
            ""
          )
        )}
        {cartList.length > 0 ? (
          <Link to="/cart">
            <div className="text-center">
              <Button variant="outline-warning">View Cart</Button>
            </div>
          </Link>
        ) : (
          ""
        )}
        {cartList.length <= 0 ? (
          <h6 className="text-center">No Item in the Cart List</h6>
        ) : (
          ""
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default OffCanvasCart;
