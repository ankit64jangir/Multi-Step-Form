import React, { useContext } from "react";
import { MultiStepContext } from "../StepContext";

function ThirdPage() {
  const { setCurrentStep, UserData, setUserData } =
    useContext(MultiStepContext);
  return (
    <form onSubmit={() => setCurrentStep(4)}>
      <div className="container">
        <input
          className="input"
          type="text"
          value={UserData["address"]}
          onChange={(e) =>
            setUserData({ ...UserData, address: e.target.value })
          }
          placeholder="Address"
          required
        />
        <input
          className="input"
          type="text"
          value={UserData["city"]}
          onChange={(e) => setUserData({ ...UserData, city: e.target.value })}
          placeholder="City"
          required
        />
        <input
          className="input"
          type="text"
          value={UserData["state"]}
          onChange={(e) => setUserData({ ...UserData, state: e.target.value })}
          placeholder="State"
          required
        />
        <input
          className="input"
          type="text"
          value={UserData["country"]}
          onChange={(e) =>
            setUserData({ ...UserData, country: e.target.value })
          }
          placeholder="Country"
          required
        />
        <div className="btnSet">
          <button
            className="button prevBtn"
            onClick={() => setCurrentStep(2)}
            type="submit"
          >
            Back
          </button>
          <button
            className="button nextBtn"
            type="submit"
          >
            Next
          </button>
        </div>
      </div>
    </form>
  );
}

export default ThirdPage;
