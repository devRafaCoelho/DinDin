import styled from "styled-components";

export const Container = styled.div`
    width: 111px;
    height: 46px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;

    position: absolute;
    top: 51px;
    right: 35px;
    z-index: ${({ transactionId, modalDeleteTransaction }) => {
        return transactionId === modalDeleteTransaction ? 10 : 0;
    }};

    font-weight: 300;
    font-size: 10px;
    line-height: 12px;

    border-radius: 4px;
    background: ${({ theme }) => theme.colors.backgroundModalDeleteTransaction};

    img {
        position: absolute;
        top: -7px;
        right: 3px;
    }
`;

export const SubContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;

    button {
        width: 37px;
        height: 15px;

        font-weight: 500;
        font-size: 9px;
        line-height: 11px;

        border-radius: 4px;
        cursor: pointer;
        color: ${({ theme }) => theme.colors.white};

        :nth-child(1) {
            background: ${({ theme }) => theme.colors.blue};
        }

        :nth-child(2) {
            background: ${({ theme }) => theme.colors.red};
        }
    }
`;
