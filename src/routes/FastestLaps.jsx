import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/Table';
import Card from '../components/Card';

export default function DriverStandings() {
    const [results, setResults] = useState(null);
    const context = useContext(AppContext);

    useEffect(() => {
        async function fetchData() {
            const r = await context(2020);
            setResults(r);
        }
        fetchData();
    }, [context]);

    if (!results) {
        return null;
    }


    return (
        <Card>
            <h2 className="px-4 md:px-6 text-xl md:text-2xl">2020 Fastest Laps</h2>
            <div className="mt-2 sm:px-4 md:px-6">
                <Table className="mt-4">
                    <TableHead>
                        <TableHeader>Grand Prix</TableHeader>
                        <TableHeader>Driver</TableHeader>
                        <TableHeader>Car</TableHeader>
                        <TableHeader>Time</TableHeader>
                        <TableHeader>Avg Speed</TableHeader>
                    </TableHead>
                    <TableBody>
                        {results.races && results.races.map(race => (
                            <React.Fragment key={race.slug}>
                                {race.results.fastest_laps && <TableRow key={race.name}>
                                    <TableCell>
                                        <Link to={'/results/races/' + race.slug} className="hover:underline">{race.name}</Link>
                                    </TableCell>
                                    <TableCell className="text-gray-700">
                                        <span className="hidden md:inline">{race.results.fastest_laps[0].driver.first + ' '}</span>
                                        <span className="hidden sm:inline">{race.results.fastest_laps[0].driver.last}</span>
                                        <span className="sm:hidden">{race.results.fastest_laps[0].driver.abbr}</span>
                                    </TableCell>
                                    <TableCell className="text-xs uppercase">{race.results.fastest_laps[0].car}</TableCell>
                                    <TableCell>{race.results.fastest_laps[0].time}</TableCell>
                                    <TableCell>{race.results.fastest_laps[0].speed}</TableCell>
                                </TableRow>}
                            </React.Fragment>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </Card>
    )
}