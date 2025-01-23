import { useState } from 'react';
import axios from 'axios';

import '../styles/contact.css';
import { useOutletContext } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });
  const [share, setShare] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { darkTheme } = useOutletContext();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const handleChange = (event) => {
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const isValidEmail = (email) => {
    // A simple email validation regex
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { fullName, email, message } = formData;

    if (fullName.trim().length < 3) {
      setErrorMessage('Name must be at least 3 characters long.');
      return;
    }

    if (!isValidEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (message.trim().length < 10) {
      setErrorMessage('Message must be at least 10 characters long.');
      return;
    }

    // If all validations pass, clear any previous error message
    setErrorMessage('');

    try {
      // Send the form data to the backend using Axios
      await axios.post(`${API_BASE_URL}/contact`, formData);
      // Handle success, e.g., show a success message or redirect the user
      // console.log('Form data sent:', response.data);
      setFormData({
        fullName: '',
        email: '',
        message: '',
      });
      setTimeout(() => {
        setShare(false);
      }, 5000);
      setShare(true);
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error('Error sending form data:', error);
    }
  };

  return (
    <div className='contact-main'>
      <div className='contact'>
        <div
          className={`contact-section ${darkTheme && 'contact-section-dark'}`}
        >
          <h1>Contact Me</h1>
          {errorMessage && <p className='error-message'>{errorMessage}</p>}
          <form className='contact-form'>
            <label htmlFor='full-name' className='name-lbl'>
              Name
            </label>
            <input
              type='text'
              placeholder='Enter your name'
              onChange={handleChange}
              id='full-name'
              name='fullName'
              value={formData.fullName}
              autoComplete='given-name'
              required
              minLength='3'
            ></input>
            <label htmlFor='email' className='email-lbl'>
              Email
            </label>
            <input
              type='email'
              placeholder='Enter your email'
              onChange={handleChange}
              id='email'
              name='email'
              value={formData.email}
              autoComplete='email'
              required
            ></input>
            <label htmlFor='message' className='msg-lbl'>
              Message
            </label>
            <textarea
              type='text'
              placeholder='Enter your message here'
              onChange={handleChange}
              id='message'
              name='message'
              value={formData.message}
              autoComplete='off'
              required
              minLength='10'
            ></textarea>
            <button onClick={handleSubmit} className='btn contact-btn'>
              Send
            </button>
          </form>
          {share && (
            <p className='ct-sent'>
              Your details has been sent please check your mail for further
              updates
            </p>
          )}
          <div className='ct-links'>
            <a
              href='https://www.linkedin.com/in/siddharth-enjam/'
              target='_blank'
              rel='noopener noreferrer'
              className='ct-linkedinic'
            >
              <ion-icon name='logo-linkedin'></ion-icon>
            </a>
            <a
              href='https://github.com/SiddharthReddyEnjam'
              target='_blank'
              rel='noopener noreferrer'
              className='ct-gitic'
            >
              <ion-icon name='logo-github'></ion-icon>
            </a>
            <a
              href='mailto: siddharthenjam@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
              className='ct-mailic'
            >
              <ion-icon name='mail'></ion-icon>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
