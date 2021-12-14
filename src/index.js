import _, {
    functions
} from 'lodash';

window.onload = function () {
    function callHomePage() {
        fetch('https://api.rawg.io/api/games?genres=shooter&page_size=3&key=879cb43fa6024d69b614737f14e041f6')
            .then(response => {
                return response.json()
            })
            .then(data => {

                let dataArray = data.results;

                console.log(dataArray)

                let htmlString = '';

                dataArray.forEach(e => {

                    let platform = [];

                    e.platforms.forEach(e => {
                        platform.push(` ${e.platform.name}`);
                    });

                    htmlString += `
                    <a href="./game.html" class="cards clicky" id="${e.id}">
                        <img src="${e.background_image}" >
                        <h3 class="gameName">${e.name}</h3>
                        <div>
                        <h4>Release date:</h4>
                        <p class="release">${e.released}</p>
                        </div>
                        <div>
                        <h4>Ratings:</h4>
                        <p>${e.rating}/${e.rating_top}</p>
                        </div>
                    </a>
                    `;
                    document.getElementById('cards').innerHTML = htmlString;
                })
            })

        fetch('https://api.rawg.io/api/games?genres=adventure&page_size=3&key=879cb43fa6024d69b614737f14e041f6')
            .then(response => {
                return response.json()
            })
            .then(data => {

                let dataArray = data.results;

                console.log(dataArray)

                let htmlString = '';

                dataArray.forEach(e => {

                    let platform = [];

                    e.platforms.forEach(e => {
                        platform.push(` ${e.platform.name}`);
                    });

                    htmlString += `
                    <a href="./game.html" class="cards clicky" id="${e.id}">
                        <img src="${e.background_image}">
                        <h3 class="gameName">${e.name}</h3>
                        <div>
                        <h4>Release date:</h4>
                        <p class="release">${e.released}</p>
                        </div>
                        <div>
                        <h4>Ratings:</h4>
                        <p>${e.rating}/${e.rating_top}</p>
                        </div>
                    </a>
                    `;
                    document.getElementById('cards2').innerHTML = htmlString;
                })
            })
    }

    callHomePage()

    function clicked() {
        const gameClicked = document.getElementsByClassName("cards")
        let games = [].slice.call(gameClicked)

        const genreClicked = document.getElementsByClassName("genres")
        let genres = [].slice.call(genreClicked)

        console.log(games)
        console.log(genres)

        games.forEach(clik => {
            clik.addEventListener("click", async function (e) {
                e.preventDefault()
                console.log('clicked')

                console.log(clik.id)

                let id = clik.id

                sessionStorage.setItem("id", id)

                window.location.href = "./game.html"

                getGame()
            })
        })

        async function getGame() {
            setTimeout(500)

            const container = document.getElementById("gameSpecific")
            console.log(container)

            let _id = sessionStorage.getItem("id")

            console.log(_id)

            let response = await fetch(`https://api.rawg.io/api/games/${_id}?key=879cb43fa6024d69b614737f14e041f6`);

            if (response.ok) { // HTTP-status = 200-299
                let data = []
                data = await response.json();

                console.log(data)

                let bg = data.background_image
                let name = data.name
                let release = data.released
                let rating = data.rating
                let ratingTop = data.rating_top

                let platform = [];

                data.platforms.forEach(e => {
                    platform.push(` ${e.platform.name}`);
                });

                let genre = [];

                data.genres.forEach(e => {
                    platform.push(` ${e.name}`);
                });

                let publisher = [];

                data.publishers.forEach(e => {
                    publisher.push(` ${e.name}`);
                });

                let developer = [];

                data.developers.forEach(e => {
                    developer.push(` ${e.name}`);
                });

                console.log(platform)
                console.log(publisher)

                let htmlString = `
                <div class="gameSpecific">
                    <img src="${bg}">
                    <h3 class="gameName">${name}</h3>
                </div>
                <div class="gameSpecificInfo">
                <div class="specificDiv">
                <h4>Platforms:</h4>
                <p>${platform}</p>
                </div>
                <div class="specificDiv">
                <h4>Publisher(s):</h4>
                <p>${publisher}</p>
                </div>
                <div class="specificDiv">
                <h4>Genre(s):</h4>
                <p>${genre}</p>
                </div>
                <div class="specificDiv">
                <h4>Developer(s):</h4>
                <p>${developer}</p>
                </div>
                <div class="specificDiv">
                <h4>Release date:</h4>
                <p class="release">${release}</p>
                </div>
                <div class="specificDiv">
                <h4>Ratings:</h4>
                <p>${rating}/${ratingTop}</p>
                </div>
                </div>
                `
                // container.insertAdjacentHTML('beforeend', htmlString)
                container.innerHTML = htmlString
            } else {
                alert("HTTP-Error: " + response.status);
            }
        }

        getGame()

        genres.forEach(clik => {
            clik.addEventListener("click", function (e) {
                e.preventDefault()
                console.log('clicked')
                window.location.href = "./genre.html"
            })
        })
    }

    setTimeout(clicked, 1000)

    const searchGames = document.getElementById("sgForm")
    console.log(searchGames)

    function homeSearch() {
        searchGames.addEventListener("submit", async function (e) {
            e.preventDefault()

            console.log("test");

            const searchQuery = document.getElementById('fSearch').value

            const actualSearch = searchQuery.replace(/ /g, "-").toLowerCase()

            console.log(actualSearch)

            let response = await fetch(`https://api.rawg.io/api/games?search=${actualSearch}&key=879cb43fa6024d69b614737f14e041f6`);

            if (response.ok) { // HTTP-status = 200-299
                let data = await response.json();

                let dataResults = data.results
                // let data = response.results
                console.log(dataResults)

                let htmlString = ""

                dataResults.forEach(e => {

                    let platform = []

                    e.platforms.forEach(e => {
                        platform.push(` ${e.platform.name}`)
                    });

                    htmlString += `
                    <a href="./game.html" class="cards clicky searchCards" id="${e.id}">
                        <img src="${e.background_image}">
                        <h3 class="gameName">${e.name}</h3>
                        <div>
                        <h4>Release date:</h4>
                        <p class="release">${e.released}</p>
                        </div>
                        <div>
                        <h4>Ratings:</h4>
                        <p>${e.rating}/${e.rating_top}</p>
                        </div>
                    </a>
                    `
                    document.getElementById('games').innerHTML = htmlString
                })
            } else {
                alert("HTTP-Error: " + response.status);
            }

            setTimeout(clicked, 1000)
        })
    }

    async function genresCall() {
        let response2 = await fetch(`https://api.rawg.io/api/genres?key=879cb43fa6024d69b614737f14e041f6`)
        if (response2.ok) { // HTTP-status = 200-299
            let data2 = await response2.json();

            let fullGenresList = data2.results

            let htmlString = ''

            console.log(fullGenresList)

            fullGenresList.forEach(e => {
                htmlString += `
                <div class="cards genres clicky searchCards" id="${e.id}">
                    <img src="${e.image_background}">
                    <h3 class="gameName">${e.name}</h3>
                </div>
                `
                document.getElementById('genres').innerHTML = htmlString
            })
        } else {
            alert("HTTP-Error: " + response2.status);
        }
    }

    homeSearch()

    setTimeout(genresCall, 1000)
}