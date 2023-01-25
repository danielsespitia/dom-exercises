// Escribe tu solución acá

const url = 'https://s3.amazonaws.com/makeitreal/countries.json';

let countries = [];

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    countries = data;
  });

const btn = document.querySelector('button');
const table = document.querySelector('table');

btn.addEventListener('click', function () {
  table.classList.remove('hide');
  btn.classList.add('hide');

  countries.forEach((country) => {
    const tr = document.createElement('tr');

    tr.innerHTML = `<td><img src="${country.flag_url}" alt="${country.name}"></td>
    <td>${country.code}</td>
    <td>${country.name}</td>
    `;

    table.appendChild(tr);
  });
});
