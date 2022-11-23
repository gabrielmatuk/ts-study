import {Card} from './components/Card'
import { Layout} from './components/Layout';

function App() {
  return (
    <>
  <Layout>
      Hello world
     <Card id={2} paragraph='Teste' details='TS P FRONT'/>
    </Layout>
  </>
  );

}

export default App;
