import React, { useContext } from "react";
import { MultiStepContext } from "../StepContext";

function FifthPage() {
  const { UserData } = useContext(MultiStepContext);
  return (
    <div className="container">
      <h3>Form Data</h3>
      <ol>
        <li>
          First Name :{" "}
          <span
            style={{ color: "#00aa48", fontSize: "20px", fontWeight: "500" }}
          >
            {UserData.firstname}
          </span>
        </li>
        <li>
          Last Name :{" "}
          <span
            style={{ color: "#00aa48", fontSize: "20px", fontWeight: "500" }}
          >
            {UserData.lastname}
          </span>
        </li>
        <li>
          Email :{" "}
          <span
            style={{ color: "#00aa48", fontSize: "20px", fontWeight: "500" }}
          >
            {UserData.email}
          </span>
        </li>
        <li>
          Mobile :{" "}
          <span
            style={{ color: "#00aa48", fontSize: "20px", fontWeight: "500" }}
          >
            {UserData.mobileNumber}
          </span>
        </li>
        <li>
          Address :{" "}
          <span
            style={{ color: "#00aa48", fontSize: "20px", fontWeight: "500" }}
          >
            {UserData.address}
          </span>
        </li>
        <li>
          City :{" "}
          <span
            style={{ color: "#00aa48", fontSize: "20px", fontWeight: "500" }}
          >
            {UserData.city}
          </span>
        </li>
        <li>
          State :{" "}
          <span
            style={{ color: "#00aa48", fontSize: "20px", fontWeight: "500" }}
          >
            {UserData.state}
          </span>
        </li>
        <li>
          Country :{" "}
          <span
            style={{ color: "#00aa48", fontSize: "20px", fontWeight: "500" }}
          >
            {UserData.country}
          </span>
        </li>
        <li>
          Applying for which position? :{" "}
          <span
            style={{ color: "#00aa48", fontSize: "20px", fontWeight: "500" }}
          >
            {UserData.position}
          </span>
        </li>
        <li>
          Current CTC :{" "}
          <span
            style={{ color: "#00aa48", fontSize: "20px", fontWeight: "500" }}
          >
            {UserData.currentCTC}
          </span>
        </li>
        <li>
          Expected CTC :{" "}
          <span
            style={{ color: "#00aa48", fontSize: "20px", fontWeight: "500" }}
          >
            {UserData.expectedCTC}
          </span>
        </li>
        <li>
          Are you able to realocate? :{" "}
          <span
            style={{ color: "#00aa48", fontSize: "20px", fontWeight: "500" }}
          >
            {UserData.realocate}
          </span>
        </li>
      </ol>
    </div>
  );
}

export default FifthPage;
