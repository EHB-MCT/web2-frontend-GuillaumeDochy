import _, {
    functions,
    toInteger
} from 'lodash';

window.onload = function () {
    async function recommended() {
        setTimeout(500)

        let response = await fetch('https://course-project-guillaumedochy.herokuapp.com/games', {
            method: 'GET'
        })

        if (response.ok) {
            let data = await response.json()
            console.log(data)

            let htmlString = ''

            data.forEach(e => {
                htmlString += `
                <div class="cards clicky genreGame" id="${e.id}">
                        <img src="${e.background_image}">
                        <h3 class="gameName">${e.name}</h3>
                        <div>
                        <h4>Release date:</h4>
                        <p class="release">${e.release}</p>
                        </div>
                    </div>
                    `
            })

            const recGames = document.getElementById('recGames')
            recGames.innerHTML = htmlString

        } else {
            alert("HTTP-Error: " + response.status);
        }

        const invisiBtn = document.getElementById('invisibleBtn')

        invisiBtn.addEventListener("click", async (e) => {
            e.preventDefault()

            let response = await fetch('https://course-project-guillaumedochy.herokuapp.com/deletegames', {
                method: 'DELETE'
            })

            if (response.ok) {
                let data = response.json()
                console.log(data)
                window.location.reload()
                setTimeout(alert('good job! now everything is deleted'), 500)
            } else {
                alert("HTTP-Error: " + response.status);
            }
        })
    }

    recommended()

    function callHomePage() {
        fetch('https://api.rawg.io/api/games?genres=shooter&page_size=3&key=879cb43fa6024d69b614737f14e041f6')
            .then(response => {
                return response.json()
            })
            .then(data => {

                let dataArray = data.results;

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

        games.forEach(clik => {
            clik.addEventListener("click", async function (e) {
                setTimeout(500)
                e.preventDefault()

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

            let _id = sessionStorage.getItem("id")

            let response = await fetch(`https://api.rawg.io/api/games/${_id}?key=879cb43fa6024d69b614737f14e041f6`);

            if (response.ok) { // HTTP-status = 200-299
                let data = []
                data = await response.json()

                let bg = data.background_image
                let name = data.name
                let release = data.released
                let rating = data.metacritic
                let slug = data.slug
                let description = data.description

                console.log(bg)

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

                let htmlString = `
                <a id="goBack" href="javascript:history.back()">Go back</a>
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
                <div class="specificDiv">
                <h4>Do you like it? Click this button:</h4>
                <span id="fav" class="material-icons fav">favorite</span>
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

                let htmlString2 = ""

                data2.results.forEach(e => {
                    htmlString2 += `
                        <img src="${e.image}">`
                })

                const container2 = document.getElementById("screens")
                container2.innerHTML = htmlString2

                const likeBtn = document.getElementById('fav')

                console.log(likeBtn)

                likeBtn.addEventListener('click', async e => {
                    e.preventDefault()

                    let response3 = await fetch(`https://course-project-guillaumedochy.herokuapp.com/games`, {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            name: name,
                            background_image: bg,
                            release: release,
                            slug: slug,
                            description: description
                        })
                    })

                    let data3 = []
                    data3 = await response3.json();

                    if (response3.ok) {
                        alert('thank you!')
                    }
                })
            } else {
                alert("HTTP-Error: " + response.status);
            }
        }

        getGame()

        genres.forEach(cliked => {
            cliked.addEventListener("click", function (e) {
                setTimeout(500)

                e.preventDefault()

                let nameGenre = cliked.id
                let genreTitle = cliked.innerText

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

                const genreTitle = document.getElementById('genreTitle')

                let htmlString2 = `${genreNamed} games`

                genreTitle.innerHTML = htmlString2

                let htmlString = ''

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

                        let gameGenre = cliky.id

                        sessionStorage.setItem("id", gameGenre)

                        window.location.href = "./game.html"

                        getGenreGame()
                    })
                })

                async function getGenreGame() {
                    setTimeout(500)

                    let genreId = sessionStorage.getItem("id")

                    let response = await fetch(`https://api.rawg.io/api/games/${genreId}?key=879cb43fa6024d69b614737f14e041f6`);

                    if (response.ok) { // HTTP-status = 200-299
                        const container = document.getElementById("gameSpecific")
                        console.log(container)

                        let data = []
                        data = await response.json();

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

                        let htmlString = `
                        <a id="goBackGenre" href="javascript:history.back()">Go back</a>
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
                        <div class="specificDiv">
                        <h4>Do you like it? Click this button:</h4>
                        <span id="fav" class="material-icons fav">favorite</span>
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
                        container.innerHTML = htmlString

                        let response2 = await fetch(`https://api.rawg.io/api/games/${slug}/screenshots?key=879cb43fa6024d69b614737f14e041f6`);

                        let data2 = []
                        data2 = await response2.json();

                        let htmlString2 = ""

                        data2.results.forEach(e => {
                            htmlString2 += `
                                <img src="${e.image}">`
                        })

                        const container2 = document.getElementById("screens")
                        container2.innerHTML = htmlString2

                        let response3 = await fetch(`https://course-project-guillaumedochy.herokuapp.com/games`, {
                            method: "POST",
                            body: JSON.stringify({
                                name: name,
                                background_image: bg,
                                release: release,
                                slug: slug,
                                description: description
                            })
                        })

                        let data3 = []
                        data3 = await response3.json();

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

        compare()
    }

    setTimeout(clicked, 1000)

    function compare() {
        const searchGame1 = document.getElementById("sgForm1")
        console.log(searchGame1)

        const searchGame2 = document.getElementById("sgForm2")
        console.log(searchGame2)

        searchGame1.addEventListener("submit", async function (e) {
            e.preventDefault()

            console.log("test");

            const searchQuery1 = document.getElementById('fSearch1').value

            const actualSearch1 = searchQuery1.replace(/ /g, "-").toLowerCase()

            console.log(actualSearch1)

            let response = await fetch(`https://api.rawg.io/api/games?search=${actualSearch1}&key=879cb43fa6024d69b614737f14e041f6`);

            if (response.ok) { // HTTP-status = 200-299
                let data = await response.json();

                let dataResults = data.results
                console.log(dataResults)

                let htmlString = ""

                dataResults.forEach(e => {

                    let platform = []

                    e.platforms.forEach(e => {
                        platform.push(` ${e.platform.name}`)
                    });

                    htmlString += `
                    <div class="cards comparing compare" id="${e.id}">
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
                    document.getElementById('result1').innerHTML = htmlString
                })
            } else {
                alert("HTTP-Error: " + response.status);
            }

            setTimeout(1000)

            const compareClicked1 = document.getElementsByClassName("compare")
            let compareGame1 = [].slice.call(compareClicked1)

            compareGame1.forEach(clik => {
                clik.addEventListener("click", async function (e) {
                    setTimeout(500)
                    e.preventDefault()

                    let compareId1 = clik.id

                    sessionStorage.setItem("compareId1", compareId1)

                    getGameCompare1()
                })
            })

            async function getGameCompare1() {
                setTimeout(500)

                const container = document.getElementById("result1")

                let compareId1 = sessionStorage.getItem("compareId1")

                let response = await fetch(`https://api.rawg.io/api/games/${compareId1}?key=879cb43fa6024d69b614737f14e041f6`);

                if (response.ok) { // HTTP-status = 200-299
                    let data = []
                    data = await response.json()

                    let bg = data.background_image
                    let name = data.name
                    let release = data.released
                    let rating = data.metacritic
                    let slug = data.slug

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

                    let htmlString = `
                <div class="compared comparingGames1">
                    <div id="comparedGame1Intro">
                    <img id="comparedIntroImg1" src="${bg}">
                    <div id="game1IntroComparing">
                    <h4 id="comparedGame1Title">${name}</h4>
                    <h4 id="ratingCompare">${rating}</h4>
                    </div>
                    </div>
                    <div id="comparedGame1Info">
                    <h5 id="comparedGame1Release">Release:</h5>
                    <h6>${release}</h6>
                    <h5 id="platforms">Platforms:</h5>
                    <h6>${platform}</h6>
                    <h5 id="genresCompare">Genres:</h5>
                    <h6>${genre}</h6>
                    <h5 id="devs">Developers:</h5>
                    <h6>${developer}</h6>
                    </div>
                    <div>
                    <h5>Screenshots:</h5>
                    <div id="comparedGame1Screens">
                    </div>
                    </div
                </div>
                `
                    // container.insertAdjacentHTML('beforeend', htmlString)
                    container.innerHTML = htmlString

                    const ratingCompared = document.getElementById("ratingCompare").innerHTML

                    console.log(ratingCompared)

                    if (ratingCompared > 80) {
                        document.getElementById("ratingCompare").style.color = "green"
                    } else if (ratingCompared < 80) {
                        document.getElementById("ratingCompare").style.color = "orange"
                    } else if (ratingCompared < 50) {
                        document.getElementById("ratingCompare").style.color = "red"
                    }

                    let response2 = await fetch(`https://api.rawg.io/api/games/${slug}/screenshots?key=879cb43fa6024d69b614737f14e041f6`);

                    let data2 = []
                    data2 = await response2.json();

                    let htmlString2 = ""

                    data2.results.forEach(e => {
                        htmlString2 += `
                        <img src="${e.image}">`
                    })

                    const container2 = document.getElementById("comparedGame1Screens")
                    container2.innerHTML = htmlString2
                } else {
                    alert("HTTP-Error: " + response.status);
                }
            }

            document.getElementById('homeComparing').style.height = "max-content"
        })
        searchGame2.addEventListener("submit", async function (e) {
            e.preventDefault()

            console.log("test2");

            const searchQuery2 = document.getElementById('fSearch2').value

            const actualSearch2 = searchQuery2.replace(/ /g, "-").toLowerCase()

            console.log(actualSearch2)

            let response = await fetch(`https://api.rawg.io/api/games?search=${actualSearch2}&key=879cb43fa6024d69b614737f14e041f6`);

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
                    <div class="cards comparing compare2" id="${e.id}">
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
                    document.getElementById('result2').innerHTML = htmlString
                })
            } else {
                alert("HTTP-Error: " + response.status);
            }

            setTimeout(1000)

            const compareClicked2 = document.getElementsByClassName("compare2")
            let compareGame2 = [].slice.call(compareClicked2)

            compareGame2.forEach(clik => {
                clik.addEventListener("click", async function (e) {
                    setTimeout(500)
                    e.preventDefault()

                    let compareId2 = clik.id

                    sessionStorage.setItem("compareId2", compareId2)

                    getGameCompare1()
                })
            })

            async function getGameCompare1() {
                setTimeout(500)

                const container = document.getElementById("result2")

                let compareId2 = sessionStorage.getItem("compareId2")

                let response = await fetch(`https://api.rawg.io/api/games/${compareId2}?key=879cb43fa6024d69b614737f14e041f6`);

                if (response.ok) { // HTTP-status = 200-299
                    let data = []
                    data = await response.json()

                    let bg = data.background_image
                    let name = data.name
                    let release = data.released
                    let rating = data.metacritic
                    let slug = data.slug

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

                    let htmlString = `
                    <div class="compared comparingGames2">
                        <div id="comparedGame2Intro">
                        <img src="${bg}">
                        <div id="game2IntroComparing">
                        <h4 id="comparedGame2Title">${name}</h4>
                        <h4 id="ratingCompare2">${rating}</h4>
                        </div>
                        </div>
                        <div id="comparedGame1Info">
                        <h5 id="comparedGame2Release">Release:</h5>
                        <h6>${release}</h6>
                        <h5 id="platforms">Platforms:</h5>
                        <h6>${platform}</h6>
                        <h5 id="genresCompare">Genres:</h5>
                        <h6>${genre}</h6>
                        <h5 id="devs">Developers:</h5>
                        <h6>${developer}</h6>
                        </div>
                        <div>
                        <h5>Screenshots:</h5>
                        <div id="comparedGame2Screens">
                        </div>
                        </div
                `
                    // container.insertAdjacentHTML('beforeend', htmlString)
                    container.innerHTML = htmlString

                    const ratingCompared = document.getElementById("ratingCompare2").innerHTML

                    console.log(ratingCompared)

                    if (ratingCompared > 80) {
                        document.getElementById("ratingCompare2").style.color = "green"
                    } else if (ratingCompared < 80) {
                        document.getElementById("ratingCompare2").style.color = "orange"
                    } else if (ratingCompared < 50) {
                        document.getElementById("ratingCompare2").style.color = "red"
                    }

                    let response2 = await fetch(`https://api.rawg.io/api/games/${slug}/screenshots?key=879cb43fa6024d69b614737f14e041f6`);

                    let data2 = []
                    data2 = await response2.json();

                    let htmlString2 = ""

                    data2.results.forEach(e => {
                        htmlString2 += `
                        <img src="${e.image}">`
                    })

                    const container2 = document.getElementById("comparedGame2Screens")
                    container2.innerHTML = htmlString2
                } else {
                    alert("HTTP-Error: " + response.status);
                }
            }

            document.getElementById('homeComparing').style.height = "max-content"
        })
    }

    function homeSearch() {
        const searchGames = document.getElementById("sgForm")

        searchGames.addEventListener("submit", async function (e) {
            setTimeout(clicked, 1000)
            e.preventDefault()

            const searchQuery = document.getElementById('fSearch').value

            const actualSearch = searchQuery.replace(/ /g, "-").toLowerCase()

            let response = await fetch(`https://api.rawg.io/api/games?search=${actualSearch}&key=879cb43fa6024d69b614737f14e041f6`);

            if (response.ok) { // HTTP-status = 200-299
                let data = await response.json();

                let dataResults = data.results

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
                    const games = document.getElementById('games')
                    games.innerHTML = htmlString
                })
            } else {
                alert("HTTP-Error: " + response.status);
            }
        })
    }

    homeSearch()


}