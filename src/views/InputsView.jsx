import { useState } from "react";
import { form, container } from "../styles/Inputs.module.css";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

export default function InputsView() {
  const arr = [3, 7, 14, 54, 70];

  const [value1, setValue1] = useState(1000);
  const [value2, setValue2] = useState(3);

  const handleChange = (value1, value2, arr) => {
    if (value1 < 10000) {
      if (value2 > 1 && 14 > value2) {
        setValue2(arr[0]);
      } else if (value2 > 14 && 28 > value2) {
        setValue2(arr[1]);
      } else if (value2 > 28 && 42 > value2) {
        setValue2(arr[2]);
      }
    } else if (value1 > 10000) {
      if (value2 > 42 && 56 > value2) {
        setValue2(arr[3]);
      } else if (value2 > 56 && 70 > value2) {
        setValue2(arr[4]);
      }
    }
  };

  return (
    <form className={form}>
      <InputRange
        step={1000}
        value={value1}
        minValue={1000}
        maxValue={20000}
        onChange={(value) => setValue1(value)}
      />

      <div className={container}>
        <InputRange
          step={1}
          minValue={3}
          maxValue={70}
          value={value2}
          onChange={(value) => handleChange(value1, value, arr)}
        />
      </div>
    </form>
  );
}
