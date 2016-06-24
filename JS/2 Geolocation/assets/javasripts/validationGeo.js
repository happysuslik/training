/**
 * Created by Admin on 31.10.2015.
 */


window.addEventListener('load', checkSupport, true);

function checkSupport () {
    if (navigator.geolocation) {
        startGeo();
    } else {
        document.getElementById("msg").innerHTML = "Your browser not support HTML 5 Geolocation API!";
    }
}

function startGeo () {
    navigator.geolocation.getCurrentPosition(updatePosition, handleError);

    function updatePosition (pos) {
        var position = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
        document.getElementById("msg").innerHTML = "Position definitely accuracy in " + pos.coords.accuracy + " m.";

        var options = {
            zoom: 15,
            center: position
        };

        var map = new google.maps.Map(document.getElementById("map"), options);

        var marker = new google.maps.Marker({
            position: position,
            map: map,
            title: "This you!"
        });

        var infowindow = new google.maps.InfoWindow({
            content: "Marker Location"
        });

        google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(map, marker);
        });
    }

    function handleError(error) {
        switch (error.code) {
            case 0:
                updateStatus("When you try to locate the error occurred: " + error.message);
                break;
            case 1:
                updateStatus("A friend to receive location data.");
                break;
            case 2:
                updateStatus("The browser was unable to determine the location of: " + error.message);
                break;
            case 3:
                updateStatus("Expired available timeout.");
                break;
        }
    }

    function updateStatus(message) {
        document.getElementById("status").innerHTML = message;
    }


}