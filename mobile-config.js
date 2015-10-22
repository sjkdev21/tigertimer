/**
 * Created by stevenkehoe on 10/22/15.
 */

// This section sets up some basic app metadata,
// the entire section is optional.


App.info({
    id: 'com.bittiger.tigertimer',
    name: 'TigerTimer',
    description: 'The worlds simplest meditation timer',
    author: 'Steve Kehoe',
    email: 'steve@bittiger.io',
    website: 'http://tigertimer.meteor.com'
});


// Set up resources such as icons and launch screens.
App.icons({
    'iphone': 'public/img/ios/icons/apple-icon-76x76.png',
    'iphone_2x': 'public/img/ios/icons/apple-icon-120x120.png',
    'iphone_3x': 'public/img/ios/icons/apple-icon-180x180.png',
    // ... more screen sizes and platforms ...
});

App.launchScreens({
    'iphone': 'public/img/ios/splash/Default@2x~iphone_640x960.png',
    'iphone6': 'public/img/ios/splash/Default-750@2x~iphone6-portrait_750x1334.png',
    'iphone_2x': 'public/img/ios/splash/Default@2x~iphone_640x960.png',
    'iphone6p_portrait': 'public/img/ios/splash/Default-1242@3x~iphone6s-portrait_1242x2208.png',
    'iphone6p_landscape': 'public/img/ios/splash/Default-1242@3x~iphone6s-landscape_2208x1242.png'
    // ... more screen sizes and platforms ...
});

// Set PhoneGap/Cordova preferences
App.setPreference('BackgroundColor', '0xff0000ff');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('Orientation', 'default');
App.setPreference('Orientation', 'all', 'ios');

// Pass preferences for a particular PhoneGap/Cordova plugin
/*
App.configurePlugin('com.phonegap.plugins.facebookconnect', {
    APP_ID: '1234567890',
    API_KEY: 'supersecretapikey'
});
*/