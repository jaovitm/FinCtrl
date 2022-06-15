import React from "react";
import "./Outgoing.css";
import { FiArrowUpCircle, FiArrowDownCircle } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";

const Outgoing = ({ outgoing, HandleFinDelete }) => {
  return (
    <div className="outgoing-container">
      <h1 className="outgoing-title">{outgoing.name}</h1>
      <p className="outgoing-p">{outgoing.valor}</p>
      <span className="outgoing-span">
        {outgoing.income ? (
          <FiArrowUpCircle className="outgoing-income" />
        ) : (
          <FiArrowDownCircle className="outgoing-outcome" />
        )}
      </span>
      <BsTrash
        className="trash"
        onClick={() => HandleFinDelete(outgoing.id, outgoing.name)}
      ></BsTrash>
    </div>
  );
};

export default Outgoing;
