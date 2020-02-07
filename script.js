import vegans from './vegans.js';

const container = document.getElementById('cardContainer');

vegans.forEach((result, id) => {
    // create the card element
    result.image === undefined || result.image === "" ? result.image = "img/vegan-logo.png" : result.image; 
    //build the card content
    const content = `
        <div class='card'>
            <h2>${result.name}</h2>
            <img class="cardImg" src=${result.image}>
            <p>${result.contact}<p>
        </div>
    `;

    //Append card element to the container
    container.innerHTML += content;
})


