import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import ResumeItens from "./Components/ResumeItens";
import Add from "./Components/AddFin";
import Charts from "./Components/Chart";
import Outgoings from "./Components/Outgoings";
import { v4 as uuidv4 } from "uuid";
import {
  FiArrowUpCircle,
  FiArrowDownCircle,
  FiDollarSign,
} from "react-icons/fi";


let Entry = 1000;
let Out = 500;
let Total = 500;

function App() {
  const [outgoings, setOutgoing] = useState(
    JSON.parse(sessionStorage.getItem("out"))
  );
  const [entrygoing, setEntry] = useState(
    JSON.parse(sessionStorage.getItem("entry"))
  );

  const HandleFinAdd = (name, value, income) => {
    let entrygoing = [];
    let outgoing = [];

    entrygoing = JSON.parse(sessionStorage.getItem("entry"));
    outgoing = JSON.parse(sessionStorage.getItem("out"));

    if (income === "in") {
      const newentry = [
        ...entrygoing,
        {
          id: uuidv4(),
          name: name,
          Value: value,
          income: true,
        },
      ];

      sessionStorage.setItem("entry", JSON.stringify(newentry));
      setEntry(JSON.parse(sessionStorage.getItem("entry")));
    } else {
      const newOut = [
        ...outgoing,
        {
          id: uuidv4(),
          name: name,
          Value: value,
          income: false,
        },
      ];

      sessionStorage.setItem("out", JSON.stringify(newOut));
      setOutgoing(JSON.parse(sessionStorage.getItem("out")));
    }

    const out = JSON.parse(sessionStorage.getItem("out"));
    sumOut(out);
    const entry = JSON.parse(sessionStorage.getItem("entry"));
    sumEntry(entry);
  };

  const HandleFinDelete = (id, name) => {

    const sessionOutgoings = JSON.parse(sessionStorage.getItem("out"));
    const sessioningoings = JSON.parse(sessionStorage.getItem("entry"));

    const newsessionOut = sessionOutgoings.filter(
      (element) => element.id !== id
    );
    const newsessionIn = sessioningoings.filter(
      (element) => element.id !== id
    );

    sessionStorage.clear();
    sessionStorage.setItem("entry", JSON.stringify(newsessionIn));
    sessionStorage.setItem("out", JSON.stringify(newsessionOut));

    setEntry(JSON.parse(sessionStorage.getItem("entry")));
    setOutgoing(JSON.parse(sessionStorage.getItem("out")));

    sumEntry(JSON.parse(sessionStorage.getItem("entry")));
    sumOut(JSON.parse(sessionStorage.getItem("out")));
  };

  const sumEntry = (entry) => {
    if (entry.length === 0) {
      Entry = 0;
    } else {
      const inValues = entry.map((item) => Number(item.Value));
      Entry = inValues.reduce(function (soma, i) {
        return soma + i;
      });
    }

    Total = Entry - Out;
  };

  const sumOut = (out) => {
    if (out.length === 0) {
      Out = 0;
    } else {
      const outValues = out.map((item) => Number(item.Value));
      Out = outValues.reduce(function (soma, i) {
        return soma + i;
      });
    }
    Total = Entry - Out;
  };

  const initialStorage = () => {
    const initialentry = { name: "Salario", Value: 1000, income: true };
    const initialout = { name: "Aluguel", Value: 500, income: false };

    if (sessionStorage.getItem("entry") === null) {
      sessionStorage.setItem("entry", JSON.stringify([initialentry]));
    } else {
      sessionStorage.setItem(
        "entry",
        JSON.stringify([
          ...JSON.parse(sessionStorage.getItem("entry")),
          initialentry,
        ])
      );
    }

    if (sessionStorage.getItem("out") === null) {
      sessionStorage.setItem("out", JSON.stringify([initialout]));
    } else {
      sessionStorage.setItem(
        "out",
        JSON.stringify([
          ...JSON.parse(sessionStorage.getItem("out")),
          initialout,
        ])
      );
    }
  };

  if (
    sessionStorage.getItem("entry") === null &&
    sessionStorage.getItem("out") === null
  ) {
    Window.onload = initialStorage();
  }
  else{
    sumEntry(JSON.parse(sessionStorage.getItem("entry")));
    sumOut(JSON.parse(sessionStorage.getItem("out")));
  }

  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="resumecontainer">
          <ResumeItens
            title={"Entradas"}
            Icon={FiArrowUpCircle}
            amount={`R$ ${Entry}`}
          ></ResumeItens>
          <ResumeItens
            title={"Saídas"}
            Icon={FiArrowDownCircle}
            amount={`R$ ${Out}`}
          ></ResumeItens>
          <ResumeItens
            title={"Total"}
            Icon={FiDollarSign}
            amount={`R$ ${Total}`}
          ></ResumeItens>
        </div>
        <Add
          HandleFinAdd={HandleFinAdd}
        ></Add>
        <div className="view">
          <div className="viewchart">
            <Charts></Charts>
          </div>

          <div className="viewoutgoing">
            <Outgoings
              entrygoing={entrygoing}
              outgoing={outgoings}
              HandleFinDelete={HandleFinDelete}
            ></Outgoings>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
