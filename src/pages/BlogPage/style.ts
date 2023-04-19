import styled from "styled-components";

export const StyledBlogBody = styled.div`
  margin: 10px;
`;

export const StyledTitle = styled.h2`
  padding-bottom: 20px;
  font-size: 20px;
  border-bottom: 3px black solid;
`;

export const StyledBlogContextBody = styled.div`
  width: 80%;
  margin: 0 auto;
  img {
    max-width: 80%;
  }
  padding: 15px 40px;
  background-color: rgb(26, 26, 26);
  p,
  h1,
  h2,
  h3,
  h4,
  span,
  li {
    color: white !important;
  }
  p {
    font-size: 18px;
  }
  h2 {
    font-size: 25px;
  }
`;

export const StyledBlogContextHeader = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  span {
    margin-top: 55px;
    margin-left: 30px;
    font-style: italic;
    color: white;
  }
  h1 {
    color: white;
    font-size: 40px;
  }
`;

export const StyledBlogTypesDiv = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  p,
  span {
    color: white;
    margin-right: 20px;
  }
  span {
    font-style: italic;
    cursor: pointer;
    margin: 14px 20px 14px 0px;
    border-bottom: 1px solid white;
  }
`;

export const StyledBlogRelateBlogsBody = styled.div`
  width: 80%;
  margin: 0 auto;
  h4 {
    color: #d766f5;
  }
  a {
    color: #d766f5;
    border-bottom: 1px solid #d766f5;
    font-style: italic;
    cursor: pointer;
  }
  background-color: rgb(26, 26, 26);
  padding: 15px 50px;
`;
