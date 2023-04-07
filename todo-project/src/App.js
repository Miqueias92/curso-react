import './App.css';

import AnotherComponent from './components/AnotherComponent';
import FirstComponent from './components/FirstComponent';
import Images from './components/Images'; 
import Hooks from './components/Hooks';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <FirstComponent/>
      <AnotherComponent/>
      <Images/>
      <Hooks/>
    </div>
  );
}

export default App;
