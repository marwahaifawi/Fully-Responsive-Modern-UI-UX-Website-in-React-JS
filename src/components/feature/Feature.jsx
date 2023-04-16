import React from 'react';
import './Feature.css';
const Feature = ({title , text , inline}) => {
  return (
    <div className={inline ?'gpt3FeaturesContainerFeatureInline':'gpt3FeaturesContainerFeature'}>
      <div className="gpt3FeaturesContainerFeatureTitle">
        <div/>
        <h1>{title}</h1>
      </div>
     <div className="gpt3FeaturesContainerFeatureText">
    <p> {text}</p>
     </div>
    </div>
  )
}

export default Feature