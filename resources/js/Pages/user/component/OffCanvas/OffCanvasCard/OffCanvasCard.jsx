import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from '@inertiajs/react'
import "./OffCanvasCard.css";

const OffCanvasCard = ({ item, removeItem }) => {
  return (
    <div
      className="d-flex gap-3 my-2 align-items-center justify-content-between"
      key={item.id}
    >
      <div className="d-flex gap-3 my-2">
        <div>
          <img
            src={item.img}
            alt=""
            className="img-fluid"
            style={{ width: "50px", height: "50px", border: "none" }}
          />
        </div>
        <Link
          to={`${item.id}`}
          style={{ textDecoration: "none", color: "gray" }}
          className="linkstyle"
        >
          <div>
            <h6>{item.name}</h6>
            <p>Price: {item.price}</p>
          </div>
        </Link>
      </div>
      {/* <Button variant="" className="navbar-icon pb-0 "></Button> */}
      <FontAwesomeIcon
        icon={faTrash}
        size="lg"
        onClick={() => removeItem(item.id)}
      />
    </div>
  );
};

export default OffCanvasCard;
