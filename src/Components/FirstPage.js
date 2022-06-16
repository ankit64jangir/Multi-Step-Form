import React, { useContext } from "react";
import "./style.css";
import { MultiStepContext } from "../StepContext";

function FirstPage() {
  const { setCurrentStep, UserData, setUserData } =
    useContext(MultiStepContext);
  return (
    <form onSubmit={() => setCurrentStep(2)}>
      <div className="container">
        <input
          className="input"
          type="text"
          placeholder="First Name"
          value={UserData["firstname"]}
          onChange={(e) =>
            setUserData({ ...UserData, firstname: e.target.value })
          }
          required
        />
        <input
          className="input"
          type="text"
          placeholder="Last Name"
          value={UserData["lastname"]}
          onChange={(e) =>
            setUserData({ ...UserData, lastname: e.target.value })
          }
          required
        />
        <button className="button nextBtn" type="submit">
          Next
        </button>
      </div>
    </form>
  );
}

export default FirstPage;
