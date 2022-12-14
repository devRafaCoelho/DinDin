import React from 'react';
import { Container } from './styles';

export default function Button({ content, onClick, background }) {
    return (
        <Container onClick={onClick} background={background}>
            {content}
        </Container>
    );
}