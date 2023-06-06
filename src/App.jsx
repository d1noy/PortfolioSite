import './App.css';
import Header from './Header/Header';
import { Route, Routes } from 'react-router-dom';
import Main from './Main/Main';
import About from './About/About';
import Skills from './Skiils/Skills';
import Contacts from './Contacts/Contacts';
import Portfolio from './Portfolio/Portfolio';
function App() {
  return (
    <>
    <div className='App'>
      <Header />
      <main className='main'>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/skills' element={<Skills />}></Route>
          <Route path='/portfolio' element={<Portfolio />}></Route>
          <Route path='/contacts' element={<Contacts />}></Route>
        </Routes>
      </main>
      </div>
    </>
  );
}

export default App;
