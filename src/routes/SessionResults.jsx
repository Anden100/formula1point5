import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/Table';
import Card from '../components/Card';

function SideNav(props) {
    return (
        <div className={props.className}>
            <ul className="text-gray-700 space-y-2">
                {props.links.map(link => (
                    <li key={link.href}>
                        <NavLink exact to={'/results/races/' + props.slug + link.href} activeClassName="font-semibold text-gray-900" className="w-full block hover:underline">{link.session}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}

function DesktopDropDown(props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={props.className}>
            <button onClick={() => setIsOpen(!isOpen)} className="flex items-baseline justify-between block text-gray-700 hover:text-gray-900 text-lg tracking-wide transition-font duration-200">
                <div>Race</div>
                <div>
                    {isOpen ?
                        <svg className="ml-1 w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg> :
                        <svg className="ml-1 w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    }
                </div>
            </button>

            { isOpen &&
                <button onClick={() => setIsOpen(false)} className="top-0 top-0 right-0 bottom-0 left-0 h-full w-full opacity-0 cursor-default"></button>
            }

            { isOpen && <div onClick={() => { setIsOpen(false) }} className="absolute py-2 w-48 text-sm bg-white rounded-md shadow-lg transition duration-500">
                {props.races.map(race => (
                    <NavLink key={race.slug} to={'/results/races/' + race.slug} className="block px-4 py-2 hover:bg-red-600 hover:text-white transition duration-200">{race.name}</NavLink>
                ))}
            </div>}
        </div>
    )
}

function MobileRaceSelect(props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={props.className}>
            <div className="items-center mx-6">
                <button onClick={() => setIsOpen(!isOpen)} to="/results" className="flex items-baseline justify-between block text-gray-700 hover:text-gray-900 text-lg tracking-wide transition-font duration-200">
                    <div>Race</div>
                    <div>
                        {isOpen ?
                            <svg className="ml-1 w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                            </svg> :
                            <svg className="ml-1 w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        }
                    </div>
                </button>
            </div>
            {isOpen &&
                <div onClick={() => setIsOpen(false)} className="mt-2 text-sm bg-gray-200 w-full">
                    {props.races.map(race => (
                        <NavLink key={race.slug} to={'/results/races/' + race.slug} className="block px-6 py-2 hover:bg-red-600 hover:text-white transition duration-200">{race.name}</NavLink>
                    ))}
                </div>
            }
        </div>
    )
}

function MobileSessionSelect(props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={props.className}>
            <div className="items-center mx-6">
                <button onClick={() => setIsOpen(!isOpen)} to="/results" className="flex items-baseline justify-between block text-gray-700 hover:text-gray-900 text-lg tracking-wide transition-font duration-200">
                    <div>Session</div>
                    <div>
                        {isOpen ?
                            <svg className="ml-1 w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                            </svg> :
                            <svg className="ml-1 w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        }
                    </div>
                </button>
            </div>
            {isOpen &&
                <div onClick={() => setIsOpen(false)} className="mt-2 text-sm bg-gray-200 w-full">
                    {props.links.map(link => (
                        <NavLink key={link.href} to={'/results/races/' + props.slug + link.href} className="block px-6 py-2 hover:bg-red-600 hover:text-white transition duration-200">{link.session}</NavLink>
                    ))}
                </div>
            }
        </div>
    )
}

function RaceResultsTable(props) {
    return (
        <div className={'flex-1 ' + props.className}>
            <h2 className="text-xl mx-6 lg:mx-0 md:text-2xl">{'2020 ' + props.name + ' - Race Results'}</h2>
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

function FastestLapTable(props) {
    return (
        <div className={'flex-1 ' + props.className}>
            <h2 className="text-xl mx-6 lg:mx-0 md:text-2xl">{'2020 ' + props.name + ' - Fastest Laps'}</h2>
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

function QualifyingTable(props) {
    return (
        <div className={'flex-1 ' + props.className}>
            <h2 className="text-xl mx-6 lg:mx-0 md:text-2xl">{'2020 ' + props.name + ' - Qualifying'}</h2>
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

function PracticeResultsTable(props) {
    return (
        <div className={'flex-1 ' + props.className}>
            <h2 className="text-xl mx-6 lg:mx-0 md:text-2xl">{'2020 ' + props.name + ' - ' + props.session}</h2>
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

export default function SessionResults(props) {
    const [results, setResults] = useState(null);
    const context = useContext(AppContext);

    useEffect(() => {
        async function fetchData() {
            const r = await context(2020);
            setResults(r);
        }
        fetchData();
    }, [context])

    if (!results) {
        return null;
    }

    const race = results.races ? results.races.find(race => race.slug === props.match.params.slug) : null;

    const links = [];
    const sessions = [
        { key: 'race_results', session: 'Race Results', href: '/raceresults', component: RaceResultsTable },
        { key: 'fastest_laps', session: 'Fastest Laps', href: '/fastestlaps', component: FastestLapTable },
        { key: 'qualifying', session: 'Qualifying', href: '/qualifying', component: QualifyingTable },
        { key: 'practice3', session: 'Practice 3', href: '/practice3', component: PracticeResultsTable },
        { key: 'practice2', session: 'Practice 2', href: '/practice2', component: PracticeResultsTable },
        { key: 'practice1', session: 'Practice 1', href: '/practice1', component: PracticeResultsTable },
    ]
    if (race) {
        if (race.results) {
            sessions.forEach(s => {
                if (s.key in race.results) {
                    links.push({
                        session: s.session,
                        href: s.href,
                        component: s.component
                    })
                }
            });
        }
    }

    return (
        <Card className="lg:flex lg:px-8 pt-4">
            {race && <div className="lg:hidden pt-2">
                <MobileRaceSelect races={results.races} />
                <MobileSessionSelect className="mt-4" slug={race.slug} links={links} />
            </div>}
            {race && <div className="hidden lg:block w-1/6 mt-4">
                <div>
                    <DesktopDropDown className="" races={results.races} />
                    <SideNav className="mt-8" slug={race.slug} links={links} />
                </div>
            </div>}
            {race && <div className="flex-1 mt-4">
                <Switch>
                    <Route exact path={'/results/races/' + race.slug}>
                        { race && <Redirect to={'/results/races/' + race.slug + links[0].href} /> }
                    </Route>
                    <Route exact path={'/results/races/' + race.slug + '/raceresults'}>
                        <RaceResultsTable name={race.name} results={race.results.race_results} />
                    </Route>
                    <Route exact path={'/results/races/' + race.slug + '/fastestlaps'}>
                        <FastestLapTable name={race.name} laps={race.results.fastest_laps} />
                    </Route>
                    <Route exact path={'/results/races/' + race.slug + '/qualifying'}>
                        <QualifyingTable name={race.name} laps={race.results.qualifying} />
                    </Route>
                    <Route exact path={'/results/races/' + race.slug + '/practice1'}>
                        <PracticeResultsTable name={race.name} session={'Practice 1'} results={race.results.practice1} />
                    </Route>
                    <Route exact path={'/results/races/' + race.slug + '/practice2'}>
                        <PracticeResultsTable name={race.name} session={'Practice 2'} results={race.results.practice2} />
                    </Route>
                    <Route exact path={'/results/races/' + race.slug + '/practice3'}>
                        <PracticeResultsTable name={race.name} session={'Practice 3'} results={race.results.practice3} />
                    </Route>
                </Switch>
            </div>}
        </Card>
    )
}