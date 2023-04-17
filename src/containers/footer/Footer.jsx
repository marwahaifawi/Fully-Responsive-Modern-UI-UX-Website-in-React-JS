import React from 'react';
import './Footer.css';
import gpt3Logo from '../../assets/GPT-3.svg'
const Footer = () => {
  return (
    <div className="gpt3Footer sectionPadding">
      <div className="gpt3FooterHeading">
        <h1 className="gradientText">
        Do you want to step in to the future before others
        </h1>
      </div>
      <div className="gpt3FooterBtn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3FooterLinks">
        <div className="gpt3FooterLinksLogo">
          <img src={gpt3Logo} alt='logo'/>
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="gpt3FooterLinksDiv">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3FooterLinksDiv">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3FooterLinksDiv">
          <h4>Get in Touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className="gpt3FooterCopyright">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer