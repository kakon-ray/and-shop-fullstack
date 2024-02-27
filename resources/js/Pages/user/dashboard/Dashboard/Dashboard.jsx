
import DashboardSidebar from "../DashboardSidebar/DashboardSidebar";
import "../../dashboard/Dashboard.css";
import HeaderNav from '../../component/Navbar/HeaderNav';
import TopNav from '../../component/Navbar/TopNav';
import Footer from '../../component/Footer/Footer';
import { Button, Card } from "react-bootstrap";

const DashboardPage = () => {
  return (
    <>
      <TopNav />
      <HeaderNav />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 ">
            <div className="dashboard-lg-sidebar">
              <DashboardSidebar />
            </div>
          </div>
          <div className="col-md-9">
            <h1 className="my-3 text-secondary">My Profile</h1>

              <div className="row py-4">
                <div className="col-md-4">
                  <Card.Body>
                    <h5>Full Name</h5>
                    <p>Kakon Ray</p>
                  </Card.Body>
                  <Card.Body>
                    <h5>Birthday</h5>
                    <p>Please enter your birthday</p>
                  </Card.Body>
                </div>
                <div className="col-md-4">
                  <Card.Body>
                    <h5>Email Address </h5>
                    <p>kakonroy043@gmail.com</p>
                  </Card.Body>
                  <Card.Body>
                    <h5>Gender</h5>
                    <p>Please enter your Gender</p>
                  </Card.Body>
                </div>
                <div className="col-md-4">
                  <Card.Body>
                    <h5>Mobile</h5>
                    <p>01707500512</p>
                  </Card.Body>
                  <Card.Body>
                    <h5>Birthday</h5>
                    <p>Please enter your birthday</p>
                  </Card.Body>
                </div>
              </div>

            <Button className="mt-4 btn btn-warning font-weight-bold">
              EDIT PROFILE
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DashboardPage;
