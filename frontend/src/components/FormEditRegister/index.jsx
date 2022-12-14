import React, { useEffect, useState } from 'react';
import InputContainer from '../InputContainer';
import SelectContainer from '../SelectContainer';
import Button from '../Button';
import closeIcon from '../../assets/close-icon.svg';
import { getItem } from '../../utils/storage';
import api from '../../services/api';
import { formatedIsoDate } from '../../utils/dates';
import { Container, Header, ButtonContainer, Form } from './styles';

export default function FormEditRegister({ content, handleAtualizar, currentTransaction, closeModalEditRegister }) {
    const [form, setForm] = useState({
        valor: '',
        categoria_id: '',
        data: '',
        descricao: ''
    });
    const [statusEntryButton, setStatusEntryButton] = useState(true);
    const [statusExitButton, setStatusExitButton] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const token = getItem('token');

            const body = {
                tipo: statusEntryButton ? 'entrada' : 'saida',
                ...form
            }

            await api.put(`/transacao/${currentTransaction.id}`, body, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            handleAtualizar(body);
            closeModalEditRegister();
        } catch (error) {
            console.log(error.response.data);
        }
    }

    useEffect(() => {
        setForm({
            valor: currentTransaction.valor,
            categoria_id: currentTransaction.categoria_id,
            data: formatedIsoDate(currentTransaction.data),
            descricao: currentTransaction.descricao
        });

        if (currentTransaction.tipo === 'saida') {
            setStatusEntryButton(false);
            setStatusExitButton(true);
        } else {
            setStatusEntryButton(true);
            setStatusExitButton(false);
        }
    }, [
        currentTransaction.valor,
        currentTransaction.categoria_id,
        currentTransaction.data,
        currentTransaction.descricao,
        currentTransaction.tipo
    ]);

    function handleChangeInputValue(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    return (
        <Container>
            <Header>
                <h1>{content}</h1>
                <img onClick={closeModalEditRegister} src={closeIcon} alt="close-icon" />
            </Header>

            <ButtonContainer>
                <Button
                    content='Entrada'
                    background={statusEntryButton ? 'blue' : 'grayBackgroundButton'}
                    onClick={() => {
                        setStatusEntryButton(true);
                        setStatusExitButton(false);
                    }}
                />

                <Button
                    content='Saída'
                    background={statusExitButton ? 'red' : 'grayBackgroundButton'}
                    onClick={() => {
                        setStatusEntryButton(false);
                        setStatusExitButton(true);
                    }}
                />
            </ButtonContainer>

            <Form onSubmit={handleSubmit}>
                <InputContainer
                    name='valor'
                    type='number'
                    content='Valor'
                    value={form.valor}
                    onChange={handleChangeInputValue}
                />

                <SelectContainer
                    name='categoria_id'
                    content='Categoria'
                    value={form.categoria_id}
                    onChange={handleChangeInputValue}
                />

                <InputContainer
                    name='data'
                    type='date'
                    content='Data'
                    value={form.data}
                    onChange={handleChangeInputValue}
                />

                <InputContainer
                    name='descricao'
                    type='text'
                    content='Descrição'
                    value={form.descricao}
                    onChange={handleChangeInputValue}
                />

                <Button content='Confirmar' />
            </Form>
        </Container>
    );
}