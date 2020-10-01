const fs = require('fs').promises;

const axios = require('axios');
const cheerio = require('cheerio');

const BASE_URL = 'https://www.formula1.com/';

function timeToMs(time) {
    if (time[0] == '+') {
        const parts = time.slice(1, -1).split(/[.]/);
        return parseInt(parts[0]) * 1000 + parseInt(parts[1]);
    }

    const parts = time.split(/[.:]/);
    const hours = parseInt(parts[0]) * (1000 * 60 * 60);
    const minutes = parseInt(parts[1]) * (1000 * 60);
    const seconds = parseInt(parts[2]) * 1000;
    const milliseconds = parseInt(parts[3]);
    return hours + minutes + seconds + milliseconds;
}

function msToTime(duration) {
    let milliseconds = parseInt(duration % 1000);
    let seconds = Math.floor((duration / 1000) % 60);
    let minutes = Math.floor((duration / (1000 * 60)) % 60);
    let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    milliseconds = String(milliseconds).padStart(3, '0')

    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}

function msToOffset(duration) {
    return '+' + String(duration / 1000) + 's';
}

function parseDriver(c, cell) {
    const names = c(cell).find('span');
    const first = c(names[0]).text().trim();
    const last = c(names[1]).text().trim();
    const abbr = c(names[2]).text().trim();
    const slug = (first + '-' + last).toLowerCase();

    return { first, last, abbr, slug };
}

async function fetch(baseUrl = '', href = '') {
    const res = await axios.get(baseUrl + href);
    return res.data;
}

async function parseFastestLap(teams, html) {
    const c = cheerio.load(html);

    const links = {};
    c('ul.resultsarchive-side-nav').find('a').each((index, element) => {
        links[c(element).text().trim()] = c(element).attr('data-ajax-url');
    });

    cur_pos = 1;
    const results = [];
    c('tbody').find('tr').each((index, element) => {
        const cells = c(element).find('td');
        href = c(c(cells[1]).find('a')[0]).attr('data-ajax-url');
        const driver = parseDriver(c, cells[3]);
        driver.number = Number(c(cells[2]).text().trim());

        pos = c(cells[1]).text().trim();

        const result = {
            pos: pos === 'NC' ? 'NC' : cur_pos,
            driver,
            car: c(cells[4]).text().trim(),
            lap: Number(c(cells[5]).text().trim()),
            time_of_day: c(cells[6]).text().trim(),
            time: c(cells[7]).text().trim(),
            speed: Number(c(cells[8]).text().trim()),
        }

        if (teams.includes(result.car)) {
            results.push(result);
            cur_pos++;
        }
    })

    return [results, links];
}

function parseRaceResults(teams, html) {
    const c = cheerio.load(html);

    const links = {};
    c('ul.resultsarchive-side-nav').find('a').each((index, element) => {
        links[c(element).attr('data-value')] = c(element).attr('data-ajax-url');
    });

    let currentPosition = 1;
    let raceDuration = 0;

    const results = [];
    c('tbody').find('tr').each((index, element) => {
        const cells = c(element).find('td');
        href = c(c(cells[1]).find('a')[0]).attr('data-ajax-url');
        const driver = parseDriver(c, cells[3]);
        driver.number = Number(c(cells[2]).text().trim());

        const pos = c(cells[1]).text().trim();
        const timeString = c(cells[6]).text().trim();
        let time = '';
        if (timeString === '+1 lap') {
            time = timeString;
        } else if (timeString === 'DNF') {
            time = timeString;
        } else if (timeString === 'DNS') {
            time = timeString;
        } else {
            time = raceDuration + timeToMs(c(cells[6]).text().trim());
        }
        raceDuration = raceDuration === 0 ? time : raceDuration;

        const result = {
            pos: pos === 'NC' ? 'NC' : currentPosition,
            driver,
            car: c(cells[4]).text().trim(),
            laps: Number(c(cells[5]).text().trim()),
            time: time,
        }

        if (teams.includes(result.car)) {
            if (isNaN(result.time)) {
                result.gap = result.time;
            } else if (results.length > 0) {
                result.gap = msToOffset(result.time - results[0].time);
            } else {
                result.gap = msToTime(result.time);
            }
            results.push(result);
            currentPosition++;
        }
    })

    return [results, links];
}

function parsePracticeResults(teams, html) {
    const c = cheerio.load(html);

    const links = {};
    c('ul.resultsarchive-side-nav').find('a').each((index, element) => {
        links[c(element).attr('data-value')] = c(element).attr('data-ajax-url');
    });

    cur_pos = 1;
    const results = [];
    c('tbody').find('tr').each((index, element) => {
        const cells = c(element).find('td');
        href = c(c(cells[1]).find('a')[0]).attr('data-ajax-url');
        const driver = parseDriver(c, cells[3]);
        driver.number = Number(c(cells[2]).text().trim());

        pos = c(cells[1]).text().trim();

        const result = {
            pos: pos === 'NC' ? 'NC' : cur_pos,
            driver,
            car: c(cells[4]).text().trim(),
            time: c(cells[5]).text().trim(),
            laps: Number(c(cells[7]).text().trim())
        }

        if (teams.includes(result.car)) {
            results.push(result);
            cur_pos++;
        }
    })

    return [results, links];
}

function parseQualificationResults(teams, html) {
    const c = cheerio.load(html);

    const links = {};
    c('ul.resultsarchive-side-nav').find('a').each((index, element) => {
        links[c(element).text().trim()] = c(element).attr('data-ajax-url');
    });

    cur_pos = 1;
    const results = [];
    c('tbody').find('tr').each((index, element) => {
        const cells = c(element).find('td');
        href = c(c(cells[1]).find('a')[0]).attr('data-ajax-url');
        const driver = parseDriver(c, cells[3]);
        driver.number = Number(c(cells[2]).text().trim());

        pos = c(cells[1]).text().trim();

        const result = {
            pos: cur_pos,
            driver,
            car: c(cells[4]).text().trim(),
            Q1: c(cells[5]).text().trim(),
            Q2: c(cells[6]).text().trim(),
            Q3: c(cells[7]).text().trim(),
            laps: Number(c(cells[8]).text().trim())
        }

        if (teams.includes(result.car)) {
            results.push(result);
            cur_pos++;
        }
    })

    return [results, links];
}

async function getAllRaceResults(teams, season) {
    const racesUrl = `https://www.formula1.com/en/results/jcr:content/resultsarchive.html/${season}/races.html`;

    res = await axios.get(racesUrl);
    const c = cheerio.load(res.data);

    const promises = c('tbody').find('tr').map(async (index, element) => {
        const cells = c(element).find('td');
        const href = c(c(cells[1]).find('a')[0]).attr('data-ajax-url');
        const [results, links] = await parseRaceResults(teams, await fetch(BASE_URL, href));
        const [fastestLaps] = await parseFastestLap(teams, await fetch(BASE_URL, links['fastest-laps']));
        const [qualifying] = await parseQualificationResults(teams, await fetch(BASE_URL, links['qualifying']));

        const race = {
            name: c(cells[1]).text().trim(),
            date: c(cells[2]).text().trim(),
            winner: results.find(r => r.pos == 1).driver,
            car: results.find(r => r.pos == 1).car,
            laps: Number(c(cells[5]).text().trim()),
            time: c(cells[6]).text().trim(),
            results: {
                race_results: results,
                fastest_laps: fastestLaps,
                qualifying,
            }
        }

        if (links['practice-3']) {
            const [practice3] = await parsePracticeResults(teams, await fetch(BASE_URL, links['practice-3']));
            race.results.practice3 = practice3;
        }
        if (links['practice-2']) {
            const [practice2] = await parsePracticeResults(teams, await fetch(BASE_URL, links['practice-2']));
            race.results.practice2 = practice2;
        }
        if (links['practice-1']) {
            const [practice1] = await parsePracticeResults(teams, await fetch(BASE_URL, links['practice-1']));
            race.results.practice1 = practice1;
        }

        return race;
    }).get();

    return Promise.all(promises);
}

function scoring(race, points) {
    drivers = [];
    race.results.race_results.map(res => {
        const driver = res.driver;
        driver.car = res.car;
        if (res.pos <= 10) {
            driver.points = points[res.pos - 1];
        } else {
            driver.points = 0;
        }
        drivers.push(driver);
    });
    
    return drivers;
}

function scoring2010(race) {
    const points = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];
    return scoring(race, points);
}

function scoring2019(race) {
    const points = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];
    drivers = scoring(race, points);
    const fastest = race.results.fastest_laps[0];
    const i = drivers.findIndex(d => d.abbr === fastest.driver.abbr);
    if (drivers[i].points > 0) {
        drivers[i].points++;
    }

    return drivers;
}

const scorings = {
    2010: scoring2010,
    2011: scoring2010,
    2012: scoring2010,
    2013: scoring2010,
    2014: scoring2010,
    2015: scoring2010,
    2016: scoring2010,
    2017: scoring2010,
    2018: scoring2010,
    2019: scoring2019,
    2020: scoring2019,
}

async function updateSeason(season) {
    const params = JSON.parse(await fs.readFile('seasons.json'))[season];
    console.log(params);

    races = await getAllRaceResults(params.teams, season);
    let drivers = [];
    races.map(race => {
        race.slug = race.name.toLowerCase().replace(/\s/g, "-");
        const scores = scorings[season](race);
        scores.forEach(driver => {
            const i = race.results.race_results.findIndex(r => r.driver.abbr === driver.abbr);
            race.results.race_results[i].points = driver.points;

            const j = drivers.findIndex(d => d.abbr === driver.abbr);
            if (j >= 0) {
                drivers[j].points += driver.points;
            } else {
                drivers.push(driver);
            }
        });
    });

    constructors = [];
    drivers = drivers.sort((a, b) => b.points - a.points);
    for (let i = 0; i < drivers.length; i++) {
        drivers[i].position = i + 1;

        const j = constructors.findIndex(c => c.car === drivers[i].car);
        if (j >= 0) {
            constructors[j].points += drivers[i].points;
        } else {
            constructors.push({ car: drivers[i].car, points: drivers[i].points });
        }
    }

    for (let i = 0; i < params.penalties.teams.length; i++) {
        const j = constructors.findIndex(c => c.car === params.penalties.teams[i].team);
        if (j >= 0) {
            constructors[j].points -= params.penalties.teams[i].points;
        }
    }

    for (let i = 0; i < params.penalties.drivers.length; i++) {
        const j = drivers.findIndex(c => c.name === params.penalties.drivers[i].name);
        if (j >= 0) {
            drivers[j].points -= params.penalties.drivers[i].points;
        }
    }
    
    constructors.sort((a, b) => b.points - a.points);
    for (let i = 0; i < constructors.length; i++) {
        constructors[i].position = i + 1;
    }

    const results = {
        drivers: drivers,
        constructors: constructors,
        races: races
    }

    fs.writeFile('data/' + season + '.json', JSON.stringify(results));
}

function getResultsType(html) {
    const c = cheerio.load(html);
    const select = c('.side-nav-item-link.ArchiveLink.selected');
    return c(select).text();
}

async function getLinkResults(url) {
    const html = await fetch(url);
    const type = getResultsType(html);
    switch (type) {
        case 'Race result':
            return parseRaceResults(teams, html);
        case 'Fastest laps':
            return parseFastestLap(teams, html);
        case 'Qualifying':
            return parseQualificationResults(teams, html);
        case 'Practice 3':
        case 'Practice 2':
        case 'Practice 1':
            return parsePracticeResults(teams, html);
        default:
            console.log('Unknown type:', type);
            return;
    }
}


// async function main() {
//     if (process.argv.length > 2) {
//         const [results] = await getLinkResults(process.argv[2]);
//         console.log(JSON.stringify(results));
//     } else {
//         const results = await updateAllData();
//         console.log(JSON.stringify(results));
//     }
// }

function commandLineArgs(optionDefinitions) {
    const argv = process.argv;
    const options = {};

    for (let i = 0; i < argv.length; i++) {
        if (argv[i][0] === '-') {
            if (argv[i][1] === '-') {
                console.log(argv[i].slice(2));
                const optionDefinition = optionDefinitions.find(o => o.name === argv[i].slice(2));
                if (optionDefinition) {
                    options[optionDefinition.name] = optionDefinition.type(argv[i+1]);
                    i++;
                }
            } else {
                const optionDefinition = optionDefinitions.find(o => o.alias === argv[i].slice(1));
                if (optionDefinition) {
                    options[optionDefinition.name] = optionDefinition.type(argv[i+1]);
                    i++;
                }
            }
        }
    }

    return options;
}

function printHelp(optionDefinitions) {
    console.log('No valid arguments passed, possible arguments are:');

    optionDefinitions.forEach(o => {
        console.log(`--${o.name} (-${o.alias}) [${o.type.name}] -> ${o.description}`);
    });
}

async function main() {
    const optionDefinitions = [
        { name: 'year', alias: 'y', type: Number, description: 'Year to update' },
        { name: 'url', alias: 'u', type: String, description: 'URL to parse' },
    ];

    options = commandLineArgs(optionDefinitions);
    if (options['year']) {
        updateSeason(options['year']);
    } else if (options['url']) {

    } else {
        printHelp(optionDefinitions);
    }
}

main();
