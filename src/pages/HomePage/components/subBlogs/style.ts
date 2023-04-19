import styled from "styled-components";

export const StyledBlogContainer = styled.div`
  display: flex;
`;

export const StyledBlogMain = styled.div`
  width: 70%;
`;

export const StyledBlogBlock = styled.div`
  margin: 5px;
  padding-bottom: 20px;
  border-bottom: 1px dotted black;
  span {
    font-size: 12px;
  }
  h3 {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const StyledBlogContext = styled.div`
  display: flex;
`;

export const StyledSideBar = styled.div`
  width: 30%;
  display: inline;
`;

export const StyledBlogAnimation = styled.div`
  margin: 0 auto;
  position: relative;
  span {
    color: white;
  }
`;

export const StyledBlogAnimationText = styled.div`
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  top: 0;
  left: 0;

  ::after {
    content: "${(props) => props.title}";
    position: absolute;
    top: 0px;
    left: 0px;
    color: #d766f5;
    width: 0;
    overflow: hidden;
    height: 400px;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;
