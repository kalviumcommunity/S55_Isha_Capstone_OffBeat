import { Link } from 'react-router-dom';
import './Home.css';
import background from './background.png'

function Home() {
  return (
    <div className="home-container">
      <div className='navbar'>
        <nav>
          <div className='logo'>
            <h1 className='offb1'>OFF</h1>
            <h1 className='offb2'>BEAT</h1>
          </div>
          <div className='nav-items'>
            <div className='options'>
              <Link className='links' to='/about'>ABOUT US</Link>
              <Link className='links' to='/contact'>CONTACT US</Link>
              
            </div>
            <div className='login-signup'>
              <button className='login'><Link className='login-link' to='/login'>LOGIN</Link></button>
              <button className='signup'><Link className='signup-link' to='/signup'>SIGNUP</Link></button>
            </div>
          </div>
        </nav>
      </div>


      <div className='main-container'>
        <div className='text'> 

          <div className='main-text'>
            <h1 className='welcome'>WELCOME </h1>
            <p className='para'>Beyond the Horizon: Find Serenity and Excitement in the Hidden Corners of the World, Far from the Crowds.</p>
            <div>
              <button className='get-started'><Link className='get-s' to='/cards'>GET STARTED</Link></button>
             
            </div>
          </div>

          <div className='butt'>

          </div>

        </div>

        <div className='back-img'>
          <img className='back-image' src={background} alt="" /> 
        </div>


      </div>


    </div>
  );
}

export default Home;
