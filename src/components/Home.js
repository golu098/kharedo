import React from 'react';
import '../styles/Home.css';  // Import the CSS file for the HomePage component
// import homeImage from './images/home-image.jpg'; // Import the image for the HomePage component

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="text">
        <h1>Welcome to Our Website</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet magna in est tempus ornare.hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbjjjjjjjjjjjjjjjjjjjjjjjjjjjjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
        <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet magna in est tempus ornare.</p>
      </div>
      {/* <div className="image">
        <img src={homeImage} alt="Home" />
      </div> */}
    </div>
  );
};

export default HomePage;
