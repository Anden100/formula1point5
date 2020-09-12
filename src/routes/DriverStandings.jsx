import React, { useContext } from 'react';
import { Table, TableHead, TableHeader, TableBody, TableRow, TableCell } from '../components/Table';
import { AppContext } from '../context/AppContext';
import Card from '../components/Card';

export default function DriverStandings() {
    const results = useContext(AppContext);

    return (
        <Card>
            <h2 className="px-4 md:px-6 text-xl md:text-2xl">2020 Driver Standings</h2>
            <div className="mt-2 sm:px-4 md:px-6">
                <Table>
                    <TableHead>
                        <TableHeader>Pos</TableHeader>
                        <TableHeader>Driver</TableHeader>
                        <TableHeader>Car</TableHeader>
                        <TableHeader className="text-right pr-4">Points</TableHeader>
                    </TableHead>
                    <TableBody>
                        { results.drivers && results.drivers.map(driver => (
                            <TableRow key={driver.position}>
                                <TableCell>{driver.position}</TableCell>
                                <TableCell className="text-gray-700">
                                    <span className="hidden lg:inline">{driver.first + ' '}</span>
                                    <span className="hidden sm:inline">{driver.last}</span>
                                    <span className="sm:hidden">{driver.abbr}</span>
                                </TableCell>
                                <TableCell className="text-xs uppercase">{driver.car}</TableCell>
                                <TableCell className="pr-4 text-right text-gray-700">{driver.points}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </Card>
    )
}