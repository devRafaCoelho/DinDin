import React from 'react';
import { Link } from 'react-router-dom'
import { Container } from './styles';
import Button from '../Button';

export default function LoginContent() {
    return (
        <Container>
            <h2>
                Controle suas <span>finanças</span>, sem planilha chata.
            </h2>
            <p>
                Organizar as suas finanças nunca foi tão fácil, com o DINDIN, você tem tudo num único lugar e em um clique de distância.
            </p>
            <Link to='/usuario'>
                <Button content='Cadastre-se' />
            </Link>
        </Container>
    );
}