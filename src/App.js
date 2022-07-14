import { Route, Routes } from 'react-router';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Kujni from './Pages/Kujni';
import MainPage from './Pages/Main';
import Plakari from './Pages/Plakari';
import TvKomodi from './Pages/Tv Komodi';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<MainPage></MainPage>}></Route>
        <Route path='plakari' element={<Plakari></Plakari>}></Route>
        <Route path='kujni' element={<Kujni></Kujni>}></Route>
        <Route path='tv-komodi' element={<TvKomodi></TvKomodi>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
