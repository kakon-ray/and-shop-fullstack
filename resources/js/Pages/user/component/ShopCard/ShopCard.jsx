/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeCompare } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from '@inertiajs/react'
import "./ShopCard.css";

const ShopCard = ({ position, title, price, img, img1, item }) => {

  return (
    <div className="col-md-3" id="shop-card">
      <Card className="card-container">
        <div className="img-container thum">
          <img src={img} className="img-fluid" />

          <img src={img1} className="upper-image img-fluid" />
        </div>

        <Card.Body className="text-center">
          <Card.Text>{title}</Card.Text>
          <h5>{price}</h5>
        </Card.Body>
        <span className="badge-container p-0">
          <span className="badge">{position}</span>
        </span>

        <div className="overly-container">
          <button
            className="btn btn-light overly-content-btn"
          >
            Add to Cart
          </button>
          <div className="overly-content-icon d-flex flex-column gap-4">
            {["top"].map((placement) => (
              <OverlayTrigger
                key={placement}
                overlay={
                  <Tooltip id={`tooltip-${placement}`}>Wish List</Tooltip>
                }
              >
                <button className=" icon-btn">
                  <FontAwesomeIcon icon={faHeart} className="badge" size="lg" />
                </button>
              </OverlayTrigger>
            ))}

            {["top"].map((placement) => (
              <OverlayTrigger
                key={placement}
                overlay={
                  <Tooltip id={`tooltip-${placement}`}>Quick View</Tooltip>
                }
              >
                <Link to={`${item.id}`}>
                  <button className=" icon-btn">
                    <FontAwesomeIcon icon={faEye} className="badge" size="lg" />
                  </button>
                </Link>
              </OverlayTrigger>
            ))}

            {["top"].map((placement) => (
              <OverlayTrigger
                key={placement}
                overlay={<Tooltip id={`tooltip-${placement}`}>Compare</Tooltip>}
              >
                <button className=" icon-btn">
                  <FontAwesomeIcon
                    icon={faCodeCompare}
                    className="badge"
                    size="lg"
                  />
                </button>
              </OverlayTrigger>
            ))}

          </div>
        </div>
      </Card>
    </div>
  );
};

export default ShopCard;
