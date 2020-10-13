import React, { useContext, useState } from 'react';
import { Table, TableHead, TableHeader, TableBody, TableRow, TableCell } from '../components/Table';
import { AppContext } from '../context/AppContext';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

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
            <h2 className="px-4 md:px-6 text-xl md:text-2xl">2020 Driver Standings</h2>
            <div className="mt-2 sm:px-4 md:px-6">
                <Table>
                    <TableHead>
                        <TableHeader>Pos</TableHeader>
                        <TableHeader>Driver</TableHeader>
                        <TableHeader className="hidden sm:table-cell">Car</TableHeader>
                        <TableHeader className="text-right pr-4">Points</TableHeader>
                    </TableHead>
                    <TableBody>
                        { results.drivers && results.drivers.map(driver => (
                            <TableRow key={driver.position}>
                                <TableCell>{driver.position}</TableCell>
                                <TableCell className="text-gray-700 leading-snug">
                                    <Link to={'/results/drivers/' + driver.slug} className="hover:underline">
                                    <div>
                                        <span className="lg:inline">{driver.first + ' '}</span>
                                        <span className="sm:inline">{driver.last}</span>
                                    </div>
                                    <div className="sm:hidden text-gray-600 text-xs uppercase">{driver.car}</div>
                                    </Link>
                                </TableCell>
                                <TableCell className="hidden sm:table-cell text-xs uppercase">{driver.car}</TableCell>
                                <TableCell className="pr-4 text-right text-gray-700">{driver.points}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </Card>
    )
}