import React, { useContext, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import {
  Container,
  Nav,
  Button,
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./HeaderNav.css";
import { Link,usePage } from '@inertiajs/react'
import logo from "../../../../../../public/assets/img/logo.png";
import OffCanvasSearch from "../OffCanvas/OffCanvasSearch/OffCanvasSearch";
import OffCanvasCart from "../OffCanvas/OffCanvasCart/OffCanvasCart";
import OffCanvasWishlist from "../OffCanvas/OffCanvasWishlist/OffCanvasWishlist";


const HeaderNav = () => {

  // this hooks use search btn show
  const [show, setShow] = useState(false);
  const { url, component } = usePage()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // this hooks use Shoping cart show btn
  const [showCart, setShowCart] = useState(false);

  const handleClosCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);


  // this hooks use wishlist show btn
  const [showWishList, setShowWishList] = useState(false);

  const handleClosWishLIst = () => setShowWishList(false);
  const handleShowWishList = () => setShowWishList(true);

  return (
    <>
      <Navbar bg="light" expand="lg" className="sticky-top">
        <Container fluid>
          <Link href="/" className="navbar-brand">
            <img src={logo} className="nav-logo" alt="logo" />
          </Link>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="nav-link-container"
              style={{ maxHeight: "500px" }}
              navbarScroll
            >
              <Link href="/" className={`${url === '/' ? 'navbar-item-active' : ''} nav-link`}>
                Home
              </Link>
              <Link href="/shop" className={`${url === '/shop' ? 'navbar-item-active' : ''} nav-link`}>
                Shop
              </Link>

              <Link href="/about" className={`${url === '/about' ? 'navbar-item-active' : ''} nav-link`}>
                About Us
              </Link>
              <Link href="/blog" className={`${url === '/blog' ? 'navbar-item-active' : ''} nav-link`}>
                Blog
              </Link>
              <Link href="/contact" className={`${url === '/contact' ? 'navbar-item-active' : ''} nav-link`}>
                Contact
              </Link>

            </Nav>
          </Navbar.Collapse>
          <div className="navbar-shop d-flex flex-nowrap aligen-item-center mb-0 pb-0">
            <Button
              variant=""
              className="navbar-icon   position-relative  pb-0 "
              onClick={handleShowWishList}
            >
              <FontAwesomeIcon icon={faHeart} size="xl" />
              <span className="position-absolute  translate-middle badge rounded-pill p-1">
                5
                <span className="visually-hidden">unread messages</span>
              </span>
            </Button>
            <Button
              variant=""
              className="navbar-icon  position-relative  pb-0 "
              onClick={handleShowCart}
            >
              <FontAwesomeIcon icon={faShoppingBag} size="xl" />
              <span className="position-absolute top-5 start-99 translate-middle badge rounded-pill p-1">
                5
                <span className="visually-hidden">unread messages</span>
              </span>
            </Button>
            <Button
              variant=""
              className="navbar-icon pb-0 "
              onClick={handleShow}
            >
              <FontAwesomeIcon icon={faSearch} size="lg" />
            </Button>

          </div>
        </Container>
      </Navbar>

      <OffCanvasSearch show={show} onHide={handleClose} placement={"start"} />

      <OffCanvasCart
        showCart={showCart}
        onHideCart={handleClosCart}
        placement={"end"}
      />

      <OffCanvasWishlist
        showWishList={showWishList}
        handleClosWishLIst={handleClosWishLIst}
        placement={"end"}
      />
    </>
  );
};

export default HeaderNav;
