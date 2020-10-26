import React, { useContext } from 'react';
import Card from '../components/Card';
import { AppContext } from '../context/AppContext';
import ConstructorStandingsTable from '../components/ConstructorStandingsTable';

export default function ConstructurStandings() {
    const results = useContext(AppContext);

    return (
        <Card>
            <h2 className="px-4 md:px-6 text-xl md:text-2xl">2020 Constructor Standings</h2>
            <div className="mt-2 sm:px-4 md:px-6">
                <ConstructorStandingsTable results={results} />
            </div>
        </Card>
    )
}