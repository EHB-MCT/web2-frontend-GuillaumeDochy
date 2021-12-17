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
                    <a href="./game.html" class="cards clicky game" id="${e.id}">
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
                    <a href="./game.html" class="cards clicky game" id="${e.id}">
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
        fetch('https://api.rawg.io/api/games?genres=indie&page_size=3&key=879cb43fa6024d69b614737f14e041f6')
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
                    <a href="./game.html" class="cards clicky game" id="${e.id}">
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
                    document.getElementById('cards3').innerHTML = htmlString;
                })
            })
        fetch('https://api.rawg.io/api/games?genres=arcade&page_size=3&key=879cb43fa6024d69b614737f14e041f6')
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
                    <a href="./game.html" class="cards clicky game" id="${e.id}">
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
                    document.getElementById('cards4').innerHTML = htmlString;
                })
            })
    }

    callHomePage()

    async function genresCall() {
        setTimeout(500)

        const genres = document.getElementById('genres')

        let response3 = await fetch(`https://api.rawg.io/api/genres?key=879cb43fa6024d69b614737f14e041f6`)

        if (response3.ok) { // HTTP-status = 200-299
            let data3 = await response3.json();

            let fullGenresList = data3.results

            let htmlString2 = ''

            console.log(fullGenresList)

            fullGenresList.forEach(e => {
                htmlString2 += `
                <div class="cards genres clicky searchCards" id="${e.id}">
                    <img src="${e.image_background}">
                    <h3 class="gameName">${e.name}</h3>
                </div>
                `
            })
            genres.innerHTML = htmlString2
        } else {
            alert("HTTP-Error: " + response3.status);
        }
    }

    genresCall()

    function clicked() {
        const gameClicked = document.getElementsByClassName("game")
        let games = [].slice.call(gameClicked)

        const genreClicked = document.getElementsByClassName("genres")
        let genres = [].slice.call(genreClicked)

        console.log(games)
        console.log(genres)

        games.forEach(clik => {
            clik.addEventListener("click", async function (e) {
                setTimeout(500)
                e.preventDefault()
                console.log('clicked')

                console.log(clik.id)

                let id = clik.id
                let name = clik.name

                sessionStorage.setItem("id", id)
                sessionStorage.setItem("name", name)

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
                let rating = data.metacritic
                let slug = data.slug
                let description = data.description

                let platform = [];

                data.platforms.forEach(e => {
                    platform.push(` ${e.platform.name}`)
                })

                let genre = []
                let genreArray = data.genres

                genreArray.forEach(e => {
                    genre.push(` ${e.name}`)
                })

                let publisher = [];

                data.publishers.forEach(e => {
                    publisher.push(` ${e.name}`)
                })

                let developer = []

                data.developers.forEach(e => {
                    developer.push(` ${e.name}`)
                })

                console.log(platform)
                console.log(publisher)
                console.log(genre)

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
                <p>${rating}</p>
                </div>
                <div id="rest">
                <div id="description">
                <h4>Description:</h4>
                <p>${description}</p>
                </div>
                <div id="screens">
                </div>
                </div>
                </div>
                `
                // container.insertAdjacentHTML('beforeend', htmlString)
                container.innerHTML = htmlString

                let response2 = await fetch(`https://api.rawg.io/api/games/${slug}/screenshots?key=879cb43fa6024d69b614737f14e041f6`);

                let data2 = []
                data2 = await response2.json();
                console.log(data2)

                let htmlString2 = ""

                data2.results.forEach(e => {
                    htmlString2 += `
                        <img src="${e.image}">`
                })

                const container2 = document.getElementById("screens")
                container2.innerHTML = htmlString2
            } else {
                alert("HTTP-Error: " + response.status);
            }
        }

        getGame()

        genres.forEach(cliked => {
            cliked.addEventListener("click", function (e) {
                setTimeout(500)

                e.preventDefault()
                console.log('clicked')

                console.log(cliked.id)

                let nameGenre = cliked.id
                let genreTitle = cliked.innerText

                console.log(nameGenre)

                sessionStorage.setItem("idGenre", nameGenre)
                sessionStorage.setItem("genreTitle", genreTitle)

                window.location.href = "./genre.html"

                getGenre()
            })
        })

        async function getGenre() {

            setTimeout(100)
            let genreId = sessionStorage.getItem("idGenre")
            let genreNamed = sessionStorage.getItem("genreTitle")

            let response = await fetch(`https://api.rawg.io/api/games?genres=${genreId}&key=879cb43fa6024d69b614737f14e041f6`);

            if (response.ok) { // HTTP-status = 200-299
                let data = await response.json();

                let dataResults = data.results
                // let data = response.results
                console.log(dataResults)

                const genreTitle = document.getElementById('genreTitle')

                let htmlString2 = `${genreNamed} games`

                genreTitle.innerHTML = htmlString2

                let htmlString = ''

                console.log(dataResults)

                dataResults.forEach(e => {
                    htmlString += `
                    <div class="cards clicky genreGame" id="${e.id}">
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
                    </div>
                    `
                })

                const genreGames = document.getElementById('genreGames')
                genreGames.innerHTML = htmlString

                const genreGameClicked = document.getElementsByClassName("genreGame")
                let genreGame = [].slice.call(genreGameClicked)

                genreGame.forEach(cliky => {
                    cliky.addEventListener("click", async function (e) {
                        setTimeout(500)

                        e.preventDefault()

                        console.log("genre game id:", cliky.id)

                        let gameGenre = cliky.id

                        sessionStorage.setItem("id", gameGenre)

                        window.location.href = "./game.html"

                        getGenreGame()
                    })
                })

                async function getGenreGame() {
                    setTimeout(500)

                    let genreId = sessionStorage.getItem("id")

                    console.log(genreId)

                    let response = await fetch(`https://api.rawg.io/api/games/${genreId}?key=879cb43fa6024d69b614737f14e041f6`);

                    if (response.ok) { // HTTP-status = 200-299
                        const container = document.getElementById("gameSpecific")
                        console.log(container)

                        let data = []
                        data = await response.json();

                        console.log(data)

                        let bg = data.background_image
                        let name = data.name
                        let release = data.released
                        let rating = data.metacritic
                        let slug = data.slug
                        let description = data.description

                        let platform = [];

                        data.platforms.forEach(e => {
                            platform.push(` ${e.platform.name}`)
                        })

                        let genre = []
                        let genreArray = data.genres

                        genreArray.forEach(e => {
                            genre.push(` ${e.name}`)
                        })

                        let publisher = [];

                        data.publishers.forEach(e => {
                            publisher.push(` ${e.name}`)
                        })

                        let developer = []

                        data.developers.forEach(e => {
                            developer.push(` ${e.name}`)
                        })

                        console.log(platform)
                        console.log(publisher)
                        console.log(genre)

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
                        <p>${rating}</p>
                        </div>
                        <div id="rest">
                        <div id="description">
                        <h4>Description:</h4>
                        <p>${description}</p>
                        </div>
                        <div id="screens">
                        </div>
                        </div>
                        </div>
                        `
                        // container.insertAdjacentHTML('beforeend', htmlString)
                        container.innerHTML = htmlString

                        let response2 = await fetch(`https://api.rawg.io/api/games/${slug}/screenshots?key=879cb43fa6024d69b614737f14e041f6`);

                        let data2 = []
                        data2 = await response2.json();
                        console.log(data2)

                        let htmlString2 = ""

                        data2.results.forEach(e => {
                            htmlString2 += `
                                <img src="${e.image}">`
                        })

                        const container2 = document.getElementById("screens")
                        container2.innerHTML = htmlString2
                    } else {
                        alert("HTTP-Error: " + response.status);
                    }
                }

                getGenreGame()
            } else {
                alert("HTTP-Error: " + response.status);
            }
        }

        getGenre()
    }

    setTimeout(clicked, 1000)

    const searchGames = document.getElementById("sgForm")
    console.log(searchGames)

    function homeSearch() {
        searchGames.addEventListener("submit", async function (e) {
            setTimeout(clicked, 1000)

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
                    <a href="./game.html" class="cards clicky searchCards game" id="${e.id}">
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
        })
    }

    homeSearch()

    function comparing() {

    }
}