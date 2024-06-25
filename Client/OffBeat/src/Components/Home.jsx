
import './Home.css';
import { Link } from 'react-router-dom';
import logo from './logo.png'

function Home() {
  return (
    <div className="home-container"> 
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        
        <div className="auth-buttons">
          <button className=' signup buttons'><Link className='log-link links' to="/signup">Sign Up</Link></button>
          <button className='login buttons '><Link className='sign-link links' to="/login">Login</Link></button>
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
