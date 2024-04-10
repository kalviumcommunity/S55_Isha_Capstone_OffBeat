
import './Contact.css';
import address from '../assets/address.png';
import cont from '../assets/contact.png';
import support from '../assets/support.png';

function Contact() {
  return (
    <div className="contact-form">
      <div className="first-container">
        <div className="info-container">
          <div>
            <img className="icon" src={address} alt="Address icon" />
            <h3>Address</h3>
            <p>137/B, VMV Road, Amravati, 44604 </p>
          </div>
          <div>
            <img className="icon" src={cont} alt="Lets Talk icon" />
            <h3>Lets Talk</h3>
            <p>+91 12345 67890</p>
          </div>
          <div>
            <img className="icon" src={support} alt="General Support icon" />
            <h3>General Support</h3>
            <p>xyz@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="second-container">
        <h2>Send Us A Message</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name-input">Tell us your name*</label>
            <input id="name-input" type="text" placeholder="First name" required />
            <input type="text" placeholder="Last name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email-input">Enter your email*</label>
            <input id="email-input" type="email" placeholder="Eg. example@email.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone-input">Enter phone number*</label>
            <input id="phone-input" type="tel" placeholder="Eg. +91 800 000000" required />
          </div>
          <div className="form-group">
            <label htmlFor="message-textarea">Message</label>
            <textarea id="message-textarea" placeholder="Write us a message"></textarea>
          </div>
          <button>Send message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
