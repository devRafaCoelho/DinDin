import React, { useEffect } from 'react';
import profileIcon from '../../assets/profile-icon.svg';
import logOutIcon from '../../assets/log-out-icon.svg';
import { getItem, logOut } from '../../utils/storage';
import { Container, SubContainer } from './styles';

export default function ProfileHeader({ setOpenModalEditProfile, openModalEditRegister }) {
    useEffect(() => {

    }, [openModalEditRegister]);

    return (
        <Container>
            <SubContainer>
                <img onClick={setOpenModalEditProfile} src={profileIcon} alt="profile-icon" />
                <p>{getItem('nome')}</p>
            </SubContainer>

            <img onClick={logOut} src={logOutIcon} alt="log-out-icon" />
        </Container>
    );
}