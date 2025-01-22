import React, { useState } from "react";

function App() {
  // State for form fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  // Form submission handler
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);

    // Basic validation
    if (!formData.firstName || formData.firstName.length < 2) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        firstName: "First name must have at least 2 characters",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        firstName: "",
      }));
    }

    if (!formData.lastName || formData.lastName.length < 2) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        lastName: "Last name must have at least 2 characters",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        lastName: "",
      }));
    }

    if (!formData.email || !formData.email.includes("@")) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter a valid email address",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "",
      }));
    }

    if (
      formData.firstName.length >= 2 &&
      formData.lastName.length >= 2 &&
      formData.email.includes("@")
    ) {
      alert("Form submitted successfully!");
    }
  };

  // Single input change handler
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="App">
      <h1>React Form Example</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>
            First Name:{" "}
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </label>
          {errors.firstName && <p className="error">{errors.firstName}</p>}
        </div>
        <div>
          <label>
            Last Name:{" "}
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </label>
          {errors.lastName && <p className="error">{errors.lastName}</p>}
        </div>
        <div>
          <label>
            Email:{" "}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>

      <h2>Live Preview</h2>
      <p>First Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
      <p>Email: {formData.email}</p>
    </div>
  );
}

export default App;
