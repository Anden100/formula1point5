import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableHeader, TableHead, TableRow } from '../components/Table';
import Card from '../components/Card';

export default function DriverStandings() {
    const data = useContext(AppContext);

    return (
        <Card>
            <h2 className="px-4 md:px-6 text-xl md:text-2xl">2020 Race Results</h2>
            <div className="mt-2 sm:px-4 md:px-6">
                <Table className="mt-4">
                    <TableHead>
                        <TableHeader className="">Grand Prix</TableHeader>
                        <TableHeader className="hidden md:table-cell">Date</TableHeader>
                        <TableHeader className="">Winner</TableHeader>
                        <TableHeader>Car</TableHeader>
                        <TableHeader className="hidden xs:table-cell">Laps</TableHeader>
                        <TableHeader className="hidden lg:table-cell">Time</TableHeader>
                    </TableHead>
                    <TableBody>
                        {data.races && data.races.map(race => (
                            <>
                                {race.winner && <TableRow key={race.name}>
                                    <TableCell className="">
                                        <Link to={'/results/races/' + race.slug} className="hover:underline">{race.name}</Link>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">{race.date}</TableCell>
                                    <TableCell className="text-gray-700">
                                        <span className="hidden lg:inline">{race.winner.first + ' '}</span>
                                        <span className="hidden sm:inline">{race.winner.last}</span>
                                        <span className="sm:hidden">{race.winner.abbr}</span>
                                    </TableCell>
                                    <TableCell className="text-xs uppercase">{race.car}</TableCell>
                                    <TableCell className="hidden xs:table-cell">{race.laps}</TableCell>
                                    <TableCell className="hidden lg:table-cell">{race.time}</TableCell>
                                </TableRow>}
                            </>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </Card>
    )
}