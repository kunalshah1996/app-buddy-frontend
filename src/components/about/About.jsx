import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

import readme from "../../README.md";

const About = () => {
  const [terms, setTerms] = useState(null);

  useEffect(() => {
    fetch(readme)
      .then((response) => response.text())
      .then((text) => {
        setTerms(text);
      });
  }, []);
  return (
    <>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[[remarkGfm]]}
        children={terms}
        escapeHtml={false}
      />
    </>
  );
};

export default About;
