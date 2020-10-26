import React from 'react';
import { Table, TableHead, TableHeader, TableBody, TableRow, TableCell } from './Table';

export function RaceResultsTable(props) {
    return (
        <div className={'flex-1 ' + props.className}>
            <h2 className="text-xl mx-6 lg:mx-0 md:text-2xl">{props.year + ' ' + props.name + ' - Race Results'}</h2>
            <Table className="mt-4">
                <TableHead>
                    <TableHeader>Pos</TableHeader>
                    <TableHeader className="hidden lg:table-cell">No</TableHeader>
                    <TableHeader>Driver</TableHeader>
                    <TableHeader className="hidden md:table-cell">Car</TableHeader>
                    <TableHeader>Laps</TableHeader>
                    <TableHeader className="hidden sm:table-cell">Time/Retired</TableHeader>
                    <TableHeader className="text-right pr-4">Pts</TableHeader>
                </TableHead>
                <TableBody>
                    {props.results && props.results.map(s => (
                        <TableRow key={s.driver.abbr}>
                            <TableCell>{s.pos}</TableCell>
                            <TableCell className="hidden lg:table-cell">{s.driver.number}</TableCell>
                            <TableCell className="text-gray-700">
                                <span className="hidden md:inline">{s.driver.first + ' '}</span>
                                <span className="hidden sm:inline">{s.driver.last}</span>
                                <span className="sm:hidden">{s.driver.abbr}</span>
                            </TableCell>
                            <TableCell className="hidden md:table-cell text-xs uppercase">{s.car}</TableCell>
                            <TableCell>{s.laps}</TableCell>
                            <TableCell className="hidden sm:table-cell">{s.gap}</TableCell>
                            <TableCell className="text-right pr-4">{s.points}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}


export function FastestLapTable(props) {
    return (
        <div className={'flex-1 ' + props.className}>
            <h2 className="text-xl mx-6 lg:mx-0 md:text-2xl">{props.year + ' ' + props.name + ' - Fastest Laps'}</h2>
            <Table className="mt-4">
                <TableHead>
                    <TableHeader>Pos</TableHeader>
                    <TableHeader className="hidden lg:table-cell">No</TableHeader>
                    <TableHeader>Driver</TableHeader>
                    <TableHeader className="hidden md:table-cell">Car</TableHeader>
                    <TableHeader>Lap</TableHeader>
                    <TableHeader>Time</TableHeader>
                    <TableHeader className="hidden sm:table-cell text-right pr-4">Avg Speed</TableHeader>
                </TableHead>
                <TableBody>
                    {props.laps && props.laps.map(s => (
                        <TableRow key={s.driver.abbr}>
                            <TableCell>{s.pos}</TableCell>
                            <TableCell className="hidden lg:table-cell">{s.driver.number}</TableCell>
                            <TableCell className="text-gray-700">
                                <span className="hidden md:inline">{s.driver.first + ' '}</span>
                                <span className="hidden sm:inline">{s.driver.last}</span>
                                <span className="sm:hidden">{s.driver.abbr}</span>
                            </TableCell>
                            <TableCell className="hidden md:table-cell text-xs uppercase">{s.car}</TableCell>
                            <TableCell>{s.lap}</TableCell>
                            <TableCell>{s.time}</TableCell>
                            <TableCell className="text-right pr-4 hidden sm:table-cell">{s.speed}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export function QualifyingTable(props) {
    return (
        <div className={'flex-1 ' + props.className}>
            <h2 className="text-xl mx-6 lg:mx-0 md:text-2xl">{props.year + ' ' + props.name + ' - Qualifying'}</h2>
            <Table className="mt-4">
                <TableHead>
                    <TableHeader>Pos</TableHeader>
                    <TableHeader className="hidden lg:table-cell">No</TableHeader>
                    <TableHeader>Driver</TableHeader>
                    <TableHeader className="hidden md:table-cell">Car</TableHeader>
                    <TableHeader>Q1</TableHeader>
                    <TableHeader>Q2</TableHeader>
                    <TableHeader>Q3</TableHeader>
                    <TableHeader className="hidden sm:table-cell">Laps</TableHeader>
                </TableHead>
                <TableBody>
                    {props.laps && props.laps.map(s => (
                        <TableRow key={s.driver.abbr}>
                            <TableCell>{s.pos}</TableCell>
                            <TableCell className="hidden lg:table-cell">{s.driver.number}</TableCell>
                            <TableCell className="text-gray-700">
                                <span className="hidden md:inline">{s.driver.first + ' '}</span>
                                <span className="hidden sm:inline">{s.driver.last}</span>
                                <span className="sm:hidden">{s.driver.abbr}</span>
                            </TableCell>
                            <TableCell className="hidden md:table-cell text-xs uppercase">{s.car}</TableCell>
                            <TableCell>{s.Q1}</TableCell>
                            <TableCell>{s.Q2}</TableCell>
                            <TableCell>{s.Q3}</TableCell>
                            <TableCell className="hidden sm:table-cell">{s.laps}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}


export function PracticeResultsTable(props) {
    return (
        <div className={'flex-1 ' + props.className}>
            <h2 className="text-xl mx-6 lg:mx-0 md:text-2xl">{props.year + ' ' + props.name + ' - ' + props.session}</h2>
            <Table className="mt-4">
                <TableHead>
                    <TableHeader>Pos</TableHeader>
                    <TableHeader className="hidden lg:table-cell">No</TableHeader>
                    <TableHeader>Driver</TableHeader>
                    <TableHeader className="hidden md:table-cell">Car</TableHeader>
                    <TableHeader className="">Time</TableHeader>
                    <TableHeader className="hidden sm:table-cell">Laps</TableHeader>
                </TableHead>
                <TableBody>
                    {props.results && props.results.map(s => (
                        <TableRow key={s.driver.abbr}>
                            <TableCell>{s.pos}</TableCell>
                            <TableCell className="hidden lg:table-cell">{s.driver.number}</TableCell>
                            <TableCell className="text-gray-700">
                                <span className="hidden md:inline">{s.driver.first + ' '}</span>
                                <span className="hidden sm:inline">{s.driver.last}</span>
                                <span className="sm:hidden">{s.driver.abbr}</span>
                            </TableCell>
                            <TableCell className="hidden md:table-cell text-xs uppercase">{s.car}</TableCell>
                            <TableCell>{s.time}</TableCell>
                            <TableCell className="hidden sm:table-cell">{s.laps}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}