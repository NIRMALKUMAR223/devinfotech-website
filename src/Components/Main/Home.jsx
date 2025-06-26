// File: src/components/MainContent.jsx
import React from 'react';
import Content from './Content';
import video from '../../assets/videos/tech-background.mp4'; // Import video file

const Home = () => {
  return(
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
    <video src={video} autoPlay loop muted></video>
    <Content />
    </div>
  )
};

export default Home;