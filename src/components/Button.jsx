import React from 'react';
import styled from 'styled-components';

// import { SButton } from './styled/Button.styled';

const Button = (props) => {
    return <SButton {...props}>{props.children}</SButton>;
};

const SButton = styled.button`
    font-size: 1rem;
    font-weight: 600;
    padding: 0.5em 2em;
    border: none;
    border-radius: 1em;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;

    color: ${({ clr }) => clr || '#333'};
    background-color: ${({ bg }) => bg || '#fff'};

    transition: scale 0.3s ease;
    &:hover {
        scale: 1.07;
        opacity: 0.9;
    }
`;

export default Button;
