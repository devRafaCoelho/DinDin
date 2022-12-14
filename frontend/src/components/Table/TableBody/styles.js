import styled from "styled-components";

export const Container = styled.tbody`
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.0625rem;

    tr {
        height: 69px;
        position: relative;
    }

    td {
        :first-child {
            font-weight: 700;
        }

        :nth-child(5) {
            font-weight: 700;
        }

        word-wrap: break-word;
        border-bottom: 1px solid ${({ theme }) => theme.colors.grayTableBorder};
    }

    img {
        cursor: pointer;

        :not(:last-child) {
            margin-right: 20px;
        }
    }
`;

export const ModalContainer = styled.div`
    position: relative;
`;
