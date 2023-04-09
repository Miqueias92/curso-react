import './App.css';

import AnotherComponent from './components/AnotherComponent';
import FirstComponent from './components/FirstComponent';
import Images from './components/Images'; 
import Hooks from './components/Hooks';
import List from './components/List';
import RenderCond from './components/RenderCond';
import Fragment from './components/Fragment';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <FirstComponent/>
      <AnotherComponent/>
      <Images/>
      <Hooks/>
      <List/>
      <RenderCond x={2} y={10}/>
      <Fragment/>
      <Container>
        <h1>this is the child of the container</h1>
      </Container>
    </div>
  );
}

export default App;
