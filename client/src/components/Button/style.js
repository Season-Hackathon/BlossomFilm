import styled from "styled-components";

export const Button = styled.button`
  min-width: 215px;
  color: #000;
  padding: 1rem 0;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 50px;
  background-color: #ffffff;
  border: none;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  &.on {
    background-color: #ff6581;
    color: #ffffff;
  }
  &.share {
    border: 2px solid #ff6581;
    color: #ff6581;
  }
  &.uploadBtn {
    margin: 0px 0px 20px 0px;
  }

`;
