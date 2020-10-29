import React, { createContext, useState } from 'react';
import { useEffect } from 'react';
import { Season } from '../types/types';

export const AppContext = createContext({} as Season | undefined);

interface AppProviderProps {
    children: React.ReactNode;
}

export const AppProvider = (props: AppProviderProps) => {
    const [results, setResults] = useState<Season | undefined>(undefined);

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
            { props.children }
        </Provider>
    )
}