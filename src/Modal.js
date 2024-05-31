export default function Modal({ isvisable, errorMessage = null }) {
  if (isvisable) {
    const VisiCheck = isvisable && (
      <div className="modal">
        <div className="modal-component">
          {/* <h1>The Form has been submitted successfully</h1> */}
          <h1 style={{ color: errorMessage ? "red" : "green" }}>
            {errorMessage != null
              ? errorMessage
              : "The Form has been submitted successfully"}
          </h1>
        </div>
      </div>
    );

    return VisiCheck;
  }
}
