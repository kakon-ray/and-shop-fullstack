import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Inertia } from '@inertiajs/inertia'
import axios from 'axios';
import { Link } from '@inertiajs/react'
import Swal from 'sweetalert2';
import HeaderNav from '../../component/Navbar/HeaderNav';
import TopNav from '../../component/Navbar/TopNav';
import Footer from '../../component/Footer/Footer';
import PageBanner from '../../component/PageBanner/PageBanner';
import useProducts from '../../../Hooks/useProducts';
import ShopCard from '../../component/ShopCard/ShopCard';
import FollowUs from '../../component/FollowUs/FollowUs';
import Form from 'react-bootstrap/Form';
import LatestBlog from '../../component/LatestBlog/LatestBlog';
import { Card, Button } from "react-bootstrap";

const Shop = () => {
    const [shopItem, setShopItem] = useProducts();
    return (
        <>
            <TopNav />
            <HeaderNav />
            <PageBanner page="Our Blog" />
            <div
                className="container-fluid py-3 my-3"
                style={{
                    fontFamily: '"Poppins", sans-serif',
                }}
            >
                <div className="py-2 text-center">
                    <h1>LATEST BLOG</h1>
                    <p className="text-secondary">
                        Mauris luctus nisi sapien tristique dignissim ornare
                    </p>
                </div>
                <div className="row gy-4">
                    <div className="col-md-4">
                        <Card>
                            <div className="img-hover-zoom">
                                <Card.Img
                                    variant="top"
                                    src="https://andshop-react.netlify.app/static/media/post2.81cb9e34.png"
                                />
                            </div>

                            <Card.Body>
                                <h6>24 February 2021</h6>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>Some quick example text</Card.Text>
                                <Button variant="outline-warning">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card>
                            <div className="img-hover-zoom">
                                <Card.Img
                                    variant="top"
                                    src="https://andshop-react.netlify.app/static/media/post3.a01f1b65.png"
                                />
                            </div>

                            <Card.Body>
                                <h6>24 February 2021</h6>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>Some quick example text</Card.Text>
                                <Button variant="outline-warning">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card>
                            <div className="img-hover-zoom">
                                <Card.Img
                                    variant="top"
                                    src="https://andshop-react.netlify.app/static/media/post1.9424ebbc.png"
                                />
                            </div>

                            <Card.Body>
                                <h6>24 February 2021</h6>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>Some quick example text</Card.Text>
                                <Button variant="outline-warning">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card>
                            <div className="img-hover-zoom">
                                <Card.Img
                                    variant="top"
                                    src="https://andshop-react.netlify.app/static/media/post1.9424ebbc.png"
                                />
                            </div>

                            <Card.Body>
                                <h6>24 February 2021</h6>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>Some quick example text</Card.Text>
                                <Button variant="outline-warning">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card>
                            <div className="img-hover-zoom">
                                <Card.Img
                                    variant="top"
                                    src="https://andshop-react.netlify.app/static/media/post1.9424ebbc.png"
                                />
                            </div>

                            <Card.Body>
                                <h6>24 February 2021</h6>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>Some quick example text</Card.Text>
                                <Button variant="outline-warning">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card>
                            <div className="img-hover-zoom">
                                <Card.Img
                                    variant="top"
                                    src="https://andshop-react.netlify.app/static/media/post1.9424ebbc.png"
                                />
                            </div>

                            <Card.Body>
                                <h6>24 February 2021</h6>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>Some quick example text</Card.Text>
                                <Button variant="outline-warning">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card>
                            <div className="img-hover-zoom">
                                <Card.Img
                                    variant="top"
                                    src="https://andshop-react.netlify.app/static/media/post1.9424ebbc.png"
                                />
                            </div>

                            <Card.Body>
                                <h6>24 February 2021</h6>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>Some quick example text</Card.Text>
                                <Button variant="outline-warning">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card>
                            <div className="img-hover-zoom">
                                <Card.Img
                                    variant="top"
                                    src="https://andshop-react.netlify.app/static/media/post1.9424ebbc.png"
                                />
                            </div>

                            <Card.Body>
                                <h6>24 February 2021</h6>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>Some quick example text</Card.Text>
                                <Button variant="outline-warning">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card>
                            <div className="img-hover-zoom">
                                <Card.Img
                                    variant="top"
                                    src="https://andshop-react.netlify.app/static/media/post1.9424ebbc.png"
                                />
                            </div>

                            <Card.Body>
                                <h6>24 February 2021</h6>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>Some quick example text</Card.Text>
                                <Button variant="outline-warning">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card>
                            <div className="img-hover-zoom">
                                <Card.Img
                                    variant="top"
                                    src="https://andshop-react.netlify.app/static/media/post1.9424ebbc.png"
                                />
                            </div>

                            <Card.Body>
                                <h6>24 February 2021</h6>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>Some quick example text</Card.Text>
                                <Button variant="outline-warning">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card>
                            <div className="img-hover-zoom">
                                <Card.Img
                                    variant="top"
                                    src="https://andshop-react.netlify.app/static/media/post1.9424ebbc.png"
                                />
                            </div>

                            <Card.Body>
                                <h6>24 February 2021</h6>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>Some quick example text</Card.Text>
                                <Button variant="outline-warning">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card>
                            <div className="img-hover-zoom">
                                <Card.Img
                                    variant="top"
                                    src="https://andshop-react.netlify.app/static/media/post1.9424ebbc.png"
                                />
                            </div>

                            <Card.Body>
                                <h6>24 February 2021</h6>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>Some quick example text</Card.Text>
                                <Button variant="outline-warning">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card>
                            <div className="img-hover-zoom">
                                <Card.Img
                                    variant="top"
                                    src="https://andshop-react.netlify.app/static/media/post1.9424ebbc.png"
                                />
                            </div>

                            <Card.Body>
                                <h6>24 February 2021</h6>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>Some quick example text</Card.Text>
                                <Button variant="outline-warning">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card>
                            <div className="img-hover-zoom">
                                <Card.Img
                                    variant="top"
                                    src="https://andshop-react.netlify.app/static/media/post1.9424ebbc.png"
                                />
                            </div>

                            <Card.Body>
                                <h6>24 February 2021</h6>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>Some quick example text</Card.Text>
                                <Button variant="outline-warning">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card>
                            <div className="img-hover-zoom">
                                <Card.Img
                                    variant="top"
                                    src="https://andshop-react.netlify.app/static/media/post1.9424ebbc.png"
                                />
                            </div>

                            <Card.Body>
                                <h6>24 February 2021</h6>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>Some quick example text</Card.Text>
                                <Button variant="outline-warning">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card>
                            <div className="img-hover-zoom">
                                <Card.Img
                                    variant="top"
                                    src="https://andshop-react.netlify.app/static/media/post1.9424ebbc.png"
                                />
                            </div>

                            <Card.Body>
                                <h6>24 February 2021</h6>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>Some quick example text</Card.Text>
                                <Button variant="outline-warning">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card>
                            <div className="img-hover-zoom">
                                <Card.Img
                                    variant="top"
                                    src="https://andshop-react.netlify.app/static/media/post1.9424ebbc.png"
                                />
                            </div>

                            <Card.Body>
                                <h6>24 February 2021</h6>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>Some quick example text</Card.Text>
                                <Button variant="outline-warning">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card>
                            <div className="img-hover-zoom">
                                <Card.Img
                                    variant="top"
                                    src="https://andshop-react.netlify.app/static/media/post1.9424ebbc.png"
                                />
                            </div>

                            <Card.Body>
                                <h6>24 February 2021</h6>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>Some quick example text</Card.Text>
                                <Button variant="outline-warning">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card>
                            <div className="img-hover-zoom">
                                <Card.Img
                                    variant="top"
                                    src="https://andshop-react.netlify.app/static/media/post1.9424ebbc.png"
                                />
                            </div>

                            <Card.Body>
                                <h6>24 February 2021</h6>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>Some quick example text</Card.Text>
                                <Button variant="outline-warning">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card>
                            <div className="img-hover-zoom">
                                <Card.Img
                                    variant="top"
                                    src="https://andshop-react.netlify.app/static/media/post1.9424ebbc.png"
                                />
                            </div>

                            <Card.Body>
                                <h6>24 February 2021</h6>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>Some quick example text</Card.Text>
                                <Button variant="outline-warning">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card>
                            <div className="img-hover-zoom">
                                <Card.Img
                                    variant="top"
                                    src="https://andshop-react.netlify.app/static/media/post1.9424ebbc.png"
                                />
                            </div>

                            <Card.Body>
                                <h6>24 February 2021</h6>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>Some quick example text</Card.Text>
                                <Button variant="outline-warning">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card>
                            <div className="img-hover-zoom">
                                <Card.Img
                                    variant="top"
                                    src="https://andshop-react.netlify.app/static/media/post1.9424ebbc.png"
                                />
                            </div>

                            <Card.Body>
                                <h6>24 February 2021</h6>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>Some quick example text</Card.Text>
                                <Button variant="outline-warning">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card>
                            <div className="img-hover-zoom">
                                <Card.Img
                                    variant="top"
                                    src="https://andshop-react.netlify.app/static/media/post1.9424ebbc.png"
                                />
                            </div>

                            <Card.Body>
                                <h6>24 February 2021</h6>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>Some quick example text</Card.Text>
                                <Button variant="outline-warning">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card>
                            <div className="img-hover-zoom">
                                <Card.Img
                                    variant="top"
                                    src="https://andshop-react.netlify.app/static/media/post1.9424ebbc.png"
                                />
                            </div>

                            <Card.Body>
                                <h6>24 February 2021</h6>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>Some quick example text</Card.Text>
                                <Button variant="outline-warning">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    
                </div>
            </div>
            <FollowUs />
            <Footer />
        </>
    );
}


export default Shop;