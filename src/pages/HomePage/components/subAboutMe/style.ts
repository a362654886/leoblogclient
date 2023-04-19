import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledAboutMeExperienceContainer = styled.div`
  h2 {
    color: white;
  }
  h4 {
    color: #d1d2d3;
  }
`;

export const StyledAboutMeIntroduce = styled.div`
  margin: auto 10%;
  position: relative;
  h3 {
    color: white;
    font-size: 35px;
    text-align: center;
  }
  p {
    color: #d766f5 !important;
    font-size: 20px;
    font-weight: bold;
    top: 0;
    left: 0;
  }
  div {
    display: flex;
  }
`;

export const StyledAboutMeIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 10px;
  margin-top: 10px;
  color: white;
`;

export const IntroduceCard = styled.div`
  display: flex;
  margin: auto 10%;
  padding-top: 20px;
`;

export const IntroduceDiv = styled.div`
  width: 25%;
`;

export const CardWrapper = styled(motion.div)`
  width: 200px;
  background: linear-gradient(to bottom right, #00b4db, #0083b0, #6a82fb);
  padding: 1px;
  border-radius: 20px;
  box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.2);
`;

export const CardContent = styled.div`
  background-color: #1a1a1a;
  border-radius: 20px;
  padding: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 240px;
`;

export const CardImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: white;
`;

export const StyledAboutMeContact = styled.div`
  margin: auto 10%;
  display: flex;
  height: 100vh;
  align-items: center;
  div {
    width: 50%;
  }
`;

export const StyledAboutMeContactCard = styled.div`
  h2 {
    color: white;
    font-size: 60px;
  }
  span {
    color: #d1d2d3;
  }
  p {
    color: #d766f5 !important;
    font-size: 20px;
    font-weight: bold;
    top: 0;
    left: 0;
  }
  border: 1px solid rgb(26, 26, 26);
  background-color: rgb(26, 26, 26);
  width: 50%;
  height: 600px;
  margin: 30px 60px 30px 30px;
  padding: 1rem;
`;
