import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { getItem } from '../../utils/storage';
import { Container } from './styles';

export default function SelectContainer({ name, content, value, onChange }) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function selectDatas() {
            try {
                const token = getItem('token');

                const response = await api.get('/categorias', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                setCategories(response.data);
            } catch (error) {
                console.log(error.response);
            }
        }
        selectDatas();
    }, []);

    return (
        <Container>
            <label htmlFor={name}>{content}</label>
            <select value={value} onChange={onChange} name={name}>
                <option value="" selected disabled>Selecione uma categoria</option>
                {categories.map(category => {
                    return (
                        <option key={category.id} value={category.id} >
                            {category.descricao}
                        </option>
                    );
                })}
            </select>
        </Container>
    );
}