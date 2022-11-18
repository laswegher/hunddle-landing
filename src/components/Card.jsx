import React from 'react';

import styled from 'styled-components';
import { Container, Flex } from './styled/Utility.styled';

const Card = (props) => {
    return (
        <Container>
            <Content reverse={props.id}>
                <div>
                    <h2>{props.title}</h2>
                    <p>{props.body}</p>
                </div>
                <img
                    src={`/images/${props.image}`}
                    alt={props.title}
                />
            </Content>
        </Container>
    );
};

const Content = styled(Flex)`
    padding: 2em 4em;
    margin: 2em 0;
    border-radius: 2em;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    flex-direction: ${({ reverse }) =>
        reverse % 2 === 0 ? 'row-reverse' : 'row'};

    h2 {
        margin-bottom: 1em;
    }
    p {
        line-height: 1.4em;
    }
    img {
        max-width: 50%;
    }

    @media (max-width: ${({ theme }) => theme.devices.mobile}) {
        padding: 2em 3em;
        flex-direction: column;

        img {
            max-width: 90%;
        }
    }
`;

export default Card;
