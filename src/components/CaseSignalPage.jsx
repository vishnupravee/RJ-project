import React from "react";
import { FaChartLine, FaUsers, FaShoppingCart } from "react-icons/fa";
import "./CaseSignalPage.css";
import Fashion from "../asset/AI IN FASHION.jpg";
import Saas from "../asset/The Strategic Partnering with a SAAS Software Development Company.jpg";
import  Ecommerce from "../asset/Optimizing Digital Marketing for Online Retail Success.jpg";
const CaseSignalPage = () => {
  const caseSignals = [
    {
      icon: <FaUsers />,
      title: "",
      subtitle: "Fashion Brand Growth",
      description:
        "Increased engagement by 320% and reduced CPA by 65% using our predictive content engine.",
      platforms: "Instagram, TikTok",
      duration: "6 months",
      image: Fashion,
    },
    {
      icon: <FaChartLine />,
      title: "",
      subtitle: "SaaS Lead Generation",
      description:
        "Drove 1,200+ qualified leads/month through optimized LinkedIn and Twitter funnels.",
      platforms: "LinkedIn, Twitter",
      duration: "4 months",
      image: Saas,
    },
    {
      icon: <FaShoppingCart />,
      title: "",
      subtitle: "E-commerce Scaling",
      description:
        "3X revenue growth through AI-optimized Facebook and Instagram ad sequencing.",
      platforms: "Facebook, Instagram",
      duration: "8 months",
      image: Ecommerce,
    },
  ];

  return (
    <div className="case-signal-page">
      <h1 className="case-title">Case Signals</h1>
      <div className="case-card-container">
        {caseSignals.map((signal, index) => (
          <div className="case-card" key={index}>
            <img src={signal.image} alt={signal.subtitle} />
            <div className="case-content">
              <div className="case-icon">{signal.icon}</div>
              <h3>{signal.title}</h3>
              <h4>{signal.subtitle}</h4>
              <p>{signal.description}</p>
              <span className="case-meta">
                {signal.platforms} • {signal.duration}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseSignalPage;
