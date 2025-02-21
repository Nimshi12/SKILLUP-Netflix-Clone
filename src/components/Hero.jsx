import React from "react";
import Header from "./Header";
import { RightOutlined } from "@ant-design/icons";

const Hero = () => {
  return (
    <>
      <div className="hero-section">
        <Header />
        <div className="hero-main-section">
          <div className="hero-description">
            <h1 className="hero-title">Unlimited movies, TV shows, and more</h1>
            <p className="hero-cap1">Starts at USD 2.99. Cancel anytime.</p>
            <p className="hero-cap2">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
          </div>
          <div className="email-form">
            <input className="email" type="email" placeholder="Email address" />
            <button className="get-started-btn">
              Get Started <RightOutlined size={90} style={{fontSize: '18px'}} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
