import React, { createContext, useState } from 'react';
import { useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [results, setResults] = useState({});

    useEffect(() => {
        async function fetchData() {
            const year = 2020;
            const url = `https://raw.githubusercontent.com/Anden100/formula1point5/master/dump/data/${year}.json`;
            const res = await fetch(url);
            const d = await res.json();
            setResults(d);
        }
        fetchData();
    }, []);

    const { Provider } = AppContext;

    return (
        <Provider value={ results }>
            { children }
        </Provider>
    )
}