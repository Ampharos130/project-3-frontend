import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Index from './pages/Index';
import Show from './pages/Show'
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Index />
      
      <Footer />
    </div>
  );
}

export default App;
