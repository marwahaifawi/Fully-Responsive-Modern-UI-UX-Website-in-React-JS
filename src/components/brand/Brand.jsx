import React from "react";
import "./Brand.css";
import { Google, Slack, Shopify, Atlassian, Dropbox } from "./imports";
const Brand = () => {
  return (
    <div className="gpt3Brand sectionPadding">
      <div>
        <img src={Google} alt="googleImageIcon" />
      </div>
      <div>
        <img src={Slack} alt="Slack" />
      </div>
      <div>
        <img src={Atlassian} alt="Atlassian" />
      </div>
      <div>
        <img src={Dropbox} alt="Dropbox" />
      </div>
      <div>
        <img src={Shopify} alt="Shopify" />
      </div>
    </div>
  );
};

export default Brand;
