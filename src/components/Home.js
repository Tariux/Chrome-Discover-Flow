import React from 'react';
import AppConfig from './AppConfig';
class Home extends React.Component{
    render(){
        return <>
            <div className='extension-section'>
                <AppConfig />
            </div>
        </>
    }
}

export default Home;