import React from 'react';
import DriverStandings from './routes/DriverStandings';
import TopBar from './components/TopBar';
import { Switch, Route, HashRouter } from 'react-router-dom';
import ConstructorStandings from './routes/ConstructorStandings';
import Races from './routes/Races';
import { AppProvider } from './context/AppContext';
import SessionResults from './routes/SessionResults';
import FastestLaps from './routes/FastestLaps';
import DriverResults from './routes/DriverResults';

function App() {
    return (
        <AppProvider>
            <HashRouter basename='/'>
                <div className="antialiased text-gray-900 bg-gray-100">
                    <TopBar />
                    <div className="mt-12 py-4 sm:px-4">
                        <div className="container mx-auto">
                            <Switch>
                                <Route exact path='/' component={DriverStandings} />
                                <Route exact path='/results' component={DriverStandings} />
                                <Route exact path='/results/drivers' component={DriverStandings} />
                                <Route path='/results/constructors' component={ConstructorStandings} />
                                <Route exact path='/results/races' component={Races} />
                                <Route path='/results/races/:slug/:session' component={SessionResults} />
                                <Route path='/results/races/:slug' component={SessionResults} />
                                <Route exact path='/results/fastestlap' component={FastestLaps} />
                                <Route path='/results/drivers/:slug' component={DriverResults} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </HashRouter>
        </AppProvider>
    );
}

export default App;
