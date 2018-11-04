import React from "react";
import styled from "styled-components";

const CloseCont = styled.span`
  position: absolute;
  color: gray;
  right: 20px;
  top: 0;
  font-size: 28px;
  font-weight: bold;
  z-index: 800;

  &:hover {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }

  &:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;

const Close = ({ onClick, color, top }) => (
  <CloseCont className="close" onClick={onClick}>
    &times;
  </CloseCont>
);

export default Close;
