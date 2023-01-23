import React, { useState, useEffect, useContext} from 'react';
import { Container, Row, Column, Item, ModalComponent } from '../components/globalComponets';
import AuthContext from '../contexts/authContext';
import colors from '../constants/colors';
import Topbar from '../ui/topbar'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton';
import CustomLabel from '../components/CustomLabel';
import api from '../services/api'
import { changeValue } from '../utlis/utils';

const Settings: React.FC = () => {
    const { user, refreshPage } = useContext(AuthContext)
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [apikey, setApikey] = useState("");
    const [settingSave, setSettingSave] = useState(false);
    const [error, setError] = useState(false);
    const [token, setToken] = useState(localStorage.getItem("token"));

    useEffect(() => {
        getSettings()
        function getSettings(){
            api.get('/bling/user', { headers: { 'Authorization': 'Bearer ' + token}
        }).then((res) => {
            if(res.status == 200){
                setNome(res.data.name)
                setEmail(res.data.email)
                setApikey(res.data.api_key)
            }
        }).catch((error) => {
            setError(true)
            console.log(error); //Logs a string: Error: Request failed with status code 404
        });
        }
    },[])

    function submit(){
        const data = {
            name: nome,
            email: email,
            api_key: apikey
        }
        api.post('/bling', data, { headers: { 'Authorization': 'Bearer ' + token}
        }).then((res) => {
            if(res.status == 200){
                setSettingSave(true)
                setError(false)
            }
        }).catch((error) => {
            setError(true)
            setSettingSave(false)
            console.log(error); //Logs a string: Error: Request failed with status code 404
        });
    }
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
                      justifyContent='center'
                      padding='0 10px'
                      border="1px solid #ccc"
                      fontFamily='Roboto-Regular'>
                          <p><h3>Configurações</h3> <span style={{color: colors.gray}}>campos obrigatórios</span> <span style={{color: colors.danger}} title="Obrigatório">*</span></p>
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
                         <CustomLabel width='auto' margin="0 0 10px 10px"> Nome: <span style={{color: colors.danger}} title="Obrigatório">*</span></CustomLabel>
                         <CustomInput width='100%' type="text" name="nome" id="nome" className='inputFocus'
                                    value={nome} 
                                    onChange={(e) => changeValue(e.target.value, setNome)}/>
                     </Row>
                         <Row display='grid'>
                            <CustomLabel width='auto' margin="0 0 10px 10px"> E-mail: <span style={{color: colors.danger}} title="Obrigatório">*</span></CustomLabel>
                            <CustomInput width='100%' type="text" name="email" id="email" className='inputFocus'
                                        value={email} 
                                        onChange={(e) => changeValue(e.target.value, setEmail)}/>
                        </Row>
                         <Row display='grid'>
                            <CustomLabel width='auto' margin="0 0 10px 10px"> Token do Bling: <span style={{color: colors.danger}} title="Obrigatório">*</span></CustomLabel>
                            <CustomInput width='100%' type="password" name="apikey" id="apikey" className='inputFocus'
                                        value={apikey} 
                                        onChange={(e) => changeValue(e.target.value, setApikey)}/>
                        </Row>


                        <Row justifyContent='center'>
                            <CustomButton title='entrar' 
                                            backgroundColor={colors.sucess}
                                            borderRadius="5px"
                                            padding='5px 10px 5px 10px'
                                            borderColor='#fff0'
                                            cursor='pointer'
                                            onClick={() => submit()}>Salvar
                                
                            </CustomButton>
                        </Row>
                        {settingSave ?
                         <Item color={colors.sucess}>Configuração salva com sucesso.</Item>: <></>
                        }
                        {error ?
                         <Item color={colors.danger}>Algo deu errado, tente novamente.</Item>:<></>
                        }
                  </Row>
              </Container>
      </Container>
    );
}

export default Settings;