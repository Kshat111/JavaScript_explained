const apiKey = '2ceaa9c792ae98672e308d48a628ed7d'; // this key is not activated at this time (maybe in future it can get activated)
const city = 'Delhi';

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching weather data:', error));