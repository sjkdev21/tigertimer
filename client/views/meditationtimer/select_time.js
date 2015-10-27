/**
 * Created by Steve Kehoe on 9/21/2015.
 */
Template.selectTime.helpers({
    isCordova: function () {
       return Meteor.isCordova;
    }
});

Template.selectTime.events({
    'click': function(e){
        e.preventDefault();
        var sessionDuration = $(e.target).attr("value") * 60;
        var sessionId = Sessions.insert({"duration": sessionDuration});
        Router.go('timeLeft', {_id: sessionId});

    }
});

Template.selectTime.onRendered(function() {
    var options = {
        date: new Date(0),
        mode: 'time',
        minDate: new Date(0),
        maxDate: new Date(60000 * 60 * 2)
    };

    function onSuccess(date) {
        alert('Selected date: ' + date);
    }

    function onError(error) { // Android only
        alert('Error: ' + error);
    }

    datePicker.show(options, onSuccess, onError);
    console.log("Initializing timePicker");

});
