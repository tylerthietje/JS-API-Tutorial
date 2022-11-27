// Created from instructions on the blog post located at https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/


// Create a request variable and assign a new XMLHttpRequest object to it.
const request = new XMLHttpRequest();
const app = document.querySelector('#root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach((movie) => {
      //Create a div with a card class
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      // create an h1 and set the text content to the film's title
      const h1 = document.createElement('h1');
      h1.textContent = movie.title;

      // Create a p and set the text content to the film's description
      const p = document.createElement('p');
      p.textContent = movie.description;

      // Append the cards to the container element
      container.appendChild(card);

      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement('h3');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
};

// Send request
request.send();
