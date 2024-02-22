import React from "react";
import BannerImage from '../../../../../../public/common/common_bg.png'
export default function PageBanner({ page }) {
  const myStyle = {
    backgroundImage:
      `url(${BannerImage})`,
    height: "40vh",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    marginTop: ".2%",
  };

  return (
    <div
      style={myStyle}
      className="position-relative mb-5 d-flex justify-content-center align-items-center"
    >
      <h1 style={{ color: "#fff" }}>{page}</h1>
      <div className="position-absolute page text-light pageStyle"> </div>
    </div>
  );
}
