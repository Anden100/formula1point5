import React, { useContext, useState, useEffect } from 'react';
import Card from '../components/Card';
import { Table, TableHead, TableHeader, TableBody, TableRow, TableCell } from '../components/Table';
import { AppContext } from '../context/AppContext';

export default function ConstructurStandings() {
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
            <h2 className="px-4 md:px-6 text-xl md:text-2xl">2020 Constructor Standings</h2>
            <div className="mt-2 sm:px-4 md:px-6">
                <Table className="mt-4">
                    <TableHead>
                        <TableHeader>Pos</TableHeader>
                        <TableHeader>Team</TableHeader>
                        <TableHeader className='text-right pr-4'>Points</TableHeader>
                    </TableHead>
                    <TableBody>
                        {results.constructors && results.constructors.map(s => (
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
            </div>
        </Card>
    )
}