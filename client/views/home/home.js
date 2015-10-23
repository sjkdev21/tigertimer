/**
 * Created by Steve Kehoe on 9/22/2015.
 */


Template.home.events({
    'click #meditateButton': function(e){
        $("#meditationBell").trigger("play");
        $("#meditationBell").trigger("pause");
        console.log("audio initialized");
        /*
        if(Meteor.isCordova) {
            cordova.plugins.notification.local.schedule({
                id: 1,
                title: "Meditation Complete",
                text: "Great Job",
                at: new Date(),
                sound: getMediaUrl('/sounds/meditationbell.mp3'),
                icon: "http://icons.com/?cal_id=1"
            });
        }
         */
        Router.go("selectTime");

    }
});