
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
        <main className="main-grid">
          <div className="head">
            <h1 className="page-title">Discover Amazing Destinations</h1>
            <p className="subtitle">Explore breathtaking places and create unforgettable memories.</p>
          </div>
          <img className="main-image" src="https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" alt="" />
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
            <a href="#" className="facebook icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="twitter icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="instagram icon"><i className="fab fa-instagram"></i></a>
          </div>
        </footer>
      </body>
      </>
  );
}

export default Aboutus;
