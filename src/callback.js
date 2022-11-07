import { memo } from "react";

function Callback({ onIncrease }) {
  console.log("re-render");
  return (
    <>
      <h1>Hello anh em</h1>
      <button onClick={onIncrease}>Click</button>
    </>
  );
}

export default memo(Callback);
