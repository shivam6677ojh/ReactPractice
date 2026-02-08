import React, { use, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setName, setEmail, clearForm } from "../Features/form/formSlice.js";

function Form() {
  const { name, email } = useSelector(state => state.form);

  const [showdata, setShowdata] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Name: ${name}, Email: ${email}`);

    dispatch(clearForm());
    setShowdata(true);
  };

  return (
    <div style={{ border: "1px solid black", padding: "20px", margin: "10px" }}>
      <h2>Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={name}
          onChange={e => dispatch(setName(e.target.value))}
        />
        <br /><br />

        <input
          placeholder="Email"
          value={email}
          onChange={e => dispatch(setEmail(e.target.value))}
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>
      {showdata ? (
        <div>
          <h3>Submitted Data:</h3>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
        </div>
      ) : null}

    </div>
  );
}

export default Form;
