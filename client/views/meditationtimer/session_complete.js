/**
 * Created by Steve Kehoe on 9/22/2015.
 */

Template.sessionComplete.helpers({
    sessionMinutes: function () {
        var data = Template.instance().data;
        var secondsMeditated = data.duration - data.timeRemaining;
        return Math.floor(secondsMeditated/60);
    }
});

Template.sessionComplete.onCreated(function() {
    $("#meditationBell").trigger("play");
});
