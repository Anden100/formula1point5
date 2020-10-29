export interface Driver {
    first: string;
    last: string;
    abbr: string;
    slug: string;
    number: number;
    car?: string;
    points?: number;
    position?: number;
}

export interface Constructor {
    car: string;
    points: number;
    position: number;
}

export interface Winner {
    first: string;
    last: string;
    abbr: string;
    slug: string;
    number: number;
    car: string;
    points: number;
    position: number;
}

export interface RaceResult {
    pos: any;
    driver: Driver;
    car: string;
    laps: number;
    time: any;
    gap: string;
    points: number;
}

export interface FastestLap {
    pos: number;
    driver: Driver;
    car: string;
    lap: number;
    time_of_day: string;
    time: string;
    speed: number;
}

export interface Qualifying {
    pos: number;
    driver: Driver;
    car: string;
    Q1: string;
    Q2: string;
    Q3: string;
    laps: number;
}

export interface Practice {
    pos: number;
    driver: Driver;
    car: string;
    time: string;
    laps: number;
}

export interface Results {
    race_results?: RaceResult[];
    fastest_laps?: FastestLap[];
    qualifying?: Qualifying[];
    practice3?: Practice[];
    practice2?: Practice[];
    practice1?: Practice[];
}

export interface Race {
    name: string;
    date: string;
    winner: Winner;
    car: string;
    laps: number;
    time: string;
    results: Results;
    slug: string;
}

export interface Season {
    drivers: Driver[];
    constructors: Constructor[];
    races: Race[];
}