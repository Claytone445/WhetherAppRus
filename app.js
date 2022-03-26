
let weather = {
    apiKey: 'e3e2f93be2ec2841a9db2b13e38a25dc',
    fetchWeather: function(city) {
        fetch('https://api.openweathermap.org/data/2.5/weather?q='
         + city +'&units=metric&appid='
         + this.apiKey + '&lang=ru'
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        document.querySelector('.city').innerText = 'Погода - ' + ' ' + name;
        document.querySelector('.temperature').innerText = temp + '°C';
        document.querySelector('.icon').src = 'https://openweathermap.org/img/wn/'+icon +'.png';
        document.querySelector('.description').innerText = '' + ' ' + description;
        document.querySelector('.humidity').innerText = 'Влажность:' + ' ' + humidity + '%';
        document.querySelector('.wind').innerText = 'Скорость ветра:' + ' ' + speed + 'км/ч';
        document.querySelector('.weather').classList.remove('loading');
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1920x1080?" + name + "')";

    },
    search: function() {
        this.fetchWeather(document.querySelector('.search-bar').value);
        
    },
};

document.querySelector('.search button').addEventListener('click', function() {
    weather.search();
    document.querySelector('input').value = '';
});

document.querySelector('.search-bar').addEventListener('keyup', function(event) {
    if(event.key == 'Enter') {
    weather.search();
    document.querySelector('input').value = ''; }
});

weather.fetchWeather('геленджик');


