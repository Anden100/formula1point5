import React from 'react';
import { Link } from 'react-router-dom';
import { Table, TableHead, TableHeader, TableBody, TableRow, TableCell } from '../components/Table';
import { Driver } from '../types/types';

interface DriverStandingsTableProps {
    drivers: Driver[];
}

export default function DriverStandingsTable(props: DriverStandingsTableProps) {
    if (!props.drivers) return null;

    return (
        <Table>
            <TableHead>
                <TableHeader>Pos</TableHeader>
                <TableHeader>Driver</TableHeader>
                <TableHeader className="hidden sm:table-cell">Car</TableHeader>
                <TableHeader className="text-right pr-4">Points</TableHeader>
            </TableHead>
            <TableBody>
                {props.drivers.map(driver => (
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
    )
}