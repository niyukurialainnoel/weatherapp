const apiKey = '3c9ec0f8c00a2044754f739ee033203a';
const form = document.querySelector('form');
const submitButton = document.querySelector('#submit-btn');
const weatherInfo = document.querySelector('#weather-info');

form.addEventListener('submit', function(event) {
	event.preventDefault();
	const city = document.querySelector('#city').value;
	getWeather(city);
});
function getWeather(city) {
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
	fetch(url)
	.then(response => response.json())
	.then(data => {
		const temperature = data.main.temp;
		const description = data.weather[0].description;
		weatherInfo.innerHTML = `<p>Temperature: ${temperature}°C</p><p>Description: ${description}</p>`;
	})
	.catch(error => {
		console.log(error);
		weatherInfo.innerHTML = `<p>Sorry, we could not retrieve the weather for ${city}.</p>`;
	});
}