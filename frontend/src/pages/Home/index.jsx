import React, { useEffect, useState } from 'react';

import filterIcon from '../../assets/filter-icon.svg'

import Logo from '../../components/Logo';
import ProfileHeader from '../../components/ProfileHeader'
import Resume from '../../components/Resume';
import Table from '../../components/Table';
import Button from '../../components/Button';
import ModalEditProfile from '../../components/ModalEditProfile';
import ModalAddRegister from '../../components/ModalAddRegister';
import ModalEditRegister from '../../components/ModalEditRegister';

import {
    Container,
    Header,
    Body,
    BodyContainer,
    ToFilter,
    ContentContainer,
    ContentSubContainer,
    ResumeContainer
} from './styles';

export default function PaginaHome() {
    const [openModalEditProfile, setOpenModalEditProfile] = useState(false);
    const [openModalAddRegister, setOpenModalAddRegister] = useState(false);
    const [openModalEditRegister, setOpenModalEditRegister] = useState(false);
    const [currentTransaction, setCurrentTransaction] = useState(null);
    const [atualizar, setAtualizar] = useState([]);

    function handleAtualizar(data) {
        setAtualizar(data);
    }

    useEffect(() => {

    }, [atualizar]);

    function handleModalEditRegister(transaction) {
        setOpenModalEditRegister(!openModalEditRegister);
        setCurrentTransaction(transaction);
    }

    return (
        <Container>
            <Header>
                <Logo />
                <ProfileHeader
                    setOpenModalEditProfile={() => setOpenModalEditProfile(true)}
                    openModalEditRegister={openModalEditRegister}
                />
            </Header>

            <Body>
                <BodyContainer>
                    <ToFilter>
                        <img src={filterIcon} alt="filter-icon" />
                        <span>Filtrar</span>
                    </ToFilter>

                    <ContentContainer>
                        <ContentSubContainer>
                            <Table
                                handleModalEditRegister={handleModalEditRegister}
                                handleAtualizar={handleAtualizar}
                                atualizar={atualizar}
                            />
                        </ContentSubContainer>

                        <ResumeContainer>
                            <Resume />
                            <Button
                                content='Adicionar Registro'
                                onClick={() => setOpenModalAddRegister(true)}
                            />
                        </ResumeContainer>
                    </ContentContainer>
                </BodyContainer>
            </Body>

            {openModalEditProfile &&
                <ModalEditProfile

                    closeModalEditProfile={() => setOpenModalEditProfile(false)}
                />
            }

            {openModalAddRegister &&
                <ModalAddRegister
                    handleAtualizar={handleAtualizar}
                    closeModalAddRegister={() => setOpenModalAddRegister(false)}
                />
            }

            {openModalEditRegister &&
                <ModalEditRegister
                    closeModalEditRegister={() => setOpenModalEditRegister(false)}
                    handleAtualizar={handleAtualizar}
                    currentTransaction={currentTransaction}
                />
            }
        </Container>
    );
}