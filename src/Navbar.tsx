import styled from "styled-components";

export const Navbar = () => {
  return (
      <StyledDiv>
        <a href="/html/">Home</a>
        <a href="/css/">Video</a>
        <a href="/js/">Photo</a>
        <a href="/python/">Web Dev</a>
        <a href="/python/">Contact</a>
      </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;