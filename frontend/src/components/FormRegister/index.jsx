import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import InputContainer from '../InputContainer';
import Button from '../Button';
import api from '../../services/api';
import { Container, Form } from './styles';

export default function FormRegister() {
    const [form, setForm] = useState({
        nome: '',
        email: '',
        senha: '',
        confirmacaoSenha: ''
    });
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            if (!form.nome || !form.email || !form.senha || !form.confirmacaoSenha) {
                alert('Preencha todos os campos');
                return;
            }

            if (form.senha !== form.confirmacaoSenha) {
                alert('As senhas precisam ser iguais!');
                return
            }

            await api.post('/usuario', {
                ...form
            })

            setForm('');
            navigate('/');
        } catch (error) {
            console.log(error.response.data.messagem);
        }
    }

    function handleChangeInputValue(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    return (
        <Container>
            <h1>Cadastre-se</h1>
            <Form onSubmit={handleSubmit}>
                <InputContainer
                    name='nome'
                    type='text'
                    value={form.nome}
                    content='Nome'
                    onChange={handleChangeInputValue}
                />

                <InputContainer
                    name='email'
                    type='email'
                    value={form.email}
                    content='E-mail'
                    onChange={handleChangeInputValue}
                />

                <InputContainer
                    name='senha'
                    type='password'
                    value={form.senha}
                    content='Senha'
                    onChange={handleChangeInputValue}
                />

                <InputContainer
                    name='confirmacaoSenha'
                    type='password'
                    value={form.confirmacaoSenha}
                    content='Confirmação da senha'
                    onChange={handleChangeInputValue}
                />

                <Button content='Cadastrar' />
            </Form>

            <p>
                Já tem cadastro? <Link to='/'>Clique Aqui!</Link>
            </p>
        </Container>
    );
}