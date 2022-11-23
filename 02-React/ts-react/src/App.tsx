import Inputs from './components/Inputs';
import { Layout } from './components/Layout';

function App() {
  return (
    <>
    <Layout>
      <h1>Faça o Login:</h1>
      <Inputs id='emailInput' label='Email:' htmlFor='emailInput'></Inputs>
      <Inputs id='passwordInpput' label='Senha:' htmlFor='passwordInpput'></Inputs>
    </Layout>
  </>
  );
}

export default App;
