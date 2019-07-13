import React from 'react';
import './errorMessage.sass'
import img from './error.png';
const ErrorMessage = () => {
    return (
        <>
        <img className="error" src={img} alt="error"></img>
        <span>Something went wrong...</span>
        </>
    )
}

export default ErrorMessage;