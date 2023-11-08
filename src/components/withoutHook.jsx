import React, { useState } from "react";

function WithoutHooks() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const { name, lastName, email, password, gender } = formData;
    const newErrors = {};

    if (name.trim() === "") {
      newErrors.name = "Name is required";
    }

    if (lastName.trim() === "") {
      newErrors.lastName = "Last name is required";
    }

    if (email.trim() === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid Email";
    }

    if (
      password.trim() === "" ||
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(
        password
      )
    ) {
      newErrors.password = "Password does not meet criteria";
    }

    if (gender === "") {
      newErrors.gender = "Please select a gender";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      console.log("Form submitted with data:", formData);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <div>
      <h1>WithoutHooks Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange}/>
          {submitted && errors.name && (
            <span className="error">{errors.name}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} />
          {submitted && errors.lastName && (
            <span className="error">{errors.lastName}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange}/>
          {submitted && errors.email && (
            <span className="error">{errors.email}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} />
          {submitted && errors.password && (
            <span className="error">{errors.password}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender" value={formData.gender} onChange={handleInputChange}>
            <option value="" disabled> Gender:</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {submitted && errors.gender && (
            <span className="error">{errors.gender}</span>
          )}
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default WithoutHooks;