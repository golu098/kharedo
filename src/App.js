import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/Home'
import HomeCardPage from './components/HomeCard'


const App = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <HomeCardPage/>
    </div>
  );
};

export default App;
