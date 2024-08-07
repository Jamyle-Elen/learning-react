import { useState } from "react";

export const State = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("dark");
  // const [state, setState] = useState({count: 0, theme: "light"})  Não constuma utilizar assim
  const incrementCount = () => {
    setCount((prevState) => prevState + 1);
  };
  // A quantidade de vezes que o hook é chamado nunca pode mudar, sempre tem que ser a mesma
  // Hook não se coloca dentro de função ou if

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};
