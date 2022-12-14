import React, { useEffect, useState } from 'react';
import editIcon from '../../../assets/edit-icon.svg';
import deleteIcon from '../../../assets/delete-icon.svg';
import api from '../../../services/api';
import { getItem } from '../../../utils/storage';
import { dayWeek, formatedDate } from '../../../utils/dates';
import { Container } from './styles';
import ModalDeleteTransaction from '../../ModalDeleteTransaction';

export default function TableBody({ handleModalEditRegister, handleAtualizar, atualizar, sortedTransactions }) {
    const [transactions, setTransactions] = useState([]);
    const [modalDeleteTransaction, setModalDeleteTransaction] = useState('');

    useEffect(() => {
        async function transactionDatas() {
            try {
                const token = getItem('token');

                const response = await api.get('/transacao', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                setTransactions(response.data);
            } catch (error) {
                console.log(error.response);
            }
        }
        transactionDatas();
    }, [atualizar]);

    async function deleteTransaction(transaction) {
        try {
            const token = getItem('token');

            const response = await api.delete(`/transacao/${transaction.id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setModalDeleteTransaction('');
            handleAtualizar(response);
        } catch (error) {
            console.log(error.response.data);
        }
    }

    useEffect(() => {
        const newTransactions = [...transactions];

        newTransactions.sort((a, b) => {
            const a1 = new Date(a.data).getTime();
            const b1 = new Date(b.data).getTime();

            return sortedTransactions ? a1 - b1 : b1 - a1;
        });

        setTransactions(newTransactions);
    }, [sortedTransactions]);

    return (
        <Container >
            {transactions.map(transaction => {
                const textColor = transaction.tipo === 'entrada' ? '#7B61FF' : '#FA8C10';

                return (
                    <tr key={transaction.id}>
                        <td>{formatedDate(transaction.data)}</td>
                        <td>{dayWeek(transaction.data)}</td>
                        <td>{transaction.descricao === '' ? '-' : transaction.descricao}</td>
                        <td>{transaction.categoria_nome}</td>
                        <td style={{ color: textColor }}>
                            {`R$ ${transaction.valor / 100},00`}
                        </td>
                        <td>
                            <img onClick={() => handleModalEditRegister(transaction)} src={editIcon} alt="edit-icon" />
                            <img onClick={() => setModalDeleteTransaction(transaction.id)} src={deleteIcon} alt="delete-icon" />
                        </td>


                        {(modalDeleteTransaction === transaction.id) && <ModalDeleteTransaction
                            deleteTransaction={() => deleteTransaction(transaction)}
                            closeModalDeleteTransaction={() => setModalDeleteTransaction('')}
                            transactionId={transaction.id}
                            modalDeleteTransaction={modalDeleteTransaction}
                        />}
                    </tr>
                );
            })}
        </Container >
    );
}