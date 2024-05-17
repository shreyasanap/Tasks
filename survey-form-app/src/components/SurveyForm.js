import React, { useState } from 'react';
import './SurveyForm.css';

const SurveyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    feedback: ''
  });
// destructuring
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
  };

  return (
    <div className="survey-form-container">
      <h2>Survey Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />

        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} />

        <label htmlFor="feedback">Feedback:</label>
        <textarea id="feedback" name="feedback" value={formData.feedback} onChange={handleChange}></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SurveyForm;
