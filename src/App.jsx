import React from 'react';
import DriverStandings from './routes/DriverStandings';
import TopBar from './components/TopBar';
import { Switch, Route, HashRouter } from 'react-router-dom';
import ConstructorStandings from './routes/ConstructorStandings';
import Races from './routes/Races';
import { AppProvider } from './context/AppContext';
import RaceResults from './routes/RaceResults';
import FastestLaps from './routes/FastestLaps';

function App() {
    return (
        <AppProvider>
            <HashRouter basename='/'>
                <div className="antialiased text-gray-900 bg-gray-100 h-screen overflow-hidden">
                    <TopBar />
                    <div className="pt-4 pb-16 sm:px-4 h-screen overflow-auto">
                        <Switch>
                            <Route exact path='/' component={DriverStandings} />
                            <Route exact path='/results' component={DriverStandings} />
                            <Route path='/results/drivers' component={DriverStandings} />
                            <Route path='/results/constructors' component={ConstructorStandings} />
                            <Route exact path='/results/races' component={Races} />
                            <Route path='/results/races/:slug' component={RaceResults} />
                            <Route exact path='/results/fastestlap' component={FastestLaps} />
                        </Switch>
                    </div>
                </div>
            </HashRouter>
        </AppProvider>
    );
}

export default App;
