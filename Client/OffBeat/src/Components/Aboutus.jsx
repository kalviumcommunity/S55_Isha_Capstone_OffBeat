import './Aboutus.css'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'

const Aboutus = () => {
  return (
    <>
      <head>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet" />
       
        <title>Explore OffBeat</title>
      </head>
      <body>
        <header className="header main-grid">
          <div className="header-content">
                        
          </div>
          <nav></nav>
        </header>
        <main className="main-grid">------------------------------------------------------------------------------------------------------------------------------------------------------------------++-------------------------------------------------------------------------------------------------------------
          <div className="head">
            <h1 className="page-title">Discover Amazing Destinations</h1>
            <p className="subtitle">Explore breathtaking places and create unforgettable memories.</p>
          </div>
          <img className="main-image" src="https://www.treebo.com/blog/wp-content/uploads/2017/12/Candolim-beach-at-Sunset.jpg" alt="beach image" />
          <div className="main-text">
            <h2 className="section-title">Embark on Your Journey</h2>
            <p>Whether you seek the tranquility of remote beaches, the adventure of hiking through majestic mountains, or the culture of bustling cities, OffBeat has the perfect destination for you.</p>
            <p>Our team is dedicated to curating extraordinary travel experiences that cater to your desires and exceed your expectations.</p>
            <h2 className="section-title sub">Create Unforgettable Memories</h2>
            <p>From luxurious resorts to cozy bed and breakfasts, from thrilling outdoor adventures to serene wellness retreats, our destinations offer something for every traveler.</p>
            <p>Let us help you plan your dream vacation and embark on a journey filled with discovery, relaxation, and wonder.</p>
          </div>
        </main>
        <footer className="footer main-grid">
          <div className="footer-text">
            <p className="end">Thank you for exploring OffBeat. Follow us on social media for travel inspiration, tips, and special offers. We look forward to helping you make your travel dreams a reality.</p>
            <p className="copyright">OffBeat</p>
          </div>
          <div className="social">
          <img className="icon" src={facebook} alt="Facebook" />
          <img className="icon" src={twitter} alt="Twitter" />
          <img className="icon" src={instagram} alt="Instagram" />
          </div>
        </footer>
      </body>
      </>
  );
}

export default Aboutus;
