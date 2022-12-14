import styled from "styled-components";

export const Container = styled.div`
    width: 513px;
    margin: 148px 0 95px;
    padding: 0 32px;

    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 2px;
    background-color: ${({ theme }) => theme.colors.white};

    h1 {
        margin: 61px 0 42px;

        font-size: 1.75rem;
        line-height: 2.0625rem;
        font-weight: 500;

        color: ${({ theme }) => theme.colors.purpleButton};
    }

    p {
        margin-bottom: 57px;

        font-weight: 700;
        font-size: 0.875;
        line-height: 1.0625rem;
        font-family: "Lato", sans-serif;

        color: ${({ theme }) => theme.colors.purpleContent};
    }

    a {
        color: ${({ theme }) => theme.colors.purpleContent};

        &:hover {
            opacity: 0.7;
        }
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
        margin: 7px 0 12px;
    }
`;
