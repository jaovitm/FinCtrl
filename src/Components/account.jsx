import React from "react";
import "./account.css";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

const Account = () => {

  return (
    <div id="account-container">
        <Link to="/Account">
          <AiOutlineUser className="account-img" />
        </Link>
    </div>
  );
};

export default Account;
