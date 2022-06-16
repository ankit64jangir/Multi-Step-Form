import React, { useState, createContext } from "react";
import App from "./App";

export const MultiStepContext = createContext();
function StepContext() {
  const [CurrentStep, setCurrentStep] = useState(1);
  const [UserData, setUserData] = useState([]);

  return (
    <div>
      <MultiStepContext.Provider
        value={{
          CurrentStep,
          setCurrentStep,
          UserData,
          setUserData,
        }}
      >
        <App />
      </MultiStepContext.Provider>
    </div>
  );
}

export default StepContext;
