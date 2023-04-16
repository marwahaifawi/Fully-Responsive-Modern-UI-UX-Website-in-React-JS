import React from "react";
import "./Header.css";
import People from '../../assets/people.png'
import AI from '../../assets/ai.png'

const Header = () => {
  return (
    <div className="gpt3Header sectionPadding" id="home">
      <div className="gpt3HeaderContent">
        <h1 className="gradientText">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>Yet bed any for traveling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className="gpt3HeaderContentInput">
          <input type="email" placeholder="Your Email Address"/>
          <button type="button"> Get Started</button>
        </div>
        <div className="gpt3HeaderContentPeople">
          <img alt="people" src={People}/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3HeaderImage">
          <img src={AI} alt="aiImage"/>
        </div>
    </div>
  );
};

export default Header;
