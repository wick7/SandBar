import styled from 'styled-components';
import Beach from './assets/long_beach.jpg';
import Info from './Sections/Info';
import Header from './Sections/Header';
import Nav from './Components/Nav';

const Main = styled.div`
  background: url(${Beach});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left;
  padding: 25px 50px;
`


function App() {
  return (
    <Main>
      <Nav />
      <Header />
      <Info />
    </Main>
  );
}

export default App;
