import React from 'react';
import { Container } from './styles';
import FormEditRegister from '../FormEditRegister';

export default function ModalEditRegister({ handleAtualizar, currentTransaction, closeModalEditRegister }) {
    return (
        <Container>
            <FormEditRegister
                content='Editar Registro'
                handleAtualizar={handleAtualizar}
                currentTransaction={currentTransaction}
                closeModalEditRegister={closeModalEditRegister}
            />
        </Container>
    );
}