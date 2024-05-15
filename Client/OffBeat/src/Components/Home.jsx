
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container"> 
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src="logo.png" alt="Logo" />
        </div>
        
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        
        <div className="auth-buttons">
          <button><Link to="/signup">Sign Up</Link></button>
          <button><Link to="/login">Login</Link></button>
        </div>
      </nav>

      <div className="main-content">
        <h1>Welcome to our Website</h1>
        <p>This is the homepage content.</p>
      </div>
    </div>
  );
}

export default Home;
