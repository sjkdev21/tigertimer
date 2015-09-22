/**
 * Created by Steve Kehoe on 9/22/2015.
 */
/*
Sessions.update(currentSessionId, {$set: {minutesRemaining : 5}}, function(error) {
    if (error) {
        // display the error to the user
        throwError(error.reason);
    }
});
 */

function updateRemainingTime(currentSession) {
    var currentTimeLeft = currentSession.timeRemaining
    interval = Meteor.setInterval(function() {
                    if (currentTimeLeft > 0){
                        currentTimeLeft--;
                        Session.set("timeLeft", currentTimeLeft);
                        if (currentTimeLeft % 10 == 0){
                            Sessions.update(currentSession._id, {$set: {"timeRemaining" : currentTimeLeft}}, function(error) {
                                //console.log(error);
                            });
                            console.log("updated remaining time");
                        }
                    }
                    else {
                        Meteor.clearInterval(interval);
                        Sessions.update(currentSession._id, {$set: {"timeRemaining" : currentTimeLeft, endedAt: new Date(), isInProgress:false}}, function(error) { });
                        console.log("Session Ended")
                        Router.go('sessionComplete', {_id: currentSession._id});
                    }
                }, 1 * 1000);
}

Template.timeLeft.onCreated(function() {
    Session.set("timeLeft", this.data.timeRemaining);
    updateRemainingTime(this.data)
});

Template.timeLeft.helpers({
    minsLeft: function () {
        var seconds = Session.get("timeLeft");
        var days = Math.ceil(seconds/60);
        return days;
    },
    percentComplete: function () {
        var secondsLeft = Session.get("timeLeft");
        var secondsTotal = Template.instance().data.duration;
        return (((secondsTotal-secondsLeft)/secondsTotal) * 100);
    }
});
// Doing this the old school way... for science!  For a cleaner approach, use reactive-var package
    /*
var _minutesLeft = 0;
var _minutesLeftTracker = new Tracker.Dependency();

minutesLeft = function() {
    _minutesLeftTracker.depend();
    return _minutesLeft;
};


// Initialize _minutesLeft to be the same as this Session's Duration
Template.timeLeft.onCreated(function() {
    //Session.set('postEditErrors', {});
    _minutesLeft = this.data.duration;
});


Template.timeLeft.helpers({
    minsLeft: function () {
       return minutesLeft();
    }
});
     */