import React, { useState, useEffect} from 'react';
import { Container, Row, Column, Item } from '../components/globalComponets';
import colors from '../constants/colors'
import CustomButton from '../components/customButton'
import { Link } from 'react-router-dom';

const Topbar: React.FC = () => {

  return (
    <Container width="99vw" height='45px' backgroundcolor='white' padding='0 1% 0 0' borderBottom='0.1rem solid #ccc'>
        <Row width='95vw' justifyContent='space-between' display='inline-flex'>
            <Column width='auto'> 
                <Item color="#444" cursor='pointer' fontSize='18px' fontFamily='Roboto-Regular'>Title</Item>
            </Column>

            <Column width='auto'> 
                <Item color="#FFF" cursor='pointer'>
                    <Link to ="/login">
                        <CustomButton title='logar' 
                                      backgroundColor={colors.Primary}
                                      borderRadius="5px"
                                      padding='5px 10px 5px 10px'
                                      borderColor='#fff0'
                                      cursor='pointer'>Login</CustomButton>
                    </Link>
                </Item>
            </Column>
        </Row>
    </Container>
  );
}

export default Topbar;