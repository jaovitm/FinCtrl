import React from "react";
import Outgoing from "./Outgoing";

const Outgoings = ({ outgoing, HandleFinDelete, entrygoing }) => {
  return (
    <>
      {entrygoing.map((entrygoing) => (
        <Outgoing
          key={entrygoing.id}
          outgoing={entrygoing}
          HandleFinDelete={HandleFinDelete}
        />
      ))}
      {outgoing.map((outgoing) => (
        <Outgoing
          key={outgoing.id}
          outgoing={outgoing}
          HandleFinDelete={HandleFinDelete}
        />
      ))}
    </>
  );
};

export default Outgoings;
