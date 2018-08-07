console.log('Main!');

import weatherService from './services/weather.service.js'
import locService from './services/loc.service.js'
import mapService from './services/map.service.js'



window.onload = () => {
    getPositionOnMap();
}

function getPositionOnMap() {
    locService.getPosition()
        .then(pos => {
            console.log('User position is:', pos.coords);
            mapService.initMap(pos.coords.latitude, pos.coords.longitude)
            weatherService.getWeather(pos.coords.latitude, pos.coords.longitude)
        })
        .catch(err => {
            console.log('err!!!', err);
        })

}
    document.querySelector('.btn-search').addEventListener('click', (ev) => {
        var place = document.querySelector('.search').value;
        locService.getSearchPos(place)
            .then(locs => {
                console.log('User result is:', locs);
                mapService.initMap(locs.lat, locs.lng)
            })
    })



