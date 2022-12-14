import React from 'react';
import triangulo from '../../assets/triangulo.svg'
import { Container, SubContainer } from './styles';

export default function ModalDeleteTransaction({ deleteTransaction, closeModalDeleteTransaction, transactionId, modalDeleteTransaction }) {
    return (
        <Container transactionId={transactionId} modalDeleteTransaction={modalDeleteTransaction}>
            <span>Apagar item?</span>

            <SubContainer>
                <button onClick={deleteTransaction}>Sim</button>
                <button onClick={closeModalDeleteTransaction}>Não</button>
            </SubContainer>

            <img src={triangulo} alt="triangulo" />
        </Container>
    );
}