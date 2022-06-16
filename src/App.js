import React, { useContext } from "react";
import "./App.css";
import FirstPage from "./Components/FirstPage";
import SecondPage from "./Components/SecondPage";
import ThirdPage from "./Components/ThirdPage";
import FourthPage from "./Components/FourthPage";
import FifthPage from "./Components/FifthPage";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import { MultiStepContext } from "./StepContext";

function App() {
  const { CurrentStep } = useContext(MultiStepContext);
  const steps = [
    "Firstname & Lastname",
    "Contact details",
    "Address",
    "Basic Questions",
    "Final",
  ];
  const ShowStep = (step) => {
    switch (step) {
      case 1:
        return <FirstPage />;
      case 2:
        return <SecondPage />;
      case 3:
        return <ThirdPage />;
      case 4:
        return <FourthPage />;
      case 5:
        return <FifthPage />;
      default:
        break;
    }
  };
  return (
    <div className="App">
      <Stepper
        className="stepper"
        activeStep={CurrentStep - 1}
        alternativeLabel
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <h1 className="heading">Multi Step Form</h1>
      {ShowStep(CurrentStep)}
    </div>
  );
}

export default App;
