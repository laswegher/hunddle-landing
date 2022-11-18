import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

import { Container } from './styled/Utility.styled';
import { Flex } from './styled/Utility.styled';

const Header = () => {
    return (
        <SHeader>
            <Container>
                <Nav>
                    <Logo
                        src="./images/logo.svg"
                        alt="Lorem"
                    />
                    <Button>Tyr It Free</Button>
                </Nav>
                <Flex>
                    <div>
                        <h1>Build The Community Your Fans Will Love</h1>
                        <p>
                            Huddle re-imagines the way we build
                            communities. You have a voice, but so does your
                            audience. Create connections with your users as
                            you engage in genuine discussion.
                        </p>
                        <Button
                            bg="#ff0099"
                            clr="#fff"
                        >
                            Get Started For Free
                        </Button>
                    </div>
                    <img
                        src="./images/illustration-mockups.svg"
                        alt="lorem"
                    />
                </Flex>
            </Container>
        </SHeader>
    );
};

const SHeader = styled.header`
    background-color: ${({ theme }) => theme.color.header};
    padding: 2.2em 0;

    h1 {
        font-size: 2.2rem;
    }
    p {
        margin: 1em 0 3em 0;
    }
    img {
        max-width: 50%;
    }
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    margin-bottom: 2em;

    @media (max-width: ${({ theme }) => theme.devices.mobile}) {
        flex-direction: column;
    }
`;
const Logo = styled.img``;

export default Header;
