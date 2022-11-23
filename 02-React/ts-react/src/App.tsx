import {Button} from './components/Button';
import {Inputs} from './components/Inputs';
import { Layout } from './components/Layout';
import styled from 'styled-components'

const Box = styled.div`
  background-color: orange;
  border-radius: 25px;
  padding-left: 15px;
`

function App() {
  return (
    <>
    <Layout>
      <Box>
      <h1>Faça o Login:</h1>
      </Box>
      <Inputs id='emailInput' label='Email:' htmlFor='emailInput'></Inputs>
      <Inputs id='passwordInpput' label='Senha:' htmlFor='passwordInpput' type='password'></Inputs>
      <Button />
    </Layout>
  </>
  );
}

export default App;
