import React, { useState, useContext, useEffect} from 'react';
import { Container, Row, Column, Item } from '../components/globalComponets';
import colors from '../constants/colors'
import CustomButton from '../components/CustomButton'
import CustomDiv from '../components/CustomDiv';
import CustomDropdown from '../components/CustomDropdown';
import { Link } from 'react-router-dom';
import AuthContext from '../contexts/authContext';
import { useNavigate } from 'react-router-dom';

const Topbar: React.FC = () => {
    const navigate = useNavigate();
    const { logout, user } = useContext(AuthContext)
    const [isHover, setIsHover] = useState(false);

    function handleMouseEnter(){
        setIsHover(true)
    }

    function handleMouseLeave(){
        setIsHover(false)
    }

    return (
        <Container width="99vw" height='45px' backgroundcolor='white' padding='0 1% 0 0' borderBottom='0.1rem solid #ccc'>
            <Row width='95vw' justifyContent='space-between' display='inline-flex'>
                <Row width='auto' gap='10px 10px'> 
                        {user && user.name ? 
                        <>
                            <Link to ="/dashboard" style={{textDecoration: "none"}}>
                                <Item color="#444" >Dashboard</Item>
                            </Link>   
                            <Link to ="/categories" style={{textDecoration: "none"}} 
                            onMouseEnter={() => handleMouseEnter()}
                            onMouseLeave={() => handleMouseLeave()}>
                                <CustomDiv>
                                    <Item color="#444">Cadastros</Item>
                                    <CustomDropdown 
                                        isHover={isHover}>
                                        <Item color="#444" padding="10px 0 0 0" isHover>Categorias</Item>
                                        <Item color="#444" padding="10px 0 0 0" isHover>Produtos</Item>
                                    </CustomDropdown>
                                </CustomDiv>
                            </Link>   
                            <Link to ="/settings" style={{textDecoration: "none"}}>
                                <Item color="#444">configurações</Item>
                            </Link>  
                        </> 
                            :
                            <Link to ="/" style={{textDecoration: "none"}}>
                                <Item color="#444">Home</Item>
                            </Link>
                    }
                </Row>

                <Column width='auto'> 
                    <Item color={user ? "#444" : "#FFF"}>
                        {user && user.name ? 
                        <Row display='inline-flex'>
                        {user.name} 
                        <CustomButton title='sair' 
                        backgroundColor={colors.danger}
                        borderRadius="5px"
                        margin="0 0 10px 10px"
                        borderColor='#fff0'
                        cursor='pointer'
                        onClick={() => {logout();}}>Sair</CustomButton>
                        </Row>
                        :
                        <Link to ="/login">
                            <CustomButton title='logar' 
                                        borderRadius="5px"
                                        padding='5px 10px 5px 10px'
                                        borderColor='#fff0'
                                        color="#444"
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