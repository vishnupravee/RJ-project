

import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { FaCheckCircle } from "react-icons/fa";
import homepageVideo from "../asset/RJ DIGITAL AI LOGO ANIMATION wbg.mp4";
import Assistent from "./Assistent";
import { Link } from "react-router-dom";

const words = [
  "AI", "Machine Learning", "Neural Networks", "Deep Learning", "Automation",
  "Data Science", "Natural Language Processing", "Vision AI", "Robotics",
  "Innovation", "Analytics", "Predictive Modeling", "Chatbots", "Generative AI",
  "Cloud AI", "Big Data", "Cognitive Computing", "Smart Systems"
];

const HomePage = () => {
   
  const [wordPositions, setWordPositions] = useState([]);

  useEffect(() => {
    const positions = words.map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${5 + Math.random() * 5}s`
    }));
    setWordPositions(positions);
  }, []);

  return (
    <div className="homepage">
      <div className="background-words">
        {words.map((word, index) => (
          <span
            key={index}
            className="floating-word"
            style={{
              top: `${wordPositions[index]?.top}%`,
              left: `${wordPositions[index]?.left}%`,
              animationDelay: wordPositions[index]?.animationDelay,
              animationDuration: wordPositions[index]?.animationDuration
            }}
          >
            {word}
          </span>
        ))}
      </div>

      <div className="homepage-content">
        {/* <h1 className="">AI-native social media that feels inevitable</h1> */}
       <h1><strong>AI-native social media that feels inevitable</strong></h1> 
        <p>
          From Thalassery to the world — we design self-optimizing campaigns powered by neural intelligence.
        </p>
        <div className="homepage-buttons">
  <button className="animated-btn primary-btn" onClick={() => {
    window.location.href = "tel:‪+919526224999‬"; // Replace with your number
  }}
>Book a strategy call</button>
<Link to="/casesignals">
  <button  className="animated-btn outline-btn">See case signals</button>
  </Link>
</div>

         <div className="certifications">
      <span><FaCheckCircle className="verified-icon" /> ISO 27001-ready</span>
      <span><FaCheckCircle className="verified-icon" /> Meta Partner</span>
      <span><FaCheckCircle className="verified-icon" /> Google Certified</span>
      <span><FaCheckCircle className="verified-icon" /> Made in Kerala</span>
    </div>
      </div>
      <div className="homepage-right">
        <video
          src={homepageVideo}
          autoPlay
          loop
          muted
          playsInline
          className="homepage-video"
        />
      </div>
      <Assistent />
    </div>
      
  );
};

export default HomePage;
