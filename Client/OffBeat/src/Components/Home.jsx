
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="bg">
      <nav>
        <div className="nav-items">
          <div className='logo'>
            <h1>OFFBEAT</h1>
          </div>
          <div className='items'>
            <h2>Home</h2>
            <Link to="/login"><h2>Login</h2></Link>
            <Link to="/signup"><h2>Signup</h2></Link>
            <h2>About Us</h2>
            <h2>Contact</h2>
          </div>
        </div>
      </nav>
      <div className='box-text'>

        <div className="morning-text">
          <h1 className='mor'>Good Morning</h1>
          <p>Explore beautiful places around you with OffBeat !</p>
        </div>
        <div className="detect">
          <h1>Enter/Detect Location</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
