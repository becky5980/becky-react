import React from "react";
import styled from "styled-components";

// 使用 styled-components 定义单独的组件，命名以 SCx 开头
const SCxAbout = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
`;

const SCxHeading = styled.h1`
  color: #333;
  margin-bottom: 1rem;
`;

const SCxParagraph = styled.p`
  color: #666;
  line-height: 1.6;
`;

function Travel() {
  return (
    <SCxAbout>
      <SCxHeading>Travel the word</SCxHeading>
      <SCxParagraph>
        This is an example of a server-side rendered and isomorphic React
        application.
      </SCxParagraph>
    </SCxAbout>
  );
}

export default Travel;
