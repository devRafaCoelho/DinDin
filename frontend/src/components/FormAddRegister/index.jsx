import React, { useState } from 'react';
import InputContainer from '../InputContainer';
import SelectContainer from '../SelectContainer';
import Button from '../Button';
import closeIcon from '../../assets/close-icon.svg';
import { getItem } from '../../utils/storage';
import api from '../../services/api';
import { Container, Header, ButtonContainer, Form } from './styles';

export default function FormAddRegister({ content, closeModalAddRegister, handleAtualizar }) {
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

            await api.post('/transacao', body, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            handleAtualizar(body);
            closeModalAddRegister();
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
                <h1>{content}</h1>
                <img onClick={closeModalAddRegister} src={closeIcon} alt="close-icon" />
            </Header>

            <ButtonContainer>
                <Button
                    content='Entrada'
                    onClick={() => {
                        setStatusEntryButton(true);
                        setStatusExitButton(false);
                    }}
                    background={statusEntryButton ? 'blue' : 'grayBackgroundButton'}
                />

                <Button
                    content='Sa??da'
                    onClick={() => {
                        setStatusEntryButton(false);
                        setStatusExitButton(true);
                    }}
                    background={statusExitButton ? 'red' : 'grayBackgroundButton'}
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
                    content='Descri????o'
                    value={form.descricao}
                    onChange={handleChangeInputValue}
                />

                <Button content='Confirmar' />
            </Form>
        </Container>
    );
}