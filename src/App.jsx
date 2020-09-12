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
                <div className="flex flex-col antialiased text-gray-900 bg-gray-100 h-screen overflow-hidden">
                    <TopBar />
                    <div className="py-4 sm:px-4 flex-1 overflow-auto">
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
