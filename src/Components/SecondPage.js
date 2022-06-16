import React, { useContext } from "react";
import { MultiStepContext } from "../StepContext";

function SecondPage() {
  const { setCurrentStep, UserData, setUserData } =
    useContext(MultiStepContext);
  return (
    <form onSubmit={() => setCurrentStep(3)}>
      <div className="container">
        <input
          className="input"
          type="email"
          placeholder="Email"
          value={UserData["email"]}
          onChange={(e) => setUserData({ ...UserData, email: e.target.value })}
          required
        />
        <input
          className="input"
          type="text"
          placeholder="Mobile Number"
          value={UserData["mobileNumber"]}
          maxLength="10"
          onChange={(e) =>
            setUserData({ ...UserData, mobileNumber: e.target.value })
          }
          required
        />
        <div className="btnSet">
          <button
            className="button prevBtn"
            onClick={() => setCurrentStep(1)}
            type="submit"
          >
            Back
          </button>
          <button className="button nextBtn" type="submit">
            Next
          </button>
        </div>
      </div>
    </form>
  );
}

export default SecondPage;
