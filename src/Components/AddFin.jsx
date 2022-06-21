import React, { useState } from "react";
import "./AddFin.css";

const Add = ({ HandleFinAdd }) => {
  const radio = document.querySelectorAll('input[name="type"]');

  const [Desc, setDesc] = useState("");
  const [Value, setValue] = useState("");

  const handledescChange = (e) => {
    setDesc(e.target.value);
  };

  const handlevalueChange = (e) => {
    setValue(e.target.value);
  };

  const getData = () => {
    const radioarray = Array.from(radio);
    const radiochecked = radioarray.filter((radio) => radio.checked);
    const income = radiochecked[0].value;
    HandleFinAdd(Desc, Value, income);
  };

  return (
    <>
      <div className="AddContainer">
        <label htmlFor="Add-description">Descrição</label>
        <input
          type="text"
          name="description"
          id="Add-description"
          placeholder="Gastos com a Casa"
          onChange={handledescChange}
        />
        <label htmlFor="Add-amount">Valor</label>
        <input
          type="number"
          name="amount"
          id="Add-amount"
          placeholder="1500"
          onChange={handlevalueChange}
        />
        <div className="radio">
          <label htmlFor="typein">Entrada</label>
          <input type="radio" name="type" id="typein" value="in" />
          <label htmlFor="typeout">Saida</label>
          <input type="radio" name="type" id="typeout" value="out" />
        </div>
        <button className="AddButton" onClick={getData}>
          Adicionar
        </button>
      </div>
    </>
  );
};

export default Add;
