function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 11.593296, lng: 76.081050};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 15,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'South Jakarta, INA' // Title Location
    });
}