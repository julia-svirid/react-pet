import styled from 'styled-components'
import React from 'react';


const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  cursor: pointer;
  font-size: 20px;
`;

const Button = ({text}) => {
    return (
        <StyledButton>{text}</StyledButton>
    );
};

export default Button;