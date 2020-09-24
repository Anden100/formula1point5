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
    return {
        first: c(names[0]).text().trim(),
        last: c(names[1]).text().trim(),
        abbr: c(names[2]).text().trim(),
    };
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
        const time = raceDuration + timeToMs(c(cells[6]).text().trim());
        raceDuration = raceDuration === 0 ? time : raceDuration;

        const result = {
            pos: pos === 'NC' ? 'NC' : currentPosition,
            driver,
            car: c(cells[4]).text().trim(),
            laps: Number(c(cells[5]).text().trim()),
            time: time,
        }

        if (teams.includes(result.car)) {
            if (results.length > 0) {
                result.gap = msToOffset(result.time - results[0].time);
            }
            else {
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

async function getAllRaceResults(teams) {
    const racesUrl = 'https://www.formula1.com/en/results/jcr:content/resultsarchive.html/2020/races.html';

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

function scores2020(race) {
    const points = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];
    drivers = [];
    race.results.race_results.map(res => {
        const driver = res.driver;
        driver.car = res.car;
        if (res.pos <= 10) {
            driver.points = points[res.pos - 1];
        }
        else {
            driver.points = 0;
        }
        drivers.push(driver);
    });
    const fastest = race.results.fastest_laps[0];
    const i = drivers.findIndex(d => d.abbr === fastest.driver.abbr);
    if (drivers[i].points > 0) {
        drivers[i].points++;
    }

    return drivers;
}

const teams = [
    'Ferrari',
    'McLaren Renault',
    'Racing Point BWT Mercedes',
    'AlphaTauri Honda',
    'Renault',
    'Alfa Romeo Racing Ferrari',
    'Williams Mercedes',
    'Haas Ferrari',
];

const penalities = [
    { team: 'Racing Point BWT Mercedes', points: 15 }
]


async function updateAllData() {
    races = await getAllRaceResults(teams);
    let drivers = [];
    races.map(race => {
        race.slug = race.name.toLowerCase().replace(/\s/g , "-");
        const scores = scores2020(race);
        scores.forEach(driver => {
            const i = race.results.race_results.findIndex(r => r.driver.abbr === driver.abbr);
            race.results.race_results[i].points = driver.points;
    
            const j = drivers.findIndex(d => d.abbr === driver.abbr);
            if (j >= 0) {
                drivers[j].points += driver.points;
            }
            else {
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
        }
        else {
            constructors.push({ car: drivers[i].car, points: drivers[i].points });
        }
    }

    for (let i = 0; i < penalities.length; i++) {
        const j = constructors.findIndex(c => c.car === penalities[i].team);
        if (j >= 0) {
            constructors[j].points -= penalities[i].points;
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
    
    console.log(JSON.stringify(results));
}

function getResultsType(html) {
    const c = cheerio.load(html);
    const select = c('[name=resultType] option[selected="selected"]');
    console.log(select);
}

async function getLinkResults(url) {
    const html = await fetch(url);
    getResultsType(html);
    // getQualificationResults(teams, 'https://www.formula1.com/en/results.html/2020/races/1049/great-britain/qualifying.html');
}

function main() {
    if (process.argv.length > 2) {
        getLinkResults('https://www.formula1.com/en/results.html/2020/races/1049/great-britain/qualifying.html');
    }
    else {
        updateAllData();
    }
}

async function test() {
    try {
        const href = '/content/fom-website/en/results/jcr:content/resultsarchive.html/2020/races/1049/great-britain/practice-3.html';
        const [res] = await parsePracticeResults(teams, await fetch(BASE_URL, href));
        console.log(res);
    }
    catch(err) {
        console.log(err);
    }

}

main();
// test();
