import React, { useContext } from "react";
import { COUNTUP } from "../actions";
import StockContext from "../contexts/StockContext";

function Counter({ counter }) {
  const { dispatch } = useContext(StockContext);
  const id = counter.id;

  const handleClickCountUp = () => {
    dispatch({
      type: COUNTUP,
      id,
    });
  };

  return (
    <li
      style={{ backgroundColor: counter.color }}
      onClick={handleClickCountUp}
    >{`${counter.id}-${counter.count}`}</li>
  );
}

export default Counter;
