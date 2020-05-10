import React, { useReducer } from "react";
import "../App.css";
import CounterList from "./CounterList";
import StockContext from "../contexts/StockContext";
import reducer from "../reducers/count";

function App() {
  const initialState = {
    counters: [
      { id: "A", count: 0, color: "tomato" },
      { id: "B", count: 0, color: "skyblue" },
      { id: "C", count: 0, color: "limegreen" },
      { id: "D", count: 0, color: "gray" },
      { id: "E", count: 0, color: "pink" },
    ],
    total: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StockContext.Provider value={{ state, dispatch }}>
      <div className="container">
        <CounterList />
        <div>
          TOTAL INBENTORY:
          {state.total}
        </div>
      </div>
    </StockContext.Provider>
  );
}

export default App;
