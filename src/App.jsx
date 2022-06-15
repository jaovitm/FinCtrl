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
  const [outgoing, setOutgoing] = useState([
    {
      id: "1",
      name: "Aluguel",
      valor: "1000",
      income: true,
    },
    {
      id: "2",
      name: "Casa",
      valor: "1000",
      valor: "500",
      income: false,
    },
  ]);

  const HandleFinAdd = (name, value, income) => {
    const newOut = [
      ...outgoing,
      {
        id: uuidv4(),
        name: name,
        valor: value,
        income: income == "in" ? true : false,
        income: income == "in" ? true : false,
      },
    ];

    setOutgoing(newOut);
  };

  const HandleFinDelete = (id, name) => {
    const newOutgoings = outgoing.filter((element) => element.id !== id);

    setOutgoing(newOutgoings);

    const sessionOutgoings = JSON.parse(sessionStorage.getItem("out"));
    const sessioningoings = JSON.parse(sessionStorage.getItem("entry"));

    const newsessionOut = sessionOutgoings.filter(
      (element) => element.Desc !== name
    );
    const newsessionIn = sessioningoings.filter(
      (element) => element.Desc !== name
    );

    sessionStorage.clear();
    sessionStorage.setItem("entry", JSON.stringify(newsessionIn));
    sessionStorage.setItem("out", JSON.stringify(newsessionOut));

    sumEntry(JSON.parse(sessionStorage.getItem("entry")));
    sumOut(JSON.parse(sessionStorage.getItem("out")));

  };

  const sumEntry = (entry) => {
    if (entry.length == 0) {
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
    if (out.length == 0) {
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
    const initialentry = { Desc: "Aluguel", Value: 1000 };
    const initialout = { Desc: "Casa", Value: 500 };

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
          sumEntry={sumEntry}
          sumOut={sumOut}
        ></Add>
        <div className="view">
          <div className="viewchart">
            <Charts></Charts>
          </div>

          <div className="viewoutgoing">
            <Outgoings
              outgoing={outgoing}
              HandleFinDelete={HandleFinDelete}
            ></Outgoings>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
