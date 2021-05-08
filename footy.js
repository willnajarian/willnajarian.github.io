// wikipedia api no key?
// padding in footy table
// connect four game?
// find out database
// present


let out = document.getElementById("leagueOutput");
// let p = document.createElement('p');
// p.innerHTML = "BOOGA BOOGA AL;DKFJALS;DKJF"
// out.appendChild(p);
let error = document.getElementById("error");
let resultNum = document.getElementById("resultNum");
let firstSearch = false;

var settings = {
    "url": "https://v3.football.api-sports.io/leagues",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "x-rapidapi-key": "fafabcc1c56c5089df5ddd93026fcdbd",
    //   "x-rapidapi-key": "FOOTY_KEY",
      "x-rapidapi-host": "v3.football.api-sports.io"
    },
  };
  
  $.ajax(settings).done(function (response) {
    // console.log(response);

    leagueButton.addEventListener('click', (e) => {
        resultNum.innerHTML = '';
        $("#leagueOutput tr").remove();

        let found = false; 
        error.innerHTML = '';
        // resultNum.innerHTML = '';
        const nation = leagueSearch.value;
        // if (nation.length < 3) {
        //     error.innerText = "Insufficient amount of characters";
        // }
    
        for (let i = 0; i < response.response.length; i++) {
            if (response.response[i].country.name.toLowerCase().includes(nation.toLowerCase()) ||
                    response.response[i].league.name.toLowerCase().includes(nation.toLowerCase())) {
                // console.log(response.response[i]);
                createRow(response.response[i]);
                found = true;
        
            } 
        }
        if (!found ) {
            error.innerHTML = "No results found";
        } else {
            resultNum.innerHTML = out.rows.length + " results found";
        }
    });
  });

function createRow(obj) {
    let tr = document.createElement('tr');
    tr.className = "leagueRow";
    let countryName = document.createElement('td');
    let countryFlag = document.createElement('img');
    countryFlag.className = "countryFlag";
    let leagueName = document.createElement('td');
    let leagueFlag = document.createElement('img');
    leagueFlag.className = "leagueFlag";


    countryName.innerHTML = obj.country.name;

    leagueFlag.src = obj.league.logo;
    countryFlag.src = obj.country.flag;

    leagueName.innerHTML = obj.league.name;


    tr.appendChild(countryFlag);
    tr.appendChild(countryName);
    tr.appendChild(leagueFlag);
    tr.appendChild(leagueName);

    out.appendChild(tr);
}

const leagueButton = document.getElementById("leagueButton");
const leagueSearch = document.getElementById("leagueSearch");
const leagueReset = document.getElementById("leagueReset");


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


let leaguesGet = {
    errors: [], 
    response: [{
            country: {
                code: "GM",
                flag: "https://media.api-sports.io/flags/gb.svg",
                name: "Germany"
            }, 
            league: {
                id: 39, 
                logo: "https://media.api-sports.io/football/leagues/39.png", 
                name: "Bundesliga", 
                type: "League"
            }, 
            seasons: [{
                coverage: {
                    fixture: "a lot of boolean"
                }, 
                current: true, 
                end: "2021-05-23",
                start: "2020-09-12", 
                year: 2020
            }]
        }, {
        country: {
            code: "GB",
            flag: "https://media.api-sports.io/flags/gb.svg",
            name: "England"
        }, 
        league: {
            id: 39, 
            logo: "https://media.api-sports.io/football/leagues/39.png", 
            name: "Premier League", 
            type: "League"
        }, 
        seasons: [{
            coverage: {
                fixture: "a lot of boolean"
            }, 
            current: true, 
            end: "2021-05-23",
            start: "2020-09-12", 
            year: 2020
        }]
    }, {
        country: {
            code: "FR",
            flag: "https://media.api-sports.io/flags/gb.svg",
            name: "France"
        }, 
        league: {
            id: 40, 
            logo: "https://media.api-sports.io/football/leagues/39.png", 
            name: "Ligue 1", 
            type: "League"
        }, 
        seasons: [{
            coverage: {
                fixture: "a lot of boolean"
            }, 
            current: true, 
            end: "2021-05-23",
            start: "2020-09-12", 
            year: 2020
        }]
}]};
// console.log(leaguesGet);

