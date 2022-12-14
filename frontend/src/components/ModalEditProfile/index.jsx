import React from 'react';
import FormEditProfile from '../FormEditProfile';
import { Container } from './styles';

export default function ModalEditProfile({ closeModalEditProfile }) {
    return (
        <Container>
            <FormEditProfile closeModalEditProfile={closeModalEditProfile} />
        </Container>
    );
}