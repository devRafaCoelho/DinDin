import React, { useState } from 'react';
import { getItem } from '../../utils/storage';
import api from '../../services/api';

import {
    Container,
    SubContainer,
    Entry,
    Exits,
    Balance
} from './styles';

export default function ResumeTable() {
    const [entry, setEntry] = useState(0);
    const [exit, setExit] = useState(0);

    async function resumeDatas() {
        try {
            const token = getItem('token');

            const response = await api.get('/transacao/extrato', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setEntry(response.data.entrada);
            setExit(response.data.saida);
        } catch (error) {
            console.log(error.response.data);
        }
    }
    resumeDatas();

    return (
        <Container>
            <h3>Resumo</h3>
            <SubContainer>
                <Entry>
                    <h4>Entradas</h4>
                    <strong>{`R$ ${entry / 100},00`}</strong>
                </Entry>

                <Exits>
                    <h4>Saídas</h4>
                    <strong>{`R$ ${exit / 100},00`}</strong>
                </Exits>
            </SubContainer>
            <hr />
            <Balance>
                <h2>Saldo</h2>
                <strong>{`R$ ${(entry - exit) / 100},00`}</strong>
            </Balance>
        </Container>
    );
}