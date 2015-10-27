/**
 * Created by Steve Kehoe on 9/22/2015.
 */


Template.home.events({
    'click #meditateButton': function(e){
        $("#meditationBell").trigger("play");
        $("#meditationBell").trigger("pause");
        console.log("audio initialized");

        if(Meteor.isCordova) {
            cordova.plugins.notification.local.schedule({
                id: 1,
                title: "Meditation Complete",
                text: "Great Job",
                badge: 1,
                at: new Date((new Date()).getTime() + 60000),
                sound: 'file://application/app/sounds/meditationbell.mp3',
                ongoing:  true

            });
        }

        Router.go("selectTime");

    }
});