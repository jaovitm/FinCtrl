import React from "react";
import "./Header.css";
import Account from "./account";

const Header = () => {
  return (
    <>
      <Account/>
      <div className="headerContainer">
        <h1>FinCtrl</h1>
        <p>O seu Controle de Finanças!</p>
      </div>
    </>
  );
};

export default Header;
