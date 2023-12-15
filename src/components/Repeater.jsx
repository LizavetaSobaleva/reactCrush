import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";

function Repeater() {
  const [value, setValue] = useState("text");

  return (
    <div className="repeater">
      <h1>{value}</h1>
      <MyInput
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
}
export default Repeater;