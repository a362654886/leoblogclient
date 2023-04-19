import styled from "styled-components";

export const StyledTypeSpan = styled.p`
  border-bottom: 1px solid;
  cursor: pointer;
  margin-right: 10px;
  display: inline-block;
  color: white;
`;

export const StyledTypeSpanDiv = styled.div`
  display: inline;
  word-wrap: break-word;
  white-space: normal;
`;

export const StyledTypeHeader = styled.div`
  display: flex;
  margin-bottom: 10px;
  button {
    position: absolute;
    right: 5px;
  }
  h3 {
    margin: 5px;
    color: white;
  }
`;
