import styled from "styled-components";

export const Container = styled.table`
    width: 100%;
    text-align: center;
    border-collapse: collapse;
    overflow: auto;
    position: relative;

    thead {
        width: 100%;
        height: 58px;

        position: sticky;
        top: 0;
        z-index: 10;

        font-weight: 700;
        font-size: 0.875rem;
        line-height: 1.0625rem;

        border-radius: 10px;
        box-shadow: 0px 2px 11px ${({ theme }) => theme.colors.blackShadow};
        color: ${({ theme }) => theme.colors.black};
        background-color: ${({ theme }) => theme.colors.backgroundTable};
    }
`;
