// var locs = [{lat: 11.22, lng: 22.11}]

// import mapService from '.././services/map.service.js'

// function getLocs() {
//     return Promise.resolve(locs);

// }



// function getLocs() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(locs);
//         }, 2000)
//     });

// }



function getSearchPos(place) {
    // debugger;

    // var geocoder = new google.maps.Geocoder();

    return new Promise(function (resolve, reject) {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': place }, function (results, status) {
            console.log(status)
            if (status == google.maps.GeocoderStatus.OK) {
                var locs = {
                    lat: results[0].geometry.location.lat,
                    lng: results[0].geometry.location.lng
                }
                resolve(locs);
            } else {
                // reject status upon un-successful status
                reject(status);
            }


        });

    });

}


function getPosition() {

    console.log('Getting Pos');
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
}



// function displayLocation(latitude,longitude){
//     return new Promise(function (resolve, reject) {


//     })


// }

// function getReverseGeocodingData(lat, lng) {
//     var latlng = new google.maps.LatLng(lat, lng);
//     // This is making the Geocode request
//     var geocoder = new google.maps.Geocoder();
//     geocoder.geocode({ 'latLng': latlng }, function (results, status) {
//         if (status !== google.maps.GeocoderStatus.OK) {
//             alert(status);
//         }
//         // This is checking to see if the Geoeode Status is OK before proceeding
//         if (status == google.maps.GeocoderStatus.OK) {
//             console.log(results);
//             var address = (results[0].formatted_address);
//         }
//     });
// }




export default {
    // getLocs: getLocs,
    getPosition: getPosition,
    getSearchPos: getSearchPos
}