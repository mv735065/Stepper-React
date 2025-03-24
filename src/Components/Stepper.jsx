import React, { useState } from "react";
import Line from "./Line";
import Circle from "./Circle";
import Button from "./Button";
import Content from "./Content";
const Stepper = ({ totalSteps }) => {
  let [stepCount, setStepCount] = useState(1);

  function goToPrev() {
    let presentStep = stepCount;
    presentStep = Math.max(1, presentStep - 1);
    setStepCount(presentStep);
  }

  function goToNext() {
    let presentStep = stepCount;
    presentStep = Math.min(totalSteps, presentStep + 1);
    setStepCount(presentStep);
  }

  return (
    <div className="w-[80vw] my-0 mx-auto mt-10">
      <div className="flex flex-row w-full    justify-between items-baseline py-2">
        <Circle title={1}  presentStep={stepCount} />
        <Line number={1} presentStep={stepCount} />
        <Circle title={2}  presentStep={stepCount} />
        <Line number={2} presentStep={stepCount} />
        <Circle title={3} presentStep={stepCount} />
        <Line number={3} presentStep={stepCount} />
        <Circle title={4}  presentStep={stepCount} />
      </div>
      <Content presentStep={stepCount} />
      <div className="flex justify-around">
        <Button title={"Prev"} handleClick={() => goToPrev()} />
        <Button title={"Next"} handleClick={() => goToNext()} />
      </div>
    </div>
  );
};

export default Stepper;
