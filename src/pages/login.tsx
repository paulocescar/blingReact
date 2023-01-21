import React, { useState, useEffect, useContext} from 'react';
import Topbar from '../ui/topbar'
import '../index.css'
import { Container, Row, Column, Item } from '../components/globalComponets';
import colors from '../constants/colors';
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/customButton';
import CustomLabel from '../components/CustomLabel';
import api from '../services/api'
import AuthContext from '../contexts/authContext';
// import { Container } from './styles';

const Login: React.FC = () => {
    const { login } = useContext(AuthContext)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    useEffect(() => {
        submit()
    },[])

    function submit(){
        const logindata = {
            email: email,
            password: password
        }
        console.log(login)
        api.post('/login', logindata).then((res) => {
            login(res.data.token, res.data.user)
        })
    }

    return (<Container width="100vw" padding='0'>
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
                        <h4>Login</h4>
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
                        <Row display='grid'>
                            <CustomLabel> E-mail:</CustomLabel>
                            <CustomInput width='80%' type="email" name="email" id="email" className='inputFocus'
                                        onChange={(e) => setEmail(e.target.value)}/>
                        </Row>

                        <Row display='grid'>
                            <CustomLabel> Password:</CustomLabel>
                            <CustomInput width='80%' type="password" name="password" id="password"
                                        onChange={(e) => setPassword(e.target.value)}/>
                        </Row>

                        <Row justifyContent='center'>
                            <CustomButton title='entrar' 
                                            backgroundColor={colors.sucess}
                                            borderRadius="5px"
                                            padding='5px 10px 5px 10px'
                                            borderColor='#fff0'
                                            cursor='pointer'
                                            onClick={() => submit()}>Login
                                
                            </CustomButton>
                        </Row>
                </Row>
            </Container>
        </Container>
    )
}

export default Login;