import React from 'react';
import styled from 'styled-components';
import SocialIcons from './SocialIcons';
import { Container, Flex } from './styled/Utility.styled';
const Footer = () => {
    return (
        <SFooter>
            <Container>
                <Flex>
                    <div>
                        <Logo
                            src="./images/logo_white.svg"
                            alt="Lorem"
                        />
                        <p>
                            Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit. Minima odit expedita nihil
                            dolor earum quos nisi quia architecto, eius
                            delectus?
                        </p>
                        <span>+90-456-874-6532</span>
                        <p>example@huddle.com</p>
                    </div>
                    <div>
                        <p>About Us</p>
                        <p>What We Do</p>
                        <p>FAQ</p>
                    </div>
                    <div>
                        <p>Career</p>
                        <p>Blog</p>
                        <p>Contact Us</p>
                    </div>
                    <SocialIcons />
                </Flex>
            </Container>
        </SFooter>
    );
};

const SFooter = styled.footer`
    background-color: ${({ theme }) => theme.color.footer};
    color: #fff;
    padding: 4em 0;
    text-align: center;

    p {
        font-size: 0.9rem;
    }

    span {
        display: block;
        margin: 0.5em 0;
    }

    img {
        display: inline-block;
        margin-bottom: 1em;
    }
`;

const Logo = styled.img``;
export default Footer;
