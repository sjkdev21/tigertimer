/**
 * Created by Steve Kehoe on 9/21/2015.
 */
Meteor.publish('sessions', function() {
    return Sessions.find({owner: this.userId});
});