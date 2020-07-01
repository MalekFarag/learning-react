import React from 'react';
import './App.css';

function Message({name, text}){
    return(
        <div className='msg'>
            <h4>{name}</h4>
            <p>{text}</p>
        </div>
    );
}

export default Message;