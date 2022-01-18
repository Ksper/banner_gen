import React from 'react';
import styled from 'styled-components';

export const MonButton = ({label, color}) => {
    const resultat = 1 + 12; // 13

    const handleClick = (e) => {
        document.body.style.transition = 'all 2s';
        document.body.style.transform = 'rotate(1080deg)';
    }

    return (
        <Button onClick={handleClick} btnColor={color}>{label}</Button>
    )
};

const Button = styled.button`
  background-color: ${props => props.btnColor ? props.btnColor : 'grey'};
  color: white;
  padding: 20px 30px;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
