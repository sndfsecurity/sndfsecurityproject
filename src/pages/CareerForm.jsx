import React, { useState } from "react";
import "./CareerForm.css";

const CareerForm = () => {

  const [formData, setFormData] = useState({
    name: "",
    father: "",
    dob: "",
    gender: "",
    aadhaar: "",
    mobile: "",
    altMobile: "",
    email: "",
    address: "",
    pin: "",
    exam: "",
    year: "",
    board: "",
    result: "",
    agree: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form Submitted Successfully ✅");
  };

  return (
    <div className="form-bg">
      <form className="form-container" onSubmit={handleSubmit}>

        <h1>NDF SPECIAL RECRUITMENT FORM – 2025/26</h1>

        <label>Post Applied For *</label>
        <select name="post" onChange={handleChange}>
          <option>NDF Detective Guard</option>
        </select>

        <h2>Personal Details</h2>

        <label>Applicant Full Name *</label>
        <input name="name" onChange={handleChange} required />

        <label>Father’s / Husband’s Name *</label>
        <input name="father" onChange={handleChange} required />

        <label>Date of Birth *</label>
        <input type="date" name="dob" onChange={handleChange} required />

        <label>Gender *</label>
        <div className="radio-group">
          <label><input type="radio" name="gender" value="Male" onChange={handleChange}/> Male</label>
          <label><input type="radio" name="gender" value="Female" onChange={handleChange}/> Female</label>
          <label><input type="radio" name="gender" value="Other" onChange={handleChange}/> Other</label>
        </div>

        <label>Aadhaar Number *</label>
        <input name="aadhaar" onChange={handleChange} required />

        <label>Mobile Number *</label>
        <input name="mobile" onChange={handleChange} required />

        <label>Alternate Mobile Number</label>
        <input name="altMobile" onChange={handleChange} />

        <label>Email ID *</label>
        <input type="email" name="email" onChange={handleChange} required />

        <label>Permanent Address *</label>
        <textarea name="address" onChange={handleChange} required />

        <label>Pin Code *</label>
        <input name="pin" onChange={handleChange} required />

        <h2>Last Educational Information</h2>

        <div className="edu-grid">
          <input name="exam" placeholder="Exam Name" onChange={handleChange} />
          <input name="year" placeholder="Year" onChange={handleChange} />
          <input name="board" placeholder="Board / University" onChange={handleChange} />
          <select name="result" onChange={handleChange}>
            <option>Select</option>
            <option>Pass</option>
            <option>Fail</option>
          </select>
        </div>

        <h2>Declaration</h2>
        <p>
          I hereby declare that all the information provided by me is true and correct.
        </p>

        <label className="checkbox">
          <input type="checkbox" name="agree" onChange={handleChange} required />
          I agree *
        </label>

        <button type="submit">Submit Application</button>

      </form>
    </div>
  );
};

export default CareerForm;