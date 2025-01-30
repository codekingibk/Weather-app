// script.js

const apiKey = 'cf134dc6eaab4a7bb33190431253001'; // Your API key

const cityInput = document.getElementById('city-input');

const searchBtn = document.getElementById('search-btn');

const weatherIcon = document.getElementById('weather-icon').querySelector('img');

const temperature = document.getElementById('temperature');

const description = document.getElementById('description');

const localTime = document.getElementById('local-time');

const feelsLike = document.getElementById('feels-like');

const humidity = document.getElementById('humidity');

const windSpeed = document.getElementById('wind-speed');

const precipitation = document.getElementById('precipitation');

const uvIndex = document.getElementById('uv-index');

const visibility = document.getElementById('visibility');

const weatherInfo = document.querySelector('.weather-info');

// Function to fetch weather data

async function fetchWeather(city) {

  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  try {

    const response = await fetch(url);

    const data = await response.json();

    if (response.ok) {

      // Update the DOM with weather data

      weatherIcon.src = `https:${data.current.condition.icon}`;

      temperature.textContent = `${data.current.temp_c}°C`;

      description.textContent = data.current.condition.text;

      localTime.textContent = `Local Time: ${data.location.localtime}`;

      feelsLike.textContent = data.current.feelslike_c;

      humidity.textContent = data.current.humidity;

      windSpeed.textContent = data.current.wind_kph;

      precipitation.textContent = data.current.precip_mm;

      uvIndex.textContent = data.current.uv;

      visibility.textContent = data.current.vis_km;

      // Show the weather info section

      weatherInfo.style.display = 'block';

    } else {

      alert('City not found. Please try again.');

    }

  } catch (error) {

    console.error('Error fetching weather data:', error);

    alert('An error occurred. Please try again later.');

  }

}

// Event listener for the search button

searchBtn.addEventListener('click', () => {

  const city = cityInput.value.trim();

  if (city) {

    fetchWeather(city);

  } else {

    alert('Please enter a city name.');

  }

});

// Optional: Fetch weather for a default city on page load

fetchWeather('London');