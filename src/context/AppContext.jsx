import React, { createContext, useEffect, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const url = 'https://raw.githubusercontent.com/Anden100/formula1point5/master/public/2020.json';
        // const url = '/formula1point5/2020.json';
        console.log('Fetching...');
        fetch(url).then(res => res.json()).then(d => {
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