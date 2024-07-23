
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className='navbar'>
        <nav>
          <div className='logo'>
                 <img src="" alt="" />
          </div>

          <div className='options'>
            <div>Explore </div>
            <div>Contact</div>
            <div>More</div>
          </div>
          <div className='login-signup'>
            <div><button className='login'>Login</button></div>
            <div><button className='signup'>Signup</button></div>
          </div>
        </nav>

      </div>

      <div className="main-container">
        <div className="nature">
          <div>
          <p className='Info'>
            Discover destinations you would obviously want to visit
            
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
