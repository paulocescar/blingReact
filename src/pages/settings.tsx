import React, { useState, useEffect, useContext} from 'react';
import { Container, Row, Column, Item, ModalComponent } from '../components/globalComponets';
import AuthContext from '../contexts/authContext';
import colors from '../constants/colors';
import Topbar from '../ui/topbar'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/customButton';
import CustomLabel from '../components/CustomLabel';
import api from '../services/api'

const Settings: React.FC = () => {
    const { user, token, refreshPage } = useContext(AuthContext)
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [apikey, setApikey] = useState("");
    const [settingSave, setSettingSave] = useState(false);
    const [error, setError] = useState(false);


    useEffect(() => {
        
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
            }
        }).catch((error) => {
            setError(true)
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
                      justifyContent='space-around'
                      padding='0 10px'
                      border="1px solid #ccc"
                      fontFamily='Roboto-Regular'>
                          <h4>Configurações</h4>
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
                         <CustomLabel width='auto' margin="0 0 10px 10px"> Nome:</CustomLabel>
                         <CustomInput width='100%' type="text" name="nome" id="nome" className='inputFocus'
                                     onChange={(e) => setNome(e.target.value)}/>
                     </Row>
                         <Row display='grid'>
                            <CustomLabel width='auto' margin="0 0 10px 10px"> E-mail:</CustomLabel>
                            <CustomInput width='100%' type="text" name="email" id="email" className='inputFocus'
                                        onChange={(e) => setEmail(e.target.value)}/>
                        </Row>
                         <Row display='grid'>
                            <CustomLabel width='auto' margin="0 0 10px 10px"> Token do Bling:</CustomLabel>
                            <CustomInput width='100%' type="text" name="apikey" id="apikey" className='inputFocus'
                                        onChange={(e) => setApikey(e.target.value)}/>
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