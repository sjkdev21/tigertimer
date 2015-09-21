/**
 * Created by Steve Kehoe on 9/14/2015.
 */


Sessions = new Meteor.Collection('sessions');

Schemas.Sessions = new SimpleSchema({
    duration: {
        type: Number
    },
    startedAt: {
        type: Date,
        autoValue: function() {
            if (this.isInsert) {
                return new Date();
            }
        }
    },
    endedAt: {
        type: Date,
        optional: true,
        autoValue: function() {
            if (this.isUpdate) {
                return new Date();
            }
        }
    },
    isInProgress:{
        type: Boolean,
        autoValue: function() {
            if (this.isInsert) {
                return true;
            }
            if (this.isUpdate()) {
                return false;
            }
        }
    },
    owner: {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
        autoValue: function() {
            if (this.isInsert) {
                return this.userId;
            }
        }

    }
});

Sessions.attachSchema(Schemas.Sessions);


