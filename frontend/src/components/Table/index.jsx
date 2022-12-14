import React, { useState } from 'react';
import TableBody from './TableBody';
import arrowSortIcon from '../../assets/arrowSortIcon.png';
import { Container } from './styles';

export default function Table({ handleModalEditRegister, handleAtualizar, atualizar }) {
    const [sortedTransactions, setSortedtransactions] = useState(false);

    function inverseTransaction() {
        setSortedtransactions(!sortedTransactions);
    }

    return (
        <Container>
            <thead>
                <tr>
                    <th>Data
                        <img
                            src={arrowSortIcon}
                            alt="arrow"
                            onClick={inverseTransaction}
                            style={{ transform: sortedTransactions ? 'rotate(180deg)' : '' }}
                        />
                    </th>
                    <th>Dia da Semana</th>
                    <th>Descrição</th>
                    <th>Categoria</th>
                    <th>Valor</th>
                    <th></th>
                </tr>
            </thead>
            <TableBody
                handleModalEditRegister={handleModalEditRegister}
                handleAtualizar={handleAtualizar}
                atualizar={atualizar}
                sortedTransactions={sortedTransactions}
            />
        </Container>
    );
}