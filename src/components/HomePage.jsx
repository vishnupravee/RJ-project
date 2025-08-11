// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./HomePage.css";

// const aiWords = [
//   "Machine Learning",
//   "Neural Networks",
//   "Deep Learning",
//   "Automation",
//   "Data Science",
//   "AI Ethics",
//   "Innovation",
//   "Computer Vision",
//   "Natural Language Processing",
//   "Generative AI",
//   "Smart Systems",
//   "Cloud AI"
// ];

// export default function HomePage() {
//   return (
//     <div className="homepage-container">
//       {/* Moving AI words background */}
//       <div className="floating-words">
//         {aiWords.map((word, index) => (
//           <span key={index} style={{ animationDelay: `${index * 2}s` }}>
//             {word}
//           </span>
//         ))}
//       </div>

//       {/* Foreground content */}
//       <div className="content text-center">
//         <h1 className="display-4 fw-bold">
//           AI-native social media that feels inevitable
//         </h1>
//         <p className="lead">
//           From Thalassery to the world — we design self-optimizing campaigns
//           powered by neural intelligence.
//         </p>

//         <div className="d-flex justify-content-center gap-3 mt-4">
//           <a href="#strategy" className="btn btn-primary btn-lg">
//             Book a strategy call
//           </a>
//           <a href="#cases" className="btn btn-outline-light btn-lg">
//             See case signals
//           </a>
//         </div>

//         <div className="badges mt-5">
//           <span className="badge bg-info text-dark me-2">ISO 27001-ready</span>
//           <span className="badge bg-warning text-dark me-2">Meta Partner</span>
//           <span className="badge bg-success me-2">Google Certified</span>
//           <span className="badge bg-light text-dark">Made in Kerala</span>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { FaCheckCircle } from "react-icons/fa";
import homepageVideo from "../asset/RJ DIGITAL AI LOGO ANIMATION.mp4";
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
  <button className="animated-btn primary-btn">Book a strategy call</button>
  <button className="animated-btn outline-btn">See case signals</button>
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
    </div>
  );
};

export default HomePage;
