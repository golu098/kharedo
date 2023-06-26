import React from 'react';
import '../styles/HomeCard.css'; // Import the CSS file for the HomeCardPage component

const HomeCardPage = () => {
  return (
    <div className="homecardpage">
      <div className="card" id="card1">
        <h3>Card 1</h3>
        <p>This is the guiding manual for Card 1.</p>
      </div>
      <div className="card" id="card2">
        <h3>Card 2</h3>
        <p>This is the guiding manual for Card 2.</p>
      </div>
      <div className="card" id="card3">
        <h3>Card 3</h3>
        <p>This is the guiding manual for Card 3.</p>
      </div>
      <div className="card" id="card4">
        <h3>Card 4</h3>
        <p>This is the guiding manual for Card 4.</p>
      </div>
      <div className="card" id="card5">
        <h3>Card 5</h3>
        <p>This is the guiding manual for Card 5.</p>
      </div>
      <div className="card" id="card6">
        <h3>Card 6</h3>
        <p>This is the guiding manual for Card 6.</p>
      </div>
    </div>
  );
};

export default HomeCardPage;
