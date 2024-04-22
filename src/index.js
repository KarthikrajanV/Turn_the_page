import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import ProtectedRoute from './utils/ProtectedRoute';
import ChatPage from './components/ChatPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute/>}>
            <Route path='/home' element={<ChatPage/>}/>
        </Route>
           <Route path='/' element={<App/>} />
            <Route path='/login' element={<Login/>} />
            <Route path="*" element={<Navigate to="/"  />} />
         
         
      </Routes>
  </BrowserRouter>
);


