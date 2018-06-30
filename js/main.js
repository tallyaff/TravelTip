console.log('Main!');

import weatherService from './services/weather.service.js'
import locService from './services/loc.service.js'
import mapService from './services/map.service.js'

//babel


// locService.getLocs()
//     .then(locs => console.log('locs', locs))




window.onload = () => {
    // mapService.initMap()
    //     .then(
    //         () => {
    //             mapService.addMarker({ lat: 32.0749831, lng: 34.9120554 });
    //         }
    //     ).catch(console.warn);


    getPositionOnMap();

    



    // locService.getPosition()
    //     .then(pos => {
    //         console.log('User position is:', pos.coords);
    //         mapService.initMap(pos.coords.latitude, pos.coords.longitude)
    //     })
    //     // .then(pos.coords. => {
    //     //     mapService.initMap(latitude, longitude)
    //     // })
    //     .catch(err => {
    //         console.log('err!!!', err);
    //     })

}




function getPositionOnMap() {

    locService.getPosition()
        .then(pos => {
            console.log('User position is:', pos.coords);
            mapService.initMap(pos.coords.latitude, pos.coords.longitude)
            weatherService.getWeather(pos.coords.latitude, pos.coords.longitude)
        })
        
    // .then(pos.coords. => {
    //     mapService.initMap(latitude, longitude)
    // })

        .catch(err => {
            console.log('err!!!', err);
        })

}
// document.querySelector('.btn1').onclick =  () => {
//     console.log('Thanks!');
// }


document.querySelector('.btn1').addEventListener('click', (ev) => {
    console.log('Aha!', ev.target);
    getPositionOnMap();

})

document.querySelector('.btn-search').addEventListener('click', (ev) => {
    getSearchPos(geocoder);

})


function copyToClipboard(){



}
