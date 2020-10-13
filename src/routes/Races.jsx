import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableHeader, TableHead, TableRow } from '../components/Table';
import Card from '../components/Card';

export default function RaceResults() {
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
            <h2 className="px-4 md:px-6 text-xl md:text-2xl">2020 Race Results</h2>
            <div className="mt-2 sm:px-4 md:px-6">
                <Table className="mt-4">
                    <TableHead>
                        <TableHeader className="">Grand Prix</TableHeader>
                        <TableHeader className="hidden md:table-cell">Date</TableHeader>
                        <TableHeader className="">Winner</TableHeader>
                        <TableHeader className="hidden sm:table-cell">Car</TableHeader>
                        <TableHeader className="hidden xs:table-cell">Laps</TableHeader>
                        <TableHeader className="hidden lg:table-cell">Time</TableHeader>
                    </TableHead>
                    <TableBody>
                        {results.races && results.races.map(race => (
                            <React.Fragment key={race.slug}>
                                {race.winner && <TableRow key={race.name}>
                                    <TableCell className="">
                                        <Link to={'/results/races/' + race.slug} className="hover:underline">{race.name}</Link>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">{race.date}</TableCell>
                                    <TableCell className="text-gray-700">
                                        <div>
                                            <span className="lg:inline">{race.winner.first + ' '}</span>
                                            <span className="sm:inline">{race.winner.last}</span>
                                        </div>
                                        <div className="sm:hidden text-gray-600 text-xs uppercase">{race.car}</div>
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell text-xs uppercase">{race.car}</TableCell>
                                    <TableCell className="hidden xs:table-cell">{race.laps}</TableCell>
                                    <TableCell className="hidden lg:table-cell">{race.time}</TableCell>
                                </TableRow>}
                            </React.Fragment>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </Card>
    )
}