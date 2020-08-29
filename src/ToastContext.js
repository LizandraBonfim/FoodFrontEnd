import React, { createContext, useState } from 'react';

export const ToastUser = createContext();

function ToastContext({ children }) {

    const [message, setMessage] = useState();




    return (
        <ToastUser.Provider
            value={{ message, setMessage }}>
            {children}
        </ToastUser.Provider>)
}

export default ToastContext;
