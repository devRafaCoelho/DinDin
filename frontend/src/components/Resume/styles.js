import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 26px 33px 31px;

    display: flex;
    flex-direction: column;

    border-radius: 10px;
    box-shadow: 0px 2px 11px ${({ theme }) => theme.colors.blackShadow};
    background-color: ${({ theme }) => theme.colors.backgroundTable};

    h3 {
        margin-bottom: 23px;
        font-size: 1.125rem;
        line-height: 1.3125rem;
    }

    hr {
        border: 1px solid ${({ theme }) => theme.colors.grayResumeBorder};
    }
`;

export const SubContainer = styled.div`
    margin-bottom: 19px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Entry = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h4 {
        font-size: 0.8125rem;
        line-height: 0.9375rem;
    }

    strong {
        font-size: 0.8125rem;
        line-height: 0.9375rem;
        color: ${({ theme }) => theme.colors.purpleEntry};
    }
`;

export const Exits = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h4 {
        font-size: 0.8125rem;
        line-height: 0.9375rem;
    }

    strong {
        font-size: 0.8125rem;
        line-height: 0.9375rem;
        color: ${({ theme }) => theme.colors.orange};
    }
`;

export const Balance = styled.div`
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
        font-size: 0.875rem;
        line-height: 1.0625rem;
    }

    strong {
        font-size: 0.875rem;
        line-height: 1.0625rem;
        color: ${({ theme }) => theme.colors.blue};
    }
`;
