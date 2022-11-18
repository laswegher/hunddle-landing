import styled from 'styled-components';

export const Container = styled.div`
    width: 1000px;
    max-width: 95%;
    margin: 0 auto;
`;

export const Flex = styled.div`
    display: flex;
    align-items: center;
    gap: 2em;

    & > div,
    & > ul {
        flex: 1;
    }

    @media (max-width: ${({ theme }) => theme.devices.mobile}) {
        flex-direction: column;
        text-align: center;
    }
`;
