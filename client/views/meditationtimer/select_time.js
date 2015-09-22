/**
 * Created by Steve Kehoe on 9/21/2015.
 */
Template.selectTime.events({
    'click': function(e){
        e.preventDefault();
        var sessionDuration = $(e.target).attr("value");
        var sessionId = Sessions.insert({"duration": sessionDuration});
        Router.go('timeLeft', {_id: sessionId});

    }
});