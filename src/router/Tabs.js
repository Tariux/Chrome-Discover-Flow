


import React from 'react';
import { Routes, Route } from "react-router-dom";


import Home from '../components/Home'
import Setting from '../components/Setting'
import SearchProject from '../components/SearchProject'
import Notifications from '../components/Notifications'
import Auth from '../components/Auth'
import Header from '../components/includes/Header';



function Tabs(params) {
  return (
    <div className='extension-section'>
      <Header />
      <div className='section'>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="setting" element={<Setting />} />
            <Route path="searchproject" element={<SearchProject />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="auth" element={<Auth />} />
        </Routes>
      </div>
    </div>





  );

}


export default Tabs;