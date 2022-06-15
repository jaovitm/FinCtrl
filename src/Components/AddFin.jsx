import React, { useState } from "react";
import "./AddFin.css";

const Add = ({ HandleFinAdd, sumEntry, sumOut }) => {
  const radio = document.querySelectorAll('input[name="type"]');

  const [Desc, setDesc] = useState("");
  const [Value, setValue] = useState("");

  const handledescChange = (e) => {
    setDesc(e.target.value);
  };

  const handlevalueChange = (e) => {
    setValue(e.target.value);
  };

  const checkname = (name) => {
    const namein = Array.from(JSON.parse(sessionStorage.getItem("entry")));
    const nameout = Array.from(JSON.parse(sessionStorage.getItem("out")));

    const nameisin = namein.filter((item) => item.Desc == name);
    const nameisout = nameout.filter((item) => item.Desc == name);

    console.log(nameisin, nameisout);

    if (nameisin.length == 0 && nameisout.length == 0) {
      return false;
    } else {
      return true;
    }
  };

  const getData = () => {
    if (checkname(Desc)) {
      alert("Por favor escolha outro nome, este já existe!");
    } else {
      const radioarray = Array.from(radio);
      const radiochecked = radioarray.filter((radio) => radio.checked);
      const income = radiochecked[0].value;
      HandleFinAdd(Desc, Value, income);

      if (income == "in") {
        const datain = { Desc, Value };
        if (sessionStorage.getItem("entry") === null) {
          sessionStorage.setItem("entry", JSON.stringify([datain]));
        } else {
          sessionStorage.setItem(
            "entry",
            JSON.stringify([
              ...JSON.parse(sessionStorage.getItem("entry")),
              datain,
            ])
          );
        }

        const entry = JSON.parse(sessionStorage.getItem("entry"));
        sumEntry(entry);
      } else {
        const dataout = { Desc, Value };
        if (sessionStorage.getItem("out") === null) {
          sessionStorage.setItem("out", JSON.stringify([dataout]));
        } else {
          sessionStorage.setItem(
            "out",
            JSON.stringify([
              ...JSON.parse(sessionStorage.getItem("out")),
              dataout,
            ])
          );
        }

        const out = JSON.parse(sessionStorage.getItem("out"));
        sumOut(out);
      }
    }
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
        <label htmlFor="typein">Entrada</label>
        <input type="radio" name="type" id="typein" value="in" />
        <label htmlFor="typeout">Saida</label>
        <input type="radio" name="type" id="typeout" value="out" />
        <button className="AddButton" onClick={getData}>
          Adicionar
        </button>
      </div>
    </>
  );
};

export default Add;
