import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Icons = () => {
    return (
        <SIcons>
            <a
                rel="noreferrer"
                target="_blank"
                href="https://facebook.com"
            >
                <FaFacebookF />
            </a>
            <a
                rel="noreferrer"
                target="_blank"
                href="https://twitter.com"
            >
                <FaTwitter />
            </a>
            <a
                rel="noreferrer"
                target="_blank"
                href="https://whatsapp.com"
            >
                <FaWhatsapp />
            </a>
        </SIcons>
    );
};

const SIcons = styled.div`
    svg {
        font-size: 2rem;
        margin-left: 0.4em;
        cursor: pointer;
        color: #fff;

        &:hover {
            color: #ff0099;
        }
    }
`;

export default Icons;
