/**
 * Created by Steve Kehoe on 9/22/2015.
 */


Template.home.events({
    'click #meditateButton': function(e){
        $("#meditationBell").trigger("play");
        $("#meditationBell").trigger("pause");
        console.log("audio initialized");
        Router.go("selectTime");

    }
});