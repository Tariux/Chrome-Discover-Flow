import React from 'react';
import Header from './includes/Header';
class Auth extends React.Component{
    render(){
        return <>
            <div className='extension-section'>
                <Header />
                <div className='section'>
                    <p>Auth</p>
                </div>
            </div>
        </>
    }
}

export default Auth;