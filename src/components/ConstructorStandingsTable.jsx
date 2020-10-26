import React from 'react';
import { Table, TableHead, TableHeader, TableBody, TableRow, TableCell } from '../components/Table';

export default function DriverStandingsTable(props) {
    if (!props.results.constructors) return null;

    return (
        <Table className="mt-4">
            <TableHead>
                <TableHeader>Pos</TableHeader>
                <TableHeader>Team</TableHeader>
                <TableHeader className='text-right pr-4'>Points</TableHeader>
            </TableHead>
            <TableBody>
                {props.results.constructors.map(s => (
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