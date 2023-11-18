import React from 'react';
import Header from './includes/Header';
class Notifications extends React.Component{
    render(){
        return <>
            <div className='extension-section'>
                <Header />
                <div className='section'>
                    <p>Notifications</p>
                </div>
            </div>
        </>
    }
}

export default Notifications;