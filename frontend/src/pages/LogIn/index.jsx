import React from 'react';
import FormLogIn from '../../components/FormLogIn';
import Logo from '../../components/Logo';
import { Container, SubContainer } from './styles';
import LoginContent from '../../components/LoginContent';

export default function PaginaLogIn() {
    return (
        <Container>
            <Logo />
            <SubContainer>
                <LoginContent />
                <FormLogIn />
            </SubContainer>
        </Container>
    );
}