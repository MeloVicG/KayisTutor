import './App.css';
import { Header } from './components/Header';
import { Dashboard } from './views/Dashboard';
import { About } from './views/About';
import { Courses } from './components/Courses';
import { Contact } from './views/Contact';
import { Routes, Route } from 'react-router-dom';
import './styles/Main.scss';
import { Footer } from './views/Footer';

function App() {
  return (
    <div className='main-page'>
      <Header/>
      
      <div className="App">
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/courses" element={<Courses/>}/>
            <Route path="/contact" element={<Contact/>}/>
            
        </Routes>
      </div>

      <Footer/>
    </div>
  );
}

export default App;