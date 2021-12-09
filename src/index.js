import _, {
    functions
} from 'lodash';

window.onload = function () {
    function call() {
        fetch('https://api.rawg.io/api/games?key=879cb43fa6024d69b614737f14e041f6')
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
                    <div class="cards">
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
                    `;
                    document.getElementById('games').innerHTML = htmlString;
                });
            })
    }
    call()
    document.getElementsByClassName('cards').addEventListener('click', function (e) {
        e.preventDefault()
        console.log('ta mere la pute')
    })
}