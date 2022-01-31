import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
