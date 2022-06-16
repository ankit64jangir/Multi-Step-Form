import React, { useContext } from "react";
import { MultiStepContext } from "../StepContext";

function FourthPage() {
    const { setCurrentStep, UserData, setUserData } =
    useContext(MultiStepContext);
  return (
    <form onSubmit={() => setCurrentStep(5)}>
    <div className="container">
      <input
        className="input"
        type="text"
        value={UserData["position"]}
        onChange={(e) => setUserData({ ...UserData, position: e.target.value })}
        placeholder="Position"
        required
      />
      <input
        className="input"
        type="text"
        value={UserData["currentCTC"]}
        onChange={(e) => setUserData({ ...UserData, currentCTC: e.target.value })}
        placeholder="Current CTC"
        required
      />
      <input
        className="input"
        type="text"
        value={UserData["expectedCTC"]}
        onChange={(e) => setUserData({ ...UserData, expectedCTC: e.target.value })}
        placeholder="Expected CTC"
        required
      />
      <input
        className="input"
        type="ratio"
        value={UserData["realocate"]}
        onChange={(e) => setUserData({ ...UserData, realocate: e.target.value })}
        placeholder="Are you able to realocate?"
        required
      />
      <div className="btnSet">
        <button
          className="button prevBtn"
          onClick={() => setCurrentStep(3)}
          type="submit"
        >
          Back
        </button>
        <button className="button nextBtn" type="submit">
          Show Data
        </button>
      </div>
    </div>
    </form>
  );
}

export default FourthPage