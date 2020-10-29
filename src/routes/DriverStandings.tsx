import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Card from '../components/Card';
import DriverStandingsTable from '../components/DriverStandingsTable';

export default function DriverStandings() {
    const results = useContext(AppContext);

    if (!results) {
        return null;
    }

    return (
        <Card>
            <h2 className="px-4 md:px-6 text-xl md:text-2xl">2020 Driver Standings</h2>
            <div className="mt-2 sm:px-4 md:px-6">
                <DriverStandingsTable drivers={results.drivers} />
            </div>
        </Card>
    )
}