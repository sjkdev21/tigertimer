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
    currentTimeLeft = currentSession.timeRemaining;
    interval = Meteor.setInterval(function() {
                    if (currentTimeLeft > 0){
                        currentTimeLeft--;
                        Session.set("timeLeft", currentTimeLeft);
                        if (currentTimeLeft % 5 == 0){
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
    },
    paused: function() {
        return Session.get("pauseState");
    }
});

Template.timeLeft.hooks({
    destroyed: function () {
        Meteor.clearInterval(interval);
    }
});

Template.timeLeft.events({
    'click #pauseButton': function(e){
        var currentSession = Template.instance().data;
        Sessions.update(currentSession._id, {$set: {"timeRemaining" : currentTimeLeft}}, function(error) {});
        Session.set("pauseState", true);
        Meteor.clearInterval(interval);
        console.log("timer paused");
    },
    'click #resumeButton': function(e){
        Session.set("pauseState", false);
        updateRemainingTime(Template.instance().data);
        console.log("timer resumed");
    },
    'click #endButton': function(e){
        var currentSession = Template.instance().data;
        Sessions.update(currentSession._id, {$set: {"timeRemaining" : currentTimeLeft, endedAt: new Date(), isInProgress:false}}, function(error) {});
        console.log("timer end");
        Router.go('sessionComplete', {_id: currentSession._id});
    }
});