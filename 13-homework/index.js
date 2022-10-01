
const urlFilms = 'https://swapi.dev/api/films';
const urlPeople = 'https://swapi.dev/api/people';
const urlPlanets = 'https://swapi.dev/api/planets';
const buttonGetInfo = document.getElementById('getInfo');
const buttonGetPlanet = document.getElementById('getPlanet');
const planets = document.getElementById('planets');
const cards = document.querySelector('.cards');
const body = document.querySelector('body');
const next = document.getElementById('next');
const charactersImages = {};
let nextPage;
const film = document.querySelector('.button__input');
const rormatWookiee = document.getElementById('rormatWookiee');
let wookianMode = false;


const getGenderImg = (gender) => {
    if (gender === 'male') {
        return 'male.svg'
    } else if (gender === 'female') {
        return 'female.svg'
    } else {
        return 'na.svg'
    };
};

const getInfo = () => {
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
                // console.log(urlCharacter);
                urlCharacter = wookianMode ? urlCharacter += '?format=wookiee' : urlCharacter;
                fetch(urlCharacter)
                    .then((resp) => resp.json())
                    .then((character) => {
                        // console.log(character);

                        if (!wookianMode) {
                            charactersImages[character.name] = `img/${character.name}.jpg`;
                        };

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

    cartElem.innerHTML = `               
                <img src="${wookianMode ? `img/Chewbacca.jpg` : charactersImages[character.name]}" alt="${wookianMode ? character.whrascwo : character.name}" />
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
                console.log(data);
                // console.log(data.next);
                nextPage = data.next;
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

rormatWookiee.onclick = () => {
    wookianMode = true;
    getInfo();
};


