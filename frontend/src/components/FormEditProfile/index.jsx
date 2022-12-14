import React, { useState } from 'react';
import InputContainer from '../InputContainer';
import Button from '../Button';
import closeIcon from '../../assets/close-icon.svg';
import api from '../../services/api';
import { getItem, setItem } from '../../utils/storage';
import { Container, Header, Form } from './styles';

export default function FormEditProfile({ closeModalEditProfile }) {
    const [form, setForm] = useState({
        nome: getItem('nome'),
        email: getItem('email'),
        senha: '',
        confirmacaoSenha: ''
    });

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

            const token = getItem('token');

            await api.put('/usuario', {
                ...form
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setItem('nome', form.nome);
            closeModalEditProfile();
        } catch (error) {
            console.log(error.response.data);
        }
    }

    function handleChangeInputValue(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    return (
        <Container>
            <Header>
                <h1>Editar Perfil</h1>
                <img onClick={closeModalEditProfile} src={closeIcon} alt="close-icon" />
            </Header>

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

                <Button content='Confirmar' />
            </Form>
        </Container>
    );
}