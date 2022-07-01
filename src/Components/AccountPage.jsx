import React from "react";
import { FcManager, FcLock } from "react-icons/fc";

import "./AccountPage.css";

const AccountPage = () => {
  const HandleAccountLogin = () => {};
const HandleAccountCreate = () => {};


  return (
    <form>
      <div id="AccountPage-container">
        <FcManager className="img-login" />

        <div className="input-email-field">
          <FcManager className="email-label" />
          <input
            type="email"
            className="input-email"
            placeholder="email@email.com"
          />
        </div>

        <div className="input-password-field">
          <FcLock className="password-label" />
          <input
            type="password"
            className="input-password"
            placeholder="*******"
          />
        </div>
        <div className="form-button">
          <button type="submit" id="login-button" onClick={HandleAccountLogin}>
            Fazer Login
          </button>
          <button type="submit" id="create-button" onClick={HandleAccountCreate}>
            Criar Conta
          </button>
        </div>
      </div>
    </form>
  );
};

export default AccountPage;
