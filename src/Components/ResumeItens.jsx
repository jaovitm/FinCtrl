import React from "react";
import "./ResumeItens.css";

const ResumeItens = ({ title, Icon, amount }) => {
  return (
    <>
      <div className="resume">
        <div className="resumeTitle">
          <h1>{title}</h1>
          <Icon className="icon" />
        </div>
        <div className="amount">
          <h1>{amount}</h1>
        </div>
      </div>
    </>
  );
};

export default ResumeItens;
