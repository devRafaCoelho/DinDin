import styled from "styled-components";
import backgroundHeader from "../../assets/backgroundHeader.png";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Header = styled.div`
    width: 100%;
    height: 224px;

    background-image: url(${backgroundHeader});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    color: ${({ theme }) => theme.colors.white};
`;

export const Body = styled.div`
    width: 100%;
    padding-top: 111px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 34px;

    position: fixed;
    top: 118px;

    border-radius: 60px 60px 0px 0px;
    background-color: ${({ theme }) => theme.colors.white};
`;

export const BodyContainer = styled.div`
    max-width: 1234px;

    display: flex;
    flex-direction: column;
    gap: 26px;
`;

export const ToFilter = styled.div`
    width: 80px;
    height: 30px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;

    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0px 2px 11px ${({ theme }) => theme.colors.blackShadow};
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.backgroundTable};

    span {
        font-weight: 700;
        font-size: 12px;
        line-height: 14px;
    }
`;

export const ContentContainer = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 34px;
`;

export const ContentSubContainer = styled.div`
    width: 964px;
    max-height: 60vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 61px;
    overflow: auto;
`;

export const ResumeContainer = styled.div`
    width: 236px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    color: ${({ theme }) => theme.colors.grayResumeContent};

    button {
        width: 100%;
        height: 42px;
        color: ${({ theme }) => theme.colors.white};
    }
`;
