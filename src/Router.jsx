import { BrowserRouter, Routes, Route } from 'react-router-dom';


import AdminView from './views/AdminView';
import DetailView from './views/DetailView';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import ErrorView from './views/ErrorView';

import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';

import './App.css'


const Router = ()=> {

  return <BrowserRouter>
  <Navbar />
  <main>
  <Routes>
      <Route path='/' element={<HomeView />} />
      <Route path='/detalle' element={<DetailView />} />
      <Route path='/login' element={<LoginView />} />
      <Route path='/admin' element={<AdminView />} />
      <Route path='*' element={<ErrorView />} />
  </Routes>
  </main>
  <Footer />
  </BrowserRouter>;
}

export default Router
