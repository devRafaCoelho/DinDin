import styled from "styled-components";

export const Container = styled.div`
    width: 513px;
    padding: 0 32px;

    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 2px;
    background-color: ${({ theme }) => theme.colors.white};

    h1 {
        margin: 60px 0 48px;

        font-weight: 500;
        font-size: 1.75rem;
        line-height: 2.0625rem;

        color: ${({ theme }) => theme.colors.purpleButton};
    }
`;

export const Form = styled.form`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 31px;

    button {
        width: 100%;
        height: 48px;
        margin: 42px 0 53px;
    }
`;
