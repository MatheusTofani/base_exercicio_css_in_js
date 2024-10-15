import EstiloGLobal, { Container } from './style';
import Header from './containers/Header/index'
import HeroTS from './containers/Hero/index';
import ListaVagas from './containers/ListaDeVagas';

function App() {
  return (
    <>
      <EstiloGLobal />

      <Header />
      <HeroTS />
      <Container>
        <ListaVagas />
      </Container>

    </>

  );
}

export default App;
