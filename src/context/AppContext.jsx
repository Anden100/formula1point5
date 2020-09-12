import React, { createContext, useEffect, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log('Fetching...');
        fetch('/formula1point5/2020.json').then(res => res.json()).then(d => {
            console.log(data);
            setData(d);
        });
    }, []);

    const { Provider } = AppContext;

    return (
        <Provider value={data}>
            { children }
        </Provider>
    )
}