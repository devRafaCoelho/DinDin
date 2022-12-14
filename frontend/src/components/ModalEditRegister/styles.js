import styled from "styled-components";

export const Container = styled.div`
    padding: 50px 0;

    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-y: scroll;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.grayBackgroundModal};
`;
