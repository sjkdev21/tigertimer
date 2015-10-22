/**
 * Created by stevenkehoe on 10/22/15.
 */

getMediaUrl = function (sound) {

    if (device.platform.toLowerCase() === "android") {

        return cordova.file.applicationDirectory.replace('file://', '') + 'www/application/' + sound.substr(1);

    }
    else if (device.platform.toLowerCase() === "ios") {
        return cordova.file.applicationDirectory.replace('file://', '') + 'www/application/app/' + sound.substr(1);
    }

    else {

    return cordova.file.applicationDirectory.replace('file://', '') + 'www/application/app/' + sound.substr(1);

    }

}

playSound = function (sound) {

    return new Media(

        getMediaUrl(sound),

        function (success) {
            // success
        },
        function (err) {
            // error
        }
    );
}
