
export const renderPlanet = (url) => {

    const planets = document.getElementById('planets');

    planets.innerHTML = '';
    // body.classList.add('titres');
    // url = url ? url : urlPlanets;
    if (url) {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data.next);
                // nextPage = data.next;
                // prevPage = data.previous;

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