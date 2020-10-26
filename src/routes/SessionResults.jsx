import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { RaceResultsTable, FastestLapTable, QualifyingTable, PracticeResultsTable } from '../components/ResultsTables';
import Card from '../components/Card';
import Select from '../components/Select';
import { useState } from 'react';
import { useEffect } from 'react';

export default function SessionResults(props) {
    const history = useHistory();
    const currentSeasonResults = useContext(AppContext);
    const [results, setResults] = useState({});
    const [year, setYear] = useState(2020);
    
    // const [seasons, setSeasons] = useState([]);
    
    useEffect(() => {
        const onMount = async (year) => {
            const res = await fetch(`https://raw.githubusercontent.com/Anden100/formula1point5/master/dump/data/${year}.json`);
            const data = await res.json();
            setResults(data);
        }
        if (year === 2020) {
            setResults(currentSeasonResults);
        }
        else {
            onMount(year);
        }
    }, [year, currentSeasonResults]);

    if (!results.races) {
        return null;
    }

    const slug = props.match.params.slug;
    const race = results.races ? results.races.find(race => race.slug === slug) : null;
    const session = props.match.params.session;

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

    const onChangeRace = e => {
        const race = e.target.value;
        history.push('/results/races/' + race + '/' + session);
    }
    
    const onChangeSession = e => {
        const session = e.target.value;
        history.push('/results/races/' + slug + session);
    }

    const onChangeYear = e => {
        setYear(Number(e.target.value));
    }

    console.log(session);
    console.log(links);

    return (
        <Card className="lg:px-8 pt-4">
            <div className="flex flex-col">
                <Select className='m-2' value={year} onChange={onChangeYear}>
                    <option>2020</option>
                    <option>2019</option>
                </Select>
                <Select className='m-2' value={slug} onChange={onChangeRace}>
                    {results.races.map(race => (
                        <option key={race.slug} value={race.slug}>{race.name}</option>
                    ))}
                </Select>
                <Select className='m-2' value={'/' + session} onChange={onChangeSession}>
                    {links.map(s => (
                        <option key={s.href} value={s.href}>{s.session}</option>
                    ))}
                </Select>
            </div>
            {race && <div className="flex-1 mt-4">
                <Switch>
                    <Route exact path={'/results/races/' + race.slug}>
                        { race && <Redirect to={'/results/races/' + race.slug + links[0].href} /> }
                    </Route>
                    <Route exact path={'/results/races/' + race.slug + '/raceresults'}>
                        <RaceResultsTable name={race.name} year={year} results={race.results.race_results} />
                    </Route>
                    <Route exact path={'/results/races/' + race.slug + '/fastestlaps'}>
                        <FastestLapTable name={race.name} year={year} laps={race.results.fastest_laps} />
                    </Route>
                    <Route exact path={'/results/races/' + race.slug + '/qualifying'}>
                        <QualifyingTable name={race.name} year={year} laps={race.results.qualifying} />
                    </Route>
                    <Route exact path={'/results/races/' + race.slug + '/practice1'}>
                        <PracticeResultsTable name={race.name} year={year} session={'Practice 1'} results={race.results.practice1} />
                    </Route>
                    <Route exact path={'/results/races/' + race.slug + '/practice2'}>
                        <PracticeResultsTable name={race.name} year={year} session={'Practice 2'} results={race.results.practice2} />
                    </Route>
                    <Route exact path={'/results/races/' + race.slug + '/practice3'}>
                        <PracticeResultsTable name={race.name} year={year} session={'Practice 3'} results={race.results.practice3} />
                    </Route>
                </Switch>
            </div>}
        </Card>
    )
}