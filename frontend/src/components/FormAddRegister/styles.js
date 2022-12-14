import styled from "styled-components";

export const Container = styled.div`
    width: 611px;
    margin: auto;
    padding: 56px 62px 0 64px;

    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
`;

export const Header = styled.div`
    margin-bottom: 48px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        font-size: 2.25rem;
        line-height: 2.6875rem;
        color: ${({ theme }) => theme.colors.black};
    }

    img {
        width: 26px;
        height: 26px;
        cursor: pointer;
    }
`;

export const ButtonContainer = styled.div`
    width: 100%;
    margin-bottom: 42px;

    display: flex;
    align-items: center;
    justify-content: center;

    button {
        width: 50%;
        height: 56px;
        border-radius: 10px;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 26px;

    label {
        font-size: 1.5rem;
        line-height: 1.75rem;
    }

    button {
        width: 50%;
        height: 42px;
        margin: 22px 0 41px;
    }
`;
