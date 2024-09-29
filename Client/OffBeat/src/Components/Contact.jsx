import { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import address from '../assets/address.png';
import cont from '../assets/contact.png';
import support from '../assets/support.png';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      to_name: 'Isha', // Replace with actual recipient's name
      from_name: `${formData.firstName} ${formData.lastName}`,
      message: formData.message,
      email: formData.email,
      phone: formData.phone,
    };

    emailjs.send('service_0dx8wkk', 'template_0hp10xl', templateParams, 'XiGn7ivb2XlL3H3Mi')
      .then((result) => {
        console.log(result.text);
        alert('Thanks for your message!');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        });
      }, (error) => {
        console.log(error.text);
        alert('Failed to send the message, please try again.');
      });
  };

  return (
    <div className="contact-form">
      <div className="first-container">
        <div className="info-container">
          <div>
            <img className="icon" src={address} alt="Address icon" />
            <h3>Address</h3>
            <p>137/B, VMV Road, Amravati, 444604</p>
          </div>
          <div>
            <img className="icon" src={cont} alt="Lets Talk icon" />
            <h3>Lets Talk</h3>
            <p>+91 80109 92527</p>
          </div>
          <div>
            <img className="icon" src={support} alt="General Support icon" />
            <h3>General Support</h3>
            <p>offbeat@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="second-container">
        <h2>Send Us A Message</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName-input">Tell us your name*</label>
            <input
              id="firstName-input"
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              id="lastName-input"
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email-input">Enter your email*</label>
            <input
              id="email-input"
              type="email"
              name="email"
              placeholder="Eg. example@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone-input">Enter phone number*</label>
            <input
              id="phone-input"
              type="tel"
              name="phone"
              placeholder="Eg. +91 800 000000"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message-textarea">Message</label>
            <textarea
              id="message-textarea"
              name="message"
              placeholder="Write us a message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit">Send message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
