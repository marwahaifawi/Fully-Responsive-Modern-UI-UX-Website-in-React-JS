import React from 'react';
import './Article.css';

const Article=({imgURL , date , title})=> {
  return (
    <div className="gpt3BlogContainerArticle">
      <div className="gpt3BlogContainerArticleImage">
        <img src={imgURL} alt='Blog'/>
      </div>
      <div className="gpt3BlogContainerArticleContent">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article