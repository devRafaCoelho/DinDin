import React, { useState, useEffect } from 'react';
import { Container, Form } from './styles';
import InputContainer from '../InputContainer';
import Button from '../Button';
import api from '../../services/api';
import { setItem, getItem } from '../../utils/storage';
import { useNavigate } from 'react-router-dom';

export default function FormLogIn() {
    const [form, setForm] = useState({
        email: '',
        senha: ''
    });
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            if (!form.email || !form.senha) {
                alert('Preencha todos os campos');
                return;
            }

            const response = await api.post('/login', {
                ...form
            });

            const { token } = response.data;
            setItem('token', token);

            const { nome, email } = response.data.usuario;
            setItem('nome', nome);
            setItem('email', email);

            setForm('');
            navigate('/home');
        } catch (error) {
            console.log(error.response.data);
        }
    }

    useEffect(() => {
        const token = getItem('token');

        if (token) {
            navigate('/home');
        }
    });

    function handleChangeInputValue(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    return (
        <Container>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
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

                <Button content='Entrar' />
            </Form>
        </Container>
    );
}