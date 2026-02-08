import React, { useState } from "react";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [showData, setShowData] = useState(false);

  // ✅ validation function
  const validate = (n, e) => {
    if (n.length > 0 && n.length <= 2) {
      return "Name must be at least 3 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (e.length > 0 && !emailRegex.test(e)) {
      return "Email is not valid";
    }

    return "";
  };

  // ✅ realtime name validation
  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    setError(validate(value, email));
    setShowData(false);
  };

  // ✅ realtime email validation
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setError(validate(name, value));
    setShowData(false);
  };

  // ✅ submit validation
  function validateform(e) {
    e.preventDefault();

    const err = validate(name, email);
    if (err) {
      setError(err);
      return;
    }

    setError("");
    setShowData(true);
  }

  return (
    <>
      <h2>STUDENT REGISTRATION FORM</h2>

      <form onSubmit={validateform}>
        <span>Name: </span>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={handleNameChange}
        />

        <br />

        <span>Email: </span>
        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={handleEmailChange}
        />

        <br />

        <button type="submit">Submit</button>
      </form>

      {/* ✅ error message */}
      {error && <div style={{ color: "red" }}>{error}</div>}

      {/* ✅ show only after submit */}
      {showData && (
        <div>
          <h3>Submitted Data</h3>
          <div>Name: {name}</div>
          <div>Email: {email}</div>
        </div>
      )}
    </>
  );
};

export default Home;
