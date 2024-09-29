import './Aboutus.css'
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="container">
      <div className="contentLeft">
        <div className="row">
          <div className="imgWrapper">
            <img 
              src="https://images.unsplash.com/photo-1687579521048-217e24217d53?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODg5ODcxNzl8&ixlib=rb-4.0.3&q=85" 
              alt="" 
            />
          </div>
          <div className="imgWrapper">
            <img 
              src="https://images.unsplash.com/photo-1686580546412-80e80519abd7?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODg5ODcyMDN8&ixlib=rb-4.0.3&q=85" 
              alt="" 
            />
          </div>
          <div className="imgWrapper">
            <img 
              src="https://images.unsplash.com/photo-1688133338995-a394ce7314e4?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODg5ODcyMDN8&ixlib=rb-4.0.3&q=85" 
              alt="" 
            />
          </div>
          <div className="imgWrapper">
            <img 
              src="https://images.unsplash.com/photo-1686354715732-7e4685269a25?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODg5ODcyNzN8&ixlib=rb-4.0.3&q=85" 
              alt="" 
            />
          </div>
        </div>
      </div>
      <div className="contentRight">
        <div className="content">
          <h4>Welcome To Offbeat</h4>
          <h2>About Us</h2>
          <p>Welcome to a OffBeat, where people from different locations can find interesting and amazing places to discover some hidden spots, which very few people have came across till now, and you can also add the new places that you discover for people to know more about it. Also, you can rate the place after visiting there once, so it would be helpful for other people to choose a place to hang out! 😃</p>
          <a href="#"><Link to='/' >Back to Home</Link></a>
          
        </div>
      </div>
    </div>
  );
};

export default App;
