
import './App.scss';
import Section from './Section';
import logoNetflix from './assets/img/logo2.png'

function App() {
  return (
    <div className="App">
        <img id="logo" src={logoNetflix} alt="logo_netflix" width="15%"/>
      <Section />
    </div>
  );
}

export default App;
