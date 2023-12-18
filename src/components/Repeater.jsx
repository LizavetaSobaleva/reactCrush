import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyBlock from "./UI/block/MyBlock";

function Repeater() {
  const [value, setValue] = useState("text");

  return (
    <MyBlock>
      <h1>{value}</h1>
      <MyInput
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </MyBlock>
  );
}
export default Repeater;