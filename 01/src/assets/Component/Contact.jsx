import React from 'react'
import { useState } from 'react';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
      message: '',
    };

    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email address';
      valid = false;
    }

    if (formData.message.trim() === '') {
      newErrors.message = 'Message is required';
      valid = false;
    }

    if (valid) {
      // Perform form submission or other actions here
      console.log('Form submitted:', formData);
    } else {
      setFormErrors(newErrors);
    }
  };

  const isValidEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="contact-form-container">
      <h2 className='contact-heading'>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <p className="error-message">{formErrors.name}</p>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <p className="error-message">{formErrors.email}</p>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
          <p className="error-message">{formErrors.message}</p>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact
