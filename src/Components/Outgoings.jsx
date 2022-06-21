import React from "react";
import Outgoing from "./Outgoing";

const Outgoings = ({ outgoing, HandleFinDelete, entrygoing }) => {
  return (
    <>
        {entrygoing.map((entrygoing) => (
          <Outgoing outgoing={entrygoing} HandleFinDelete={HandleFinDelete} />
        ))}
      {outgoing.map((outgoing) => (
        <Outgoing outgoing={outgoing} HandleFinDelete={HandleFinDelete} />
      ))}
    </>
  );
};

export default Outgoings;
