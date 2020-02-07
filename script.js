import vegans from './vegans.js';

const container = document.getElementById('cardContainer');

vegans.forEach((result, id) => {
    // create the card element
    result.image === undefined || result.image === "" ? result.image = "img/vegan-logo.png" : result.image; 
    //build the card content
    const content = `
        <div class='card' onclick="window.open('http://${result.contact}')" target="_blank">
            <h3>${result.name}</h3>
            <img class="cardImg push" src=${result.image}>
            <p class="push">${result.contact}<p>
        </div>
    `;

    //Append card element to the container
    container.innerHTML += content;
})


