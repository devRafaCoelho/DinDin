import React from 'react';
import { Container } from './styles';
import FormAddRegister from '../FormAddRegister';

export default function ModalAddRegister({ closeModalAddRegister, handleAtualizar }) {
    return (
        <Container>
            <FormAddRegister
                content='Adicionar Registro'
                closeModalAddRegister={closeModalAddRegister}
                handleAtualizar={handleAtualizar}
            />
        </Container>
    );
}