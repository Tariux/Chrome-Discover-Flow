


import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from '../components/Home'
import Setting from '../components/Setting'
import SearchProject from '../components/SearchProject'
import RecommendedProjects from '../components/RecommendedProjects'
import Notifications from '../components/Notifications'
import Auth from '../components/Auth'



class Router extends React.Component{
    render(){
        return (
            <BrowserRouter>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="home" element={<Home />} />
                  <Route path="setting" element={<Setting />} />
                  <Route path="searchproject" element={<SearchProject />} />
                  <Route path="recommended" element={<RecommendedProjects />} />
                  <Route path="notifications" element={<Notifications />} />
                  <Route path="auth" element={<Auth />} />
                </Route>
              </Routes>
            </BrowserRouter>
          );
        
    }
}

export default Router;