import styled from "styled-components";

export const Container = styled.div`
    width: 614px;

    display: flex;
    flex-direction: column;

    color: ${({ theme }) => theme.colors.white};

    h2 {
        margin-bottom: 33px;
        font-size: 3.25rem;
        line-height: 3.875rem;
    }

    span {
        color: ${({ theme }) => theme.colors.purpleButton};
    }

    p {
        margin-bottom: 43px;
        font-size: 28px;
        line-height: 33px;
    }

    button {
        width: 284px;
        height: 48px;
    }
`;
