import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";


const FollowUsCard = () => {
  return (
    <div className="col-md-3 mx-0 px-0">
      <div className="img-container">
        <img
          src="https://ninetheme.com/themes/anarkali/wp-content/uploads/2023/09/product2-19-450x600.jpg"
          alt="Avatar"
          className="image"
          style={{ width: "100%" }}
        />
        <div className="middle social-shere-icon">
          {" "}
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </div>
      </div>
    </div>
  );
};

export default FollowUsCard;
