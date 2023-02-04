import React, { useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, RowJSX, Column, Item, ModalComponent, CustomTable, CustomTH, CustomTR, CustomTD } from '../../components/globalComponets';
import AuthContext from '../../contexts/authContext';
import colors from '../../constants/colors';
import Topbar from '../../ui/topbar'
import CustomInput from '../../components/CustomInput'
import CustomSelect from '../../components/CustomSelect'
import CustomButton from '../../components/CustomButton';
import CustomLabel from '../../components/CustomLabel';
import api from '../../services/api'
import { changeValue } from '../../utlis/utils';

interface categoriesItem {
  id?: number,
  descricao: string,
  idCategoriaPai?: number,
  categoria_pai: categoriesPaiItem
}
interface categoriesPaiItem {
  id?: number,
  descricao?: string,
  idCategoriaPai?: number
}

const CategoriesList: React.FC = () => {
  const { refreshPage, logout } = useContext(AuthContext)
  const [pages, setPages] = useState(10);
  const [descricao, setDescricao] = useState("");
  const [idCategoriaPai, setIdCategoriaPai] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [categories, setCategories] = useState<categoriesItem[]>([])
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() =>{
    getCategories(10)
  },[])
  

  function getCategories(pages: number){
    api.get('/categories/pages/'+pages, {headers: { 'Authorization': 'Bearer ' + token
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
  const [selectedOption, setSelectedOption] = useState<categoriesItem>();
  
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = parseInt(event.target.value);
    setPages(selectedValue)
    getCategories(selectedValue)
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
                        <Column>
                          <h3>Categorias</h3>
                        </Column>
                        <Column 
                            padding='15px 10px'>
                            <Link to ="/add-categories" style={{textDecoration: "none"}}>
                            <CustomButton title='entrar' 
                                            backgroundColor={colors.sucess}
                                            borderRadius="5px"
                                            padding='5px 10px 5px 10px'
                                            borderColor='#fff0'
                                            cursor='pointer'
                                            >+ Categorias</CustomButton>
                            </Link>
                        </Column>
                  </Row>
  
                  <CustomTable
                  padding='20px 0 20px 0'>
                    <CustomTR>
                      <CustomSelect value={pages} onChange={handleChange}  margin="0 0 10px 10px" backgroundColor='white'>
                          <option key={0} value={5} style={{color: "#444"}}>5</option>
                          <option key={1} value={10} style={{color: "#444"}} selected>10</option>
                          <option key={2} value={20} style={{color: "#444"}}>20</option>
                          <option key={3} value={50} style={{color: "#444"}}>50</option>
                          <option key={4} value={100} style={{color: "#444"}}>100</option>
                      </CustomSelect>
                    </CustomTR>
                    <CustomTR>
                      <CustomTH width='8%'>#</CustomTH>
                      <CustomTH width='31%'>Descrição</CustomTH>
                      <CustomTH width='31%'>Categoria Pai</CustomTH>
                      <CustomTH width='30%'>Ações</CustomTH>
                    </CustomTR>
                    {categories.map((item: categoriesItem) => 
                    <CustomTR key={item.id}>
                        <CustomTD>{item.id}</CustomTD>
                        <CustomTD>{item.descricao}</CustomTD>
                        <CustomTD>{item.categoria_pai?.descricao ?? "-" }</CustomTD>
                        <CustomTD></CustomTD>
                    </CustomTR>
                        )}
                  </CustomTable>
                  {success ?
                    <Item color={colors.sucess}>Categoria salva com sucesso.</Item>: <></>
                  }
                  {error ?
                    <Item color={colors.danger}>Algo deu errado, tente novamente.</Item>:<></>
                  }
                  
          </Container>
  </Container>
  )
}

export default CategoriesList;

