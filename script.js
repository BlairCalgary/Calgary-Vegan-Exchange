import vegans from './vegans.js';

const container = document.getElementById('cardContainer');

vegans.forEach((result, id) => {
    // create the card element
    result.image === undefined || result.image === "" ? result.image = "img/default.jpg" : result.image; 
    //build the card content
    const content = `
        <div class='card'>
            <h2>Vendor # ${id +1}</h2>
            <img class="cardImg" src=${result.image} height = 150 width = 150>
            <h2>${result.name}</h2>
            <p>${result.contact}<p>
        </div>
    `;

    //Append card element to the container
    container.innerHTML += content;
})


