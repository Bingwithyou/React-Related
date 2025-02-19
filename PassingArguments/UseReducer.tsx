import { useState, useReducer } from "react";

const CounterWithState = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <h2>Counter with useState</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

const CounterWithReducer = () => {
  // 定义计数器的初始状态和 reducer 函数
  const initialState = { count: 0 };
  // 定义的 reducer
  const reducer = (state: { count: number }, action: { type: string }) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Counter with useReducer</h2>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
};

const UseReducer = () => {
  return (
    <>
      <h1>useState Method</h1>
      <CounterWithState />
      <h1>useReducer Method</h1>
      <CounterWithReducer />
    </>
  );
};

export default UseReducer;
