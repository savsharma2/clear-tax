
import React from 'react';

import './style.scss';


const Button = ({ children,  disabled}) => {
    return (
        <button type='button' disabled={disabled}  className="button">{children}</button>
    );
}

export default Button;