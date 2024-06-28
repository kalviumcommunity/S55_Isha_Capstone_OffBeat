
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './Home.css';

function Home() {
  return (
    <div className='hi'>
    <header className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="navbar-links">
        <Link to="/explore">Explore</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="navbar-buttons">
        <Link to="/login" className="btn">Login</Link>
        <Link to="/signup" className="btn">Sign Up</Link>
      </div>
    </header>

    <div className='locate'>
      <p>Welcome! </p>
    </div>
    </div>
  );
}

export default Home;
