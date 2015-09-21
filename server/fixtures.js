/**
 * Created by Steve Kehoe on 9/21/2015.
 */
if ( Meteor.users.find().count() === 0 ) {
    var myId =  Accounts.createUser({
                username: 'oohaysmlm',
                email: 'oohaysmlm@gmail.com',
                password: 'password'
            });
    /*
    Sessions.insert({
        startedAt: "2015-09-14T18:47:07.316Z",
        endedAt: "2015-09-14T18:57:07.316Z",
        isInProgress: false,
        duration: 15,
        owner: myId
    });
    */
}

