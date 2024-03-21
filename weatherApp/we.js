function getWeather() {
    var city = document.getElementById('cityInput').value.trim(); // Trim to remove leading/trailing spaces
    if (city === '') {
        alert('Please enter a city name.');
        return;
    }

    var apiKey = '41af970662d33589364e3cde2c4e998e'; // Replace 'YOUR_API_KEY_HERE' with your actual API key
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.cod === 200) {
            var weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                <h2>Weather in ${city}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Description: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
        } else {
            alert(`Error: ${data.message}`);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
}
