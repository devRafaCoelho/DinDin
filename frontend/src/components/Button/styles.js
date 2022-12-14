import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.0625rem;

    border-radius: 5px;
    cursor: pointer;
    transition: all 0.1s ease-in;

    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme, background }) => {
        return background
            ? theme.colors[background]
            : theme.colors.purpleButton;
    }};

    &:hover {
        opacity: 0.9;
    }
`;
