import React, { useContext } from "react";
import StockContext from "../contexts/StockContext";
import Counter from "./Counter";

function CounterList() {
  const { state } = useContext(StockContext);

  return (
    <ul>
      {state.counters.map((counter, index) => (
        <Counter key={index} counter={counter} />
      ))}
    </ul>
  );
}

export default CounterList;
