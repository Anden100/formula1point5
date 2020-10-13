import React, { useContext, useRef, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { AppContext } from '../context/AppContext';

function StandingsDropdown(props) {
    const [isOpen, setIsOpen] = useState(false);
    const nodeRef = useRef(null);

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
        <div className={props.className} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
            <div className="flex items-center">
                <NavLink to="/results" onTouchEnd={(e) => { setIsOpen(!isOpen); e.preventDefault() }} activeClassName='border-white-important' className="flex items-baseline block px-2 py-3 border-b-2 border-red-700 hover:bg-red-900 hover:border-red-900 text-white text-sm tracking-wide transition-colors duration-200">
                    Results
                    <svg className="ml-1 w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </NavLink>
            </div>
            {/* <CSSTransition
                in={isOpen}
                nodeRef={nodeRef}
                timeout={200}
                classNames='flyout'
            > */}
            { isOpen &&
                <div onClick={() => { setIsOpen(false) }} ref={nodeRef} className="absolute py-2 -mt-2 w-48 text-sm bg-white rounded-md shadow-lg transition duration-500">
                    <NavLink to="/results/drivers" className="block px-4 py-2 hover:bg-red-600 hover:text-white transition duration-200">Drivers</NavLink>
                    <NavLink to="/results/constructors" className="block px-4 py-2 hover:bg-red-600 hover:text-white transition duration-200">Constructors</NavLink>
                    <NavLink to="/results/races" className="block px-4 py-2 hover:bg-red-600 hover:text-white transition duration-200">Races</NavLink>
                    <NavLink to="/results/fastestlap" className="block px-4 py-2 hover:bg-red-600 hover:text-white transition duration-200">Fastest Laps</NavLink>
                    {results.races &&
                        <NavLink to={'/results/races/' + results.races[results.races.length - 1].slug} className="block px-4 py-2 hover:bg-red-600 hover:text-white transition duration-200">Season</NavLink>
                    }
                </div>
            }
            {/* </CSSTransition> */}
        </div>
    )
}

export default function TopBar(props) {
    const [isOpen, setIsOpen] = useState(false);
    const nodeRef = useRef(null);

    const [results, setResults] = useState(null);
    const context = useContext(AppContext);

    useEffect(() => {
        async function fetchData() {
            const r = await context(2020);
            setResults(r);
        }
        fetchData();
    }, [context]);

    const [isMobileMenu, setIsMobileMenu] = useState(false);

    return (
        <div className={'w-full ' + props.className}>
            <div className="w-full bg-red-700 flex items-center shadow-md justify-between">
                <NavLink to="/results" className="ml-5 mr-10" href="#">
                    <svg className="h-5 text-white" viewBox="0 0 1070 191" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M247 0c-30.928 0-73.729 17.729-95.598 39.598L0 191h107l91.009-91.009C214.02 83.98 245.356 71 268 71h290.145l71-71H247z" fill="currentColor" />
                        <path d="M266.11 83c-17.673 0-42.136 10.126-54.639 22.616L126 191h101.103l29.309-29.279c7.033-7.025 20.793-12.721 30.734-12.721h192.787L546 83H266.11zM644 0h119.771l-190 190H454L644 0zM660.376 114.6h100.587c56.569 0 100.951.728 101.497 1.637.545.91-.364 2.729-2.001 4.002-2.365 2.001-22.191 2.729-106.044 3.092l-102.952.364L630 145.524h37.106l37.288.182-23.646 22.556L657.102 191l110.046-.546c109.863-.364 110.045-.364 120.231-4.547 16.007-6.367 30.74-16.736 48.566-34.198 16.734-16.736 22.191-24.921 26.01-39.656 2.911-11.642-1.273-22.92-10.731-28.74-6.73-4.184-7.458-4.184-76.214-4.73-38.379-.364-71.01.91-71.01 0 0-.728 5-5.083 6.529-7.276l3.971-4.002h188.2L1070 0H776.06L660.376 114.6z" fill="currentColor" />
                        <path d="M585 191h61.38L684 153h-61.38L585 191z" fill="currentColor" />
                    </svg>
                </NavLink>
                {/* <NavLink to='/calendar' activeClassName='border-white-important' className="px-2 py-3 border-b-2 border-red-700 hover:bg-red-900 hover:border-red-900 text-white text-sm tracking-wide transition-colors duration-200" href="#">
                Calendar
            </NavLink> */}
                <div className="flex flex-1 items-center">
                    <StandingsDropdown className="hidden sm:block" />
                </div>
                {/* <NavLink to='/teams' activeClassName='border-white-important' className="px-2 py-3 border-b-2 border-red-700 hover:bg-red-900 hover:border-red-900 text-white text-sm tracking-wide transition-colors duration-200" href="#">
                Teams
            </NavLink>
            <NavLink to='/drivers' activeClassName='border-white-important' className="px-2 py-3 border-b-2 border-red-700 hover:bg-red-900 hover:border-red-900 text-white text-sm tracking-wide transition-colors duration-200" href="#">
                Drivers
            </NavLink> */}
                <div className="flex items-center">
                    <button onClick={() => setIsMobileMenu(!isMobileMenu)} className="sm:hidden p-3 mr-2">
                        <svg className="text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
            { isMobileMenu && <div onClick={() => setIsMobileMenu(false)} className="mt-2 text-sm bg-gray-200 w-full">
                <NavLink to="/results/drivers" className="block px-6 py-2 hover:bg-red-600 hover:text-white transition duration-200">Drivers</NavLink>
                <NavLink to="/results/constructors" className="block px-6 py-2 hover:bg-red-600 hover:text-white transition duration-200">Constructors</NavLink>
                <NavLink to="/results/races" className="block px-6 py-2 hover:bg-red-600 hover:text-white transition duration-200">Races</NavLink>
                <NavLink to="/results/fastestlap" className="block px-6 py-2 hover:bg-red-600 hover:text-white transition duration-200">Fastest Laps</NavLink>
                {results.races &&
                    <NavLink to={'/results/races/' + results.races[results.races.length - 1].slug} className="block px-6 py-2 hover:bg-red-600 hover:text-white transition duration-200">Season</NavLink>
                }
            </div>}
        </div>
    )
}