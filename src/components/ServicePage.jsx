import React from "react";
import { FaRobot, FaChartLine, FaUsers } from "react-icons/fa";
import "./ServicePage.css";

const services = [
  {
    icon: <FaRobot className="service-icon" />,
    title: "Predictive Content Intelligence",
    description:
      "Neural models forecast trends and auto-generate on-brand creatives that resonate with your audience before they even know what they want.",
  },
  {
    icon: <FaChartLine className="service-icon" />,
    title: "Growth Architectures",
    description:
      "Funnels engineered for conversion across Instagram, YouTube, X, LinkedIn with adaptive algorithms that optimize in real-time based on platform changes.",
  },
  {
    icon: <FaUsers className="service-icon" />,
    title: "Autonomous Community Ops",
    description:
      "Smart agents moderate, reply, and escalate with brand-safe guardrails, providing 24/7 engagement that feels authentically human.",
  },
];

export default function ServicePage() {
  return (
    <div className="service-container" id="services">
      <h2 className="service-title">AI-Powered Social Media Engines
</h2>
      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            {service.icon}
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
