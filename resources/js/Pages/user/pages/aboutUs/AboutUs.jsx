import React from 'react';
import './AboutUs.css'
import about from "../../../../../../public/common/img-about.jpg"
import TopNav from '../../component/Navbar/TopNav';
import HeaderNav from '../../component/Navbar/HeaderNav';
import FollowUs from '../../component/FollowUs/FollowUs';
import Footer from '../../component/Footer/Footer';
import PageBanner from '../../component/PageBanner/PageBanner';
const AboutUs = () => {
    return <>

        <TopNav />
        <HeaderNav />
        <PageBanner page="About Us" />
        <section id="about-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="about_top_img">
                            <img src={about} alt="img" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="about_top_left_content">
                            <h2>ABOUT OUR Andshop STORE</h2>
                            <h4>We believe that every project existing in digital world is a result of an idea and every
                                idea has a cause.</h4>
                            <p>For this reason, our each design serves an idea. Our strength in design is reflected by our
                                name, our care for details.
                                Our specialist won't be afraid to go extra miles just to approach near perfection. We don't
                                require everything to be perfect,
                                but we need them to be perfectly cared for. </p>
                            <p>That's a reason why we are willing to give contributions at best.Not a single detail is
                                missed out under Billey's
                                professional eyes. The amount of dedication and effort equals to the level of passion and
                                determination.
                                Get better, together as one. Proin eget tortor risus. Praesent sapien massa, convallis a
                                pellentesque nec,
                                egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et,
                                porttitor at sem. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <FollowUs />
        <Footer/>


    </>;
}

export default AboutUs;