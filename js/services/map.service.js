
var map;



function initMap(lat, lng) {
    console.log('InitMap');
    return _connectGoogleApi()
        .then(() => {
            console.log('google available');
            map = new google.maps.Map(
                document.querySelector('#map'), {
                    center: { lat, lng },
                    zoom: 15
                })
            var geocoder = new google.maps.Geocoder;
            getAddress(geocoder, lat, lng);                
        })
    console.log('Map!', map);
}





function getAddress(geocoder, lat, lng) {
    var elAddress = document.querySelector('.address');
    var latlng = { lat: lat, lng: lng };
    geocoder.geocode({ 'location': latlng }, function (results, status) {
        if (status == 'OK') {
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
            var address = results[0].formatted_address;
            elAddress.innerText = address;
        } else if (status === 'ZERO_RESULTS') {
            elAddress.innerText = 'address did not found'
        }
    });
}






// function getAddress(lat,lng){
//     console.log('ok2')

//     if (window.google) return Promise.resolve()
//     const API_KEY = 'AIzaSyDrlBNFNMfW4uoEp41Ae1QdJDyg70P5LvM';
//     var elGoogleGeocodeApi = document.createElement('script');
//     elGoogleGeocodeApi.src = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}=${API_KEY}`;
//     elGoogleGeocodeApi.async = true;
//     document.body.append(elGoogleGeocodeApi);
//     console.log('ok3')
//     debugger;
//     document.querySelector('.address').innerHTML = elGoogleGeocodeApi.src.results[0];

// }


// function addMarker(loc) {
//     var marker = new google.maps.Marker({
//         position: results[0].geometry.location,
//         map: map,
//         title: 'Hello World!'
//     });
//     return marker;
// }

function _connectGoogleApi() {
    if (window.google) return Promise.resolve()
    const API_KEY = 'AIzaSyDrlBNFNMfW4uoEp41Ae1QdJDyg70P5LvM';
    var elGoogleApi = document.createElement('script');
    elGoogleApi.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`;
    elGoogleApi.async = true;
    document.body.append(elGoogleApi);

    return new Promise((resolve, reject) => {
        elGoogleApi.onload = resolve;
        elGoogleApi.onerror = () => reject('Google script failed to load')
        // elGoogleApi.onerror = reject.bind(null,'Google script failed to load')
    })


}

// function getLatlng(lat,lng) {
//     return new Promise((resolve, reject) => {
//         var geocoder = new google.maps.Geocoder();
//         var latlng = new google.maps.LatLng(lat, lng);
//     })
// }




export default {
    initMap,
    _connectGoogleApi
    // addMarker,


}

