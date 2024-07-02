const apiKey = 'e06bf95fc0c685d1a27eb3b4083815ee';
const searchBtn = document.getElementById('searchBtn');
const locationInput = document.getElementById('locationInput');
const weatherResult = document.getElementById('weatherResult');
const locationName = document.getElementById('locationName');
const temperature = document.getElementById('temperature');
const humidity = document.getElementById('humidity');
const condition = document.getElementById('condition');

searchBtn.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        getWeather(location);
    } else {
        alert('Please enter a location');
    }
});

async function getWeather(location) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Location not found (status code: ${response.status})`);
        }
        const data = await response.json();
        console.log('API Response:', data); // Log the entire API response
        displayWeather(data);
    } catch (error) {
        console.error('Error:', error);
        alert(error.message);
    }
}

function displayWeather(data) {
    locationName.textContent = `${data.name}, ${data.sys.country}`;
    temperature.textContent = `Temperature: ${data.main.temp}°C`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    condition.textContent = `Condition: ${data.weather[0].description}`;
    weatherResult.classList.remove('hidden');
}
