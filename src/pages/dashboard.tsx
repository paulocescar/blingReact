import React, { useState, useEffect, useContext} from 'react';
import { Container, Row, Column, Item } from '../components/globalComponets';
import colors from '../constants/colors';
import Topbar from '../ui/topbar'
import AuthContext from '../contexts/authContext';

const Dashboard: React.FC = () => {
  const { user } = useContext(AuthContext);
  return (
    <Container width="100vw" padding='0'>
      <Topbar></Topbar>
            <Container 
                    margin="20px 40% 0 30%"
                    width='auto'>
                <Row backgroundColor={colors.gray+"25"} 
                    height="35px" 
                    width='auto' 
                    borderRadius="10px 10px 0 0"
                    justifyContent='center'
                    padding='0 0 20px 0'
                    border="1px solid #ccc"
                    fontFamily='Roboto-Regular'>
                        <h4>Bem vindo, {user ? user.name : 'desconhecido'}</h4>
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

                </Row>
            </Container>
    </Container>
  );
}

export default Dashboard;