import React, { useState } from "react";
import Line from "./Line";
import Circle from "./Circle";
import Button from "./Button";
import Content from "./Content";
const Stepper = ({ totalSteps }) => {
  let [stepCount, setStepCount] = useState(1);
  let steps=[1,2,3,4];

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
      {steps.map((step, index) => (
          <React.Fragment key={step}>
            {/* Circle */}
            <Circle title={step} number={step} presentStep={stepCount} />

            {/* Line */}
            {index < steps.length - 1 && (
              <Line number={step} presentStep={stepCount} />
            )}
          </React.Fragment>
        ))}
      </div>
      <Content presentStep={stepCount} />
      <div className="flex justify-around">
        <Button
          title={"Prev"}
          handleClick={goToPrev}
          disabled={stepCount === 1} 
        />
        <Button
          title={"Next"}
          handleClick={goToNext}
          disabled={stepCount === totalSteps} 
        />
      </div>
    </div>
  );
};

export default Stepper;
