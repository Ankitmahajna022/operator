$(document).ready(function () {
    $('#getWeatherBtn').click(function () {
      let city = $('#cityInput').val().trim();
  
      if (city === '') {
        alert('Please enter a city name');
        return;
      }
  
      let apiKey = 'b018f2c9fb47ca99706337c930c6582d';
      let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
      $.get(apiURL, function (data) {
        let weather = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
          <p><strong>Weather:</strong> ${data.weather[0].main}</p>
          <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
          <p><strong>Wind:</strong> ${data.wind.speed} m/s</p>
        `;
        $('#weatherResult').html(weather);
      }).fail(function () {
        $('#weatherResult').html('<p>City not found. Please try again.</p>');
      });
    });
  });
  