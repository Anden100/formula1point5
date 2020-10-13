import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [data, setData] = useState({});

    const fetchYear = async year => {
        console.log(year);
        console.log(data);    
        if (data[year]) {
            return data[year];
        }
        const url = `https://raw.githubusercontent.com/Anden100/formula1point5/master/dump/data/${year}.json`;
        const res = await fetch(url);
        const d = await res.json();
        setData({...data, [year]: d});
        return d;
    }

    const { Provider } = AppContext;

    return (
        <Provider value={fetchYear}>
            { children }
        </Provider>
    )
}