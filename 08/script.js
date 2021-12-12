fetch(
  'https://api.openweathermap.org/data/2.5/forecast/daily?q=Pittsburgh&cnt=7&units=imperial&appid=4b5e9e43014d8984bb133a3007dff65b'
)
  .then((response) => response.json())
  .then((data) => {
    weatherData = data;


  let date = new Date();
  let days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let dayOfWeek = date.getDay()
  
  
  for (let i = 0; i < 7; i++) {
    dayOfWeek++
    if (dayOfWeek > 6) {
      dayOfWeek = dayOfWeek - 7
    }
    
    let newDay = document.createElement('div');
      newDay.classList.add('day');

      let weatherType = 'sunny';

      switch (data.list[i].weather[0].main.toLowerCase()) {
        case 'thunderstorm':
          weatherType = 'stormy';
          break;
        case 'drizzle':
          weatherType = 'rainy';
          break;
        case 'rain':
          weatherType = 'rainy';
          break;
        case 'snow':
          weatherType = 'snowy';
          break;
        case 'clouds':
          if (
            data.list[i].weather[0].id === 803 ||
            data.list[i].weather[0].id === 804
          ) {
            weatherType = 'cloudy';
          } else {
            weatherType = 'partly-cloudy';
          }
          break;
      }

      newDay.innerHTML = `

    <div class="day">
    <div class="dayOfWeek">
      <h4>${dayOfWeek} </h4>
      <h3>${date.getDate() + i} </h3>
    </div>
    <div class="dataContainer">
      <img class="weatherIcon" src="./images/${weatherType}.svg" alt="" />
      <div class="dataBox ${weatherType}Style">
        <div class="info">
          <div class="temp">${Math.ceil(data.list[i].temp.max)}</div>
          <div class="rainLow">
            <div class="rain">
              <img src="./images/precipitation.svg" alt="" /><span
                >${Math.floor(data.list[i].pop)}%</span
              >
            </div>
            <div class="low">
              <img src="./images/low.svg" alt="" /><span>${Math.floor(
                data.list[i].temp.min
              )}°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
`;

      document.getElementById('container').appendChild(newDay);
    }
  });
