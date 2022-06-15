import React from "react";
import Outgoing from "./Outgoing";

const Outgoings = ({ outgoing, HandleFinDelete }) => {
  return (
    <>
      {outgoing.map((outgoing) => (
        <Outgoing outgoing={outgoing} HandleFinDelete={HandleFinDelete} />
      ))}
    </>
  );
};

export default Outgoings;
