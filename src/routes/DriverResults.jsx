import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/Table';
import { AppContext } from '../context/AppContext';

export default function DriverResults(props) {
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

    const driver = results.drivers ? results.drivers.find(driver => driver.slug === props.match.params.slug) : null;

    const raceResults = [];
    if (results.races) {
        results.races.forEach(race => {
            if (race.results.race_results) {
                const result = race.results.race_results.find(r => r.driver.number === driver.number);
                if (result) {
                    raceResults.push({
                        name: race.name,
                        date: race.date,
                        slug: race.slug,
                        driver: driver,
                        points: result.points,
                        pos: result.pos
                    });
                }
            }
        });
    }

    if (driver === null) {
        return (<> </>)
    }

    return (
        <Card>
            <h2 className="px-4 md:px-6 text-xl md:text-2xl">{driver.first + ' ' + driver.last}</h2>
            <div className="mt-2 sm:px-4 md:px-6">
                <Table className="mt-4">
                    <TableHead>
                        <TableHeader>Grand Prix</TableHeader>
                        <TableHeader>Date</TableHeader>
                        <TableHeader className="hidden sm:table-cell">Car</TableHeader>
                        <TableHeader>Race Position</TableHeader>
                        <TableHeader className="pr-4 text-right">Pts</TableHeader>
                    </TableHead>
                    <TableBody>
                        {raceResults.map(r => (
                            <TableRow key={r.name}>
                                <TableCell className="text-gray-700">
                                    <Link to={'/results/races/' + r.slug} className="hover:underline">{r.name}</Link>
                                </TableCell>
                                <TableCell>{r.date}</TableCell>
                                <TableCell className="hidden sm:table-cell text-xs uppercase">{r.driver.car}</TableCell>
                                <TableCell className="text-gray-700">{r.pos}</TableCell>
                                <TableCell className="pr-4 text-right text-gray-700">{r.points}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </Card>
    )
}