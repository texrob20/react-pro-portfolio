import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            // isValid conditional statement
           if (!isValid) {
             setErrorMessage('Your email is invalid.');
           } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
              } else {
                setErrorMessage('');
              }
        }}
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
          }  
      }

    function handleSubmit(e) {
        e.preventDefault();
      }

    return (
      <section id="contact-me" class="row d-flex justify-content-center" >
          <div class="block-header"><h2>Contact Form</h2></div>
          <form class="col-md-6" id="contact-form" onSubmit={handleSubmit}>
          <div class="mb-3">
            <label htmlFor="name" class="form-label text-white">Name:</label>
            <input type="text" class="form-control" defaultValue={name} onBlur={handleChange} name="name" />
          </div>
          <div class="mb-3">
            <label htmlFor="email" class="form-label text-white">Email address:</label>
            <input type="email" class="form-control" defaultValue={email} onBlur={handleChange} name="email" />
          </div>
          <div class="mb-3">
            <label htmlFor="message" class="form-label text-white">Message:</label>
            <textarea name="message" class="form-control" defaultValue={message} onBlur={handleChange} rows="5"  />
          </div>
          {errorMessage && (
          <div class="form-label text-white">
            <p className="error-text">{errorMessage}</p>
          </div>
          )}
          <button type="submit">Submit</button>
          </form>
        </section>
    )
};

export default Contact;