import React from 'react';
import AppConfig from './Setting';
import Header from './includes/Header';
class Home extends React.Component{
    render(){
        return <>
            <div className='extension-section'>
                <Header />
                <div className='section'>
                    <p>Home</p>
                </div>
            </div>
        </>
    }
}

export default Home;