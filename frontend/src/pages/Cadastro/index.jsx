import React from 'react';
import Logo from '../../components/Logo';
import { Container } from './styles';
import FormRegister from '../../components/FormRegister';

export default function PaginaCadastro() {
    return (
        <Container>
            <Logo />
            <FormRegister />
        </Container>
    );
}