import './App.css';
import FillContacts from './components/Contacts';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <FillContacts />
      </div>
    </HashRouter>
  );
}

export default App;
