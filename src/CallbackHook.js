import { useCallback, useState } from "react";
import Callback from "./callback";

function Abc() {
  const [count, setCount] = useState(60);

  const handleIncrease = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, []);
  return (
    <div>
      <Callback onIncrease={handleIncrease} />
      <h1>{count}</h1>
    </div>
  );
}

export default Abc;
