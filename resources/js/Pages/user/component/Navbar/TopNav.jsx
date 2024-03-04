import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeCompare } from "@fortawesome/free-solid-svg-icons";
import { faDashboard } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSign } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from '@inertiajs/react'
import "./TopNav.css";
const TopNav = () => {

  return (
    <>
      <div className="topnav">
        <div className="container-fluid">
          <div
            className={`d-flex justify-content-md-between  align-items-center flex-wrap topNavContent`}
          >
            <div
              className={`align-self-center justify-content-center topnavText`}
            >
              <p className="my-0 text-center ">
                Special collection already available
                <span className="readmore">Read More...</span>
              </p>
            </div>
            <div className="topnav-list">
              <ul className="d-flex flex-wrap align-self-center justify-content-center my-0 ps-0">
                <li>
                  <Link to="/compare">
                    <button
                      className="mx-3 my-2 top-btn"
                      style={{
                        padding: "0",
                        border: "none",
                        background: "none",
                      }}
                    >
                      <FontAwesomeIcon icon={faCodeCompare} className="me-1" />
                      compare
                    </button>
                  </Link>
                </li>
                <li>
                 <Link href="/dashboard">
                 <button
                    className="mx-3 my-2 top-btn"
                    style={{
                      padding: "0",
                      border: "none",
                      background: "none",
                    }}
                  >
                    <FontAwesomeIcon icon={faDashboard} className="me-1" />
                    Dashboard
                  </button>
                 </Link>
                </li>
                <li>
                <Link href="/profile">
                  <button
                    className="mx-3 my-2 "
                    style={{ padding: "0", border: "none", background: "none" }}
                  >
                    <FontAwesomeIcon icon={faUser} className="me-1" />
                    Profile
                  </button>
                  </Link>
                </li>
                <li>
                <Link href="/login">
                  <button
                    className="mx-3 my-2 "
                    style={{ padding: "0", border: "none", background: "none" }}
                  >
                    <FontAwesomeIcon icon={faSign} className="me-1" />
                    Login
                  </button>
                  </Link>
                </li>

                <li>
                <Link href="/register">
                  <button
                    className="mx-3 my-2 "
                    style={{ padding: "0", border: "none", background: "none" }}
                  >
                    <FontAwesomeIcon icon={faLock} className="me-1" />
                    Register
                  </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default TopNav;
