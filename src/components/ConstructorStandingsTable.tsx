import React from 'react';
import { Constructor } from '../types/types';
import { Table, TableHead, TableHeader, TableBody, TableRow, TableCell } from './Table';

interface DriverStandingsTableProps {
    constructors: Constructor[];
}

export default function DriverStandingsTable(props: DriverStandingsTableProps) {
    if (!props.constructors) return null;

    return (
        <Table className="mt-4">
            <TableHead>
                <TableHeader>Pos</TableHeader>
                <TableHeader>Team</TableHeader>
                <TableHeader className='text-right pr-4'>Points</TableHeader>
            </TableHead>
            <TableBody>
                {props.constructors.map(s => (
                    <TableRow key={s.position}>
                        <TableCell>
                            {s.position}
                        </TableCell>
                        <TableCell className="text-xs uppercase">
                            {s.car}
                        </TableCell>
                        <TableCell className="text-right text-gray-700 pr-4">
                            {s.points}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}