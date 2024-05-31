import "./FormStyle.css";
import Modal from "./Modal";
import { useState } from "react";
import localStorage from "local-storage";

export default function LoanForm() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [showmodal, setShowModal] = useState(false);
  const [loanInput, setLoanInput] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salaryRange: "",
  });

  function handleFormSubmit(event) {
    event.preventDefault();
    setErrorMessage(null);
    const { age, phoneNumber } = loanInput;
    if (age < 18 || age > 50) {
      setErrorMessage("The age is not allowed");
    } else if (phoneNumber.length < 10 || phoneNumber.length > 12) {
      setErrorMessage("The number Format is Incorrect");
    }
    setShowModal(true);
  }
  const btnIsDisable =
    loanInput.name === "" ||
    loanInput.age === "" ||
    loanInput.phoneNumber === "";
  function handleDivClick() {
    if (showmodal) {
      setShowModal(false);
    }
  }

  return (
    <div
      onClick={handleDivClick}
      className="flex"
      style={{ flexDirection: "column" }}
    >
      <form id="loan-form">
        <h2>Requesting a Loan</h2>
        <hr></hr>
        <label>Name:</label>
        <input
          value={loanInput.name}
          onChange={(event) => {
            setLoanInput({ ...loanInput, name: event.target.value });
            localStorage.set("loanInput", {
              ...loanInput,
              name: event.target.value,
            });
          }}
        />
        <label>Phone Number:</label>
        <input
          value={loanInput.phoneNumber}
          onChange={(event) => {
            setLoanInput({ ...loanInput, phoneNumber: event.target.value });
            localStorage.set("loanInput", {
              ...loanInput,
              phoneNumber: event.target.value,
            });
          }}
        />
        <label>Age:</label>
        <input
          value={loanInput.age}
          onChange={(event) => {
            setLoanInput({ ...loanInput, age: event.target.value });
            localStorage.set("loanInput", {
              ...loanInput,
              age: event.target.value,
            });
          }}
        />
        <label>Are you an Employee!</label>
        <input
          type="checkbox"
          value={loanInput.isEmployee}
          onClick={(event) => {
            setLoanInput({ ...loanInput, isEmployee: event.target.checked });
            localStorage.set("loanInput", {
              ...loanInput,
              isEmployee: event.target.checked,
            });
          }}
        />
        <label>Salray:</label>
        <select
          value={loanInput.salaryRange}
          onChange={(event) => {
            setLoanInput({ ...loanInput, salaryRange: event.target.value });
            localStorage.set("loanInput", {
              ...loanInput,
              salaryRange: event.target.value,
            });
          }}
        >
          <option>Less than 500$</option>
          <option>Equal to 500$</option>
          <option>More than 500$</option>
        </select>
        <button
          className={btnIsDisable ? "disable" : ""}
          onClick={handleFormSubmit}
          disabled={btnIsDisable}
          id="Submit_form_btn"
        >
          Submit
        </button>
      </form>
      <Modal errorMessage={errorMessage} isvisable={showmodal} />
    </div>
  );
}
