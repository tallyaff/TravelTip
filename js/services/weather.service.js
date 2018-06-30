

const W_KEY = '47115ca4e049c56eeef6b684e924cd20';



function getWeather(lat, lng) {

    var prm = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&APPID=${W_KEY}`)
        .then(function (res) {
            console.log(res.data)
            renderWeather(res.data);
        })

}

function renderWeather(data){
 document.querySelector('.weather').innerHTML =
`Wheater Today <br>
<img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png"/><br>
  temperature from ${data.main.temp_min} to ${data.main.temp_max}, wind ${data.wind.speed}` ;
}

export default {
    getWeather,
    // addMarker,

}