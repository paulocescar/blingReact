import React, { useState, useEffect, useContext} from 'react';
import { Container, Row, Column, Item } from '../components/globalComponets';
import AuthContext from '../contexts/authContext';
import colors from '../constants/colors';
import Topbar from '../ui/topbar'

const Dashboard: React.FC = () => {
  const { user } = useContext(AuthContext)
  return (
    <Container width="100vw" padding='0'>
      <Topbar></Topbar>
            <Container 
                    justifyContent='space-around'
                    transform="translateX(50%)"
                    margin="0"
                    display="block"
                    width='50%'>
                <Row backgroundColor={colors.gray+"25"} 
                    height="auto" 
                    width='auto' 
                    borderRadius="10px 10px 0 0"
                    justifyContent='space-around'
                    padding='0 10px'
                    border="1px solid #ccc"
                    fontFamily='Roboto-Regular'>
                        <h4>Bem vindo, {user && user.name ? user.name : 'desconhecido'}</h4>
                </Row>

                <Row backgroundColor="#fff" 
                    height="auto" 
                    width='auto' 
                    padding='20px 0 20px 0'
                    borderRadius="0 0 10px 10px"
                    border="1px solid #ccc"
                    display='grid'
                    justifyContent='center'
                    gap="20px 20px">
                      <p>Este dashboard facilitará sua integração com Bling!</p>
                      <p>Siga, os passos a seguir para configurar seu token de acesso do bling para poder utilizar todos os serviços.</p>
                      <p>Clique em Configurações, preencha o token e salve.</p>
                </Row>
            </Container>
    </Container>
  );
}

export default Dashboard;