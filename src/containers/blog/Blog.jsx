import React from "react";
import "./Blog.css";
import { Article } from "../../components";
import { Blog0, Blog1, Blog2, Blog3, Blog4 } from "./imports";
const Blog = () => {
  return (
    <div className="gpt3Blog sectionPadding" id="blog">
      <div className="gpt3BlogHeading">
        <h1 className="gradientText">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3BlogContainer">
        <div className="gpt3BlogContainerGroupA">
          <Article
            imgURL={Blog0}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us explore how it is?"
          />
        </div>
        <div className="gpt3BlogContainerGroupB">
          <Article
            imgURL={Blog1}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us explore how it is?"
          />
          <Article
            imgURL={Blog2}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us explore how it is?"
          />
          <Article
            imgURL={Blog3}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us explore how it is?"
          />
          <Article
            imgURL={Blog4}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us explore how it is?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
