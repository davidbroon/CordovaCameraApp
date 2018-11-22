let app = {
    init: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function(){
        console.log('device ready')
    }
};
    app.init();
    var photoOutput = document.getElementById('photoOutput');
    var coordsOutput = document.getElementById('coordsOutput');
    var Latitude;
    var Longitude;
           
    function takePicture() {
        navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError, {
            enableHighAccuracy: true
        })
    }

    var onGeoSuccess = function(position){
        Latitude = position.coords.latitude;
        Longitude = position.coords.longitude;
        navigator.camera.getPicture(onCamSuccess, onCamError);
    }
       
    function onGeoError(error) {
        console.log(error.message)
    }

    var onCamSuccess = function(photo) {
        photoOutput.src = 'data:image/png;base64,' + photo;
        coordsOutput.innerHTML = 'Latitude:' + Latitude + ', Longitude:' + Longitude + new Date();
    }

    var onCamError = function(error) {
        console.log(error.message)
    }


    