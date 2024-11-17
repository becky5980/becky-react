import { useState } from "react";
import styled from "styled-components";

// 使用 styled-components 定义单独的组件，命名以 SCx 开头
const SCxHome = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  text-align: center;
`;

const SCxHeading = styled.h1`
  color: #333;
  margin-bottom: 1rem;
`;

const SCxParagraph = styled.p`
  color: #666;
  margin-bottom: 1rem;
`;

const SCxButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

function Home() {
  
  const [count, setCount] = useState(0);
  return (
    <SCxHome>
      <SCxHeading>Welcome to the Home Page</SCxHeading>
      <SCxParagraph>Count: {count}</SCxParagraph>
      <SCxButton
        onClick={() => {
          console.log('点击')
          setCount((prev) => prev++);
        }}
      >
        Increment
      </SCxButton>
    </SCxHome>
  );
}

export default Home;
