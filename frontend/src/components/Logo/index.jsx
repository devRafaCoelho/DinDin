import React from 'react';
import { Container } from './styles';
import logo from '../../assets/logo.png';

export default function Logo() {
    return (
        <Container src={logo} alt='logo' />
    );
}