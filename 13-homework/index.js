
const urlFilms = 'https://swapi.dev/api/films';
const urlPeople = 'https://swapi.dev/api/people';
const urlPlanets = 'https://swapi.dev/api/planets';
const buttonGetInfo = document.getElementById('getInfo');
const buttonGetPlanet = document.getElementById('getPlanet');
const planets = document.getElementById('planets');
const cards = document.querySelector('.cards');
const body = document.querySelector('body');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const charactersImages = {
    ['Boba Fett']: 'img/Boba Fett.jpg',
    ['Bossk']: 'img/Bossk.jpg',
    ['C-3PO']: 'img/C-3PO.jpg',
    ['Chewbacca']: 'img/Chewbacca.jpg',
    ['Darth Vader']: 'img/Darth Vader.jpg',
    ['Han Solo']: 'img/Han Solo.jpg',
    ['IG-88']: 'img/IG-88.jpg',
    ['Lando Calrissian']: 'img/Lando Calrissian.jpg',
    ['Leia Organa']: 'img/Leia Organa.jpg',
    ['Lobot']: 'img/Lobot.jpg',
    ['Luke Skywalker']: 'img/Luke Skywalker.jpg',
    ['Obi-Wan Kenobi']: 'img/Obi-Wan Kenobi.jpg',
    ['Palpatine']: 'img/Palpatine.jpg',
    ['R2-D2']: 'img/R2-D2.jpg',
    ['Wedge Antilles']: 'img/Wedge Antilles.jpg',
    ['Yoda']: 'img/Yoda.jpg',
};
let nextPage;
let prevPage;
const film = document.querySelector('.button__input');
const rormatWookiee = document.getElementById('rormatWookiee');
let wookianMode = false;

const setVisibility = () => {
    nextPage ? next.style.display = 'block' : next.style.display = 'none';
    prevPage ? prev.style.display = 'block' : prev.style.display = 'none';
};

const getGenderImg = (gender) => {
    if (gender === 'male') {
        return 'male.svg'
    } else if (gender === 'female') {
        return 'female.svg'
    } else {
        return 'na.svg'
    };
};

const noWookie = (peopleUrl) => {
    let noWookie = ['35', '39', '61', '66'];
    let isNoWookie = false;
    noWookie.forEach((el) => {
        if (peopleUrl.includes(el)) {
            isNoWookie = true;
        };
    });
    return isNoWookie;
};

const getInfo = () => {

    if (film.value > 6 || film.value < 1) {
        film.value = 2;
    };

    cards.innerHTML = '';
    planets.innerHTML = '';

    let url = film.value ? urlFilms + `/${film.value}` : urlFilms + `/2`;

    fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            // console.log(data.characters);
            return data.characters;
        })
        .catch((error) => {
            console.log(error);
        })
        .then((characters) => {
            characters.forEach(urlCharacter => {

                urlCharacter = wookianMode ? urlCharacter += '?format=wookiee' : urlCharacter;
                //people з номерами 35 39 61 66 не мають format wookiee
                if (noWookie(urlCharacter)) {
                    return;
                };

                fetch(urlCharacter)
                    .then((resp) => resp.json())
                    .then((character) => {
                        appendCard(character);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            });
        });
};

const appendCard = (character) => {
    const cartElem = document.createElement('div');
    cartElem.classList.add('cartElem');

    let img = charactersImages[character.name] ? charactersImages[character.name] : `img/defoult.png`;

    cartElem.innerHTML = `               
                <img src="${wookianMode ? `img/Chewbacca.jpg` : img}" alt="${wookianMode ? character.whrascwo : character.name}" />
                <div>
                    <div>
                        <h3>${wookianMode ? character.whrascwo : character.name}</h3>
                    </div>
                    <div>
                        <div>
                            ${wookianMode ? 'rhahrcaoac_roworarc:' + character.rhahrcaoac_roworarc : 'birth year:' + character.birth_year}
                        </div>
                    </div>
                    <div class="gender">                      
                        <img class="genderImg" src=img/${getGenderImg(wookianMode ? character.rrwowhwaworc : character.gender)} alt="${character.gender}" />
                    </div>
                </div>     
                `;
    cards.append(cartElem);
};

const renderPlanet = (url) => {
    cards.innerHTML = '';
    planets.innerHTML = '';
    body.classList.add('titres');

    url = url ? url : urlPlanets;

    if (url) {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                // console.log(data);
                // console.log(data.next);
                nextPage = data.next;
                prevPage = data.previous;

                setVisibility();

                data.results.forEach(planet => planets.innerHTML +=
                    `<div class="planet">
                       <h3>name: ${planet.name}</h3>
                       <div>rotation_period: ${planet.rotation_period}</div>
                       <div>diameter: ${planet.diameter}</div>
                       <div>population:${planet.population}</div>
                </div>`
                );
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

setVisibility();

buttonGetInfo.onclick = () => {
    wookianMode = false;
    getInfo();
};

buttonGetPlanet.onclick = () => {
    renderPlanet(urlPlanets);
};

next.onclick = () => {
    renderPlanet(nextPage);
};

prev.onclick = () => {
    renderPlanet(prevPage);
};

rormatWookiee.onclick = () => {
    wookianMode = true;
    getInfo();
};


