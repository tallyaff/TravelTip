// var locs = [{lat: 11.22, lng: 22.11}]

// import mapService from '.././services/map.service.js'

// function getLocs1() {
//     return Promise.resolve(locs);

// }



// function getLocs() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(locs);
//         }, 2000)
//     });

// }



function getSearchPos(geocoder) {
    var geocoder = new google.maps.Geocoder();
    var address = "new york";
    geocoder.geocode({ 'address': address }, function (results, status) {

        if (status == google.maps.GeocoderStatus.OK) {
            var latitude = results[0].geometry.location.lat();
            var longitude = results[0].geometry.location.lng();
            alert(latitude);
        }
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