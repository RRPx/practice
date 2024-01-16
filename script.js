'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const images = document.querySelector('.images');

///////////////////////////////////////

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)}</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>                                                                  
  </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

// const getCountryDataAndNeighbour = function (country) {
//   // Ajax call 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     // a = b[0]  -> [a] = b
//     const [data] = JSON.parse(this.responseText);
//     console.log('data 1', data);

//     // Render country 1
//     renderCountry(data);

//     // Get neighbour country (2)
//     const neighbour = data.borders?.[0];

//     // Ajax call 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log('data 2', data2);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryDataAndNeighbour('vietnam');
// // getCountryDataAndNeighbour('thailand');
// // getCountryDataAndNeighbour('philippines');
// // getCountryDataAndNeighbour('vietnam');

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 second passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//     }, 1000);
//   }, 1000);
// }, 1000);

//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

// const request = fetch('https://restcountries.com/v2/name/vietnam');
// console.log(request);

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(function (response) {
//     console.log(response);
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then(function (data) {
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders?.[0];
//       const neighbour = 'dfjdfjd';
//
//       // Country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(function (response) {
//        if (!response.ok)
//          throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then(function (data) {
//       renderCountry(data, 'neighbour');
//     })
//     .catch(function (err) {
//       console.error(`${err} ***`);
//       renderError(`Something went wrong. ${err.message}. Try again!`);
//     })
//     .finally(function () {
//       countriesContainer.style.opacity = 1;
//     });
// };

// const getCountryData = function (country) {
//   // Country 1
//   getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
//     .then(function (data) {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];
//       if (!neighbour) throw new Error('No neighbour found!');
//       // Country 2
//       return getJSON(
//         `https://restcountries.com/v2/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })
//     .then(function (data) {
//       renderCountry(data, 'neighbour');
//     })
//     .catch(function (err) {
//       console.error(`${err} ***`);
//       renderError(`Something went wrong. ${err.message}. Try again!`);
//     })
//     .finally(function () {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('viiiiiietnam');
// });

// console.log('Test start');
// setTimeout(() => console.log('2 sec timer'), 2);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// console.log('Test end');

// challenge ---------------------------

const apiKey = '523029615496070372172x24624';
// const whereAmI = function (lat, long) {
//   fetch(`https://geocode.xyz/${lat},${long}?geoit=json&auth=${apiKey}`)
//     .then(response => {
//       if (!response.ok)
//         throw new Error('Too many requests made, please take a break!');
//       return response.json();
//     })
//     .then(({ city, country }) => {
//       console.log(`You are in ${city}, ${country}`);
//       return fetch(`https://restcountries.com/v2/name/${country}`);
//     })
//     .then(response => {
//       if (!response.ok) throw new Error('Country not found');
//       return response.json();
//     })
//     .then(([data]) => {
//       renderCountry(data);
//       console.log(data);
//     })
//     .catch(err => {
//       renderError(`Something went wrong. ${err.message}. Try Again!`);
//     })
//     .finally(() => (countriesContainer.style.opacity = 1));
// };

// btn.addEventListener('click', function () {
//   whereAmI(52.508, 13.381);
//   whereAmI(19.037, 72.873);
//   whereAmI(-33.933, 18.474);
// });

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happening🎆');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You Win👌');
//     } else {
//       reject(new Error('You Lost🤦‍♂️'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(1)
//   .then(() => {
//     console.log('I waited for 1 second');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('I waited for 1 second');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('I waited for 1 second');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('I waited for 1 second');
//   });

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 second passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//     }, 1000);
//   }, 1000);
// }, 1000);

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problem!')).catch(x => console.error(x));

// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.error(err)
// );
// console.log('Getting position');

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => console.error(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition().then(pos => console.log(pos));

// const apiKey = '523029615496070372172x24624';
// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: long } = pos.coords;
//       return fetch(
//         `https://geocode.xyz/${lat},${long}?geoit=json&auth=${apiKey}`
//       );
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error('Too many requests made, please take a break!');
//       return response.json();
//     })
//     .then(({ city, country }) => {
//       console.log(`You are in ${city}, ${country}`);
//       return fetch(`https://restcountries.com/v2/name/${country}`);
//     })
//     .then(response => {
//       if (!response.ok) throw new Error('Country not found');
//       return response.json();
//     })
//     .then(([data]) => {
//       renderCountry(data);
//       console.log(data);
//     })
//     .catch(err => {
//       renderError(`Something went wrong. ${err.message}. Try Again!`);
//     })
//     .finally(() => (countriesContainer.style.opacity = 1));
// };

// btn.addEventListener('click', whereAmI);

// const createImage = function (imgPath) {
//   return new Promise((resolve, reject) => {
//     newImage = document.createElement('img');
//     newImage.src = imgPath;
//     if (newImage.src) {
//       wait(2);
//       resolve(images.insertAdjacentHTML('beforeend', newImage));
//     } else {
//       reject(new Error('failed to load'));
//     }
//   });
// };

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI2 = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: long } = pos.coords;
    //Reverse Geocoding
    const resGeo = await fetch(
      `https://geocode.xyz/${lat},${long}?geoit=json&auth=${apiKey}`
    );
    if (!resGeo.ok) throw new Error('Problem getting location data');
    const { city, country } = await resGeo.json();
    // Country data
    const res = await fetch(`https://restcountries.com/v2/name/${country}`);
    if (!resGeo.ok) throw new Error('Problem getting country');
    const [data] = await res.json();
    renderCountry(data);
    return `You are in ${city}, ${country}`;
  } catch (err) {
    console.log(err);
    renderError(`Something went wrong ${err.message}`);

    // Reject promise returned from async function
    throw err;
  }
};

// async functino returns a promise
console.log('1: Will get location');
// const city = whereAmI2();
// console.log(city);
// whereAmI2()
//   .then(city => console.log(city))
//   .catch(err => console.error(`inside ${err.message}`))
//   .finally(() => '2: Finished getting location');
// console.log('2: Finished getting location');

(async function () {
  try {
    const city = await whereAmI2();
    console.log(city);
  } catch (err) {
    console.error(`inside ${err.message}`);
  }
  console.log('2: Finished getting location');
})();
