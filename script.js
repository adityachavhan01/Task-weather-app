document.getElementById('location-form').addEventListener('submit', getWeather);

function getWeather(e) {
    e.preventDefault();

    const locationInput = document.getElementById('location-input').value;

    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationInput}?unitGroup=metric&key=WBSH34SQP2CZBAHN6DHMEDJRW&contentType=json`)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weather-info');
            weatherInfo.innerHTML = `
                <h2>Weather in ${data.resolvedAddress}</h2>
                <p>Temperature: ${data.days[0].temp}</p>
                <p>Conditions: ${data.days[0].conditions}</p>
                <p>Humidity: ${data.days[0].humidity}%</p>
                <p>Wind Speed: ${data.days[0].windspeed}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            const weatherInfo = document.getElementById('weather-info');
            weatherInfo.innerHTML = '<p>Failed to fetch weather data. Please try again.</p>';
        });
}
