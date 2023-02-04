import React, { useState, useEffect, useContext} from 'react';
import { Container, Row, RowJSX, Column, Item, ModalComponent } from '../components/globalComponets';
import AuthContext from '../contexts/authContext';
import colors from '../constants/colors';
import Topbar from '../ui/topbar'
import CustomInput from '../components/CustomInput'
import CustomSelect from '../components/CustomSelect'
import CustomButton from '../components/CustomButton';
import CustomLabel from '../components/CustomLabel';
import api from '../services/api'
import { changeValue } from '../utlis/utils';

interface categoriesItem {
  id?: number,
  descricao: string
}

const Produtos: React.FC = () => {
  const { refreshPage, logout } = useContext(AuthContext)
  const [descricao, setDescricao] = useState("");
  const [idCategoriaPai, setIdCategoriaPai] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [categories, setCategories] = useState<categoriesItem[]>([])
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() =>{

    function getCategories(){
      api.get('/categories', {headers: { 'Authorization': 'Bearer ' + token
      }}).then((res) => {
          if(res.status == 200){
            setCategories(res.data)
          }
      }).catch((error) => {
          setSuccess(false)
          setError(true)
          console.log(error); //Logs a string: Error: Request failed with status code 404
          if (error.response.status === 401) {
            logout()
        }
      })
    }
    getCategories()
  },[])
  
  const [selectedOption, setSelectedOption] = useState<categoriesItem>();
  
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = parseInt(event.target.value);
    setSelectedOption(categories.find((option) => option.id === selectedValue));
  };
  
  function submit(){
    const data = {
      descricao: descricao,
      idCategoriaPai: idCategoriaPai ? idCategoriaPai : null
    }

    api.post('/categories',data, { headers: { 'Authorization': 'Bearer ' + token}
      }).then((res) => {
          if(res.status == 200){
            setDescricao("")
            setError(false)
            setSuccess(true)
          }
      }).catch((error) => {
          if (error.response.status === 401) {
            logout()
          }
          console.log(error.message); //Logs a string: Error: Request failed with status code 404
          
      }).finally(() => refreshPage() );
    
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
                          <p><h3>Produtos</h3> <span style={{color: colors.gray}}>campos obrigatórios</span> <span style={{color: colors.danger}} title="Obrigatório">*</span></p>
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
                         <CustomLabel width='auto' margin="0 0 10px 10px"> Descricao: <span style={{color: colors.danger}} title="Obrigatório">*</span></CustomLabel>
                         <CustomInput width='100%' require type="text" name="descricao" id="descricao" className='inputFocus'
                                    value={descricao} 
                                    onChange={(e) => changeValue(e.target.value, setDescricao)}/>
                     </Row>
                         <RowJSX display='grid'>
                            <CustomLabel width='auto' margin="0 0 10px 10px"> Categoria Pai: <span style={{color: colors.danger}} title="Obrigatório">*</span></CustomLabel>
                           
                          <CustomSelect value={selectedOption?.id} onChange={handleChange}  margin="0 0 10px 10px">
                              <option key={0} value={0} style={{color: "#444"}}>
                                Nenhuma
                              </option>
                              {categories.map((item: categoriesItem) => 
                                <option key={item.id} value={item.id} style={{color: "#444"}}>
                                  {item.descricao}
                                </option>
                              )}
                          </CustomSelect>
                        </RowJSX>

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
                        {success ?
                         <Item color={colors.sucess}>Categoria salva com sucesso.</Item>: <></>
                        }
                        {error ?
                         <Item color={colors.danger}>Algo deu errado, tente novamente.</Item>:<></>
                        }
                  </Row>
          </Container>
  </Container>
  )
}

export default Produtos;