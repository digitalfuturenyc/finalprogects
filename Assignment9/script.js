var map;

function initMap() {
    var mapOptions = {
        center: new google.maps.LatLng(37.09024, -95.712891)
        , zoom: 5
        , backgroundColor: "#000000"
        , mapTypeId: google.maps.MapTypeId.HYBRID
    }
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    //ADD MARKER
    $.getJSON("capitals.json", function (json) {
        console.log(json);
        for (key in json) {
            let capital = json[key];
            let marker = new google.maps.Marker({
                position: {
                    lat: +capital.lat
                    , lng: +capital.long
                , }
                , map: map
                , title: capital.capital
            });
            google.maps.event.addListener(marker, 'click', function () {
                console.log(marker.title);
                $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + marker.title + "&id=524901&APPID=27d388faf029d2c7e86b756561ca29af&units=imperial", function (jsonWeather) {
                    console.log(jsonWeather);
                    console.log(jsonWeather.name);
      $('.greeting-city').html("City " + jsonWeather.name);
       $('.greeting-weather').html("Temperature " + jsonWeather.main.temp

);
                  
    
                    
                    
                });
                
                
            });
        }
    });
}