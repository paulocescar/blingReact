import React, { useState, useContext, useEffect} from 'react';
import { Container, Row, Column, Item } from '../components/globalComponets';
import colors from '../constants/colors'
import CustomButton from '../components/customButton'
import { Link } from 'react-router-dom';
import AuthContext from '../contexts/authContext';
import { useNavigate } from 'react-router-dom';

const Topbar: React.FC = () => {
    const navigate = useNavigate();
    const { isLoggedIn, user, logout } = useContext(AuthContext)

    useEffect(() => {
        if(!isLoggedIn){
            navigate('/login')
        }
    },[isLoggedIn])
    return (
        <Container width="99vw" height='45px' backgroundcolor='white' padding='0 1% 0 0' borderBottom='0.1rem solid #ccc'>
            <Row width='95vw' justifyContent='space-between' display='inline-flex'>
                <Column width='auto'> 
                    <Link to ="/">
                        <Item color="#444" cursor='pointer' fontSize='18px' fontFamily='Roboto-Regular'>Home</Item>
                    </Link>
                </Column>

                <Column width='auto'> 
                    <Item color={user ? "#444" : "#FFF"} width="auto" cursor='pointer'>
                        {user && user.name ? 
                        <Row display='inline-flex'>
                        {user.name} 
                        <CustomButton title='logar' 
                        backgroundColor={colors.danger}
                        borderRadius="5px"
                        margin="0 0 10px 10px"
                        borderColor='#fff0'
                        cursor='pointer'
                        onClick={() => {logout(); navigate('/');}}>Sair</CustomButton>
                        </Row>
                        :
                        <Link to ="/login">
                            <CustomButton title='logar' 
                                        backgroundColor={colors.Primary}
                                        borderRadius="5px"
                                        padding='5px 10px 5px 10px'
                                        borderColor='#fff0'
                                        cursor='pointer'>Login</CustomButton>
                        </Link>
                        }
                    </Item>
                </Column>
            </Row>
        </Container>
    );
}

export default Topbar;