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

Sessions.allow({
    insert: function(userId, doc) {
        return (userId && doc.owner === userId);
    },
    update: function(userId, doc, fieldNames, modifier) {
        return (userId && doc.owner === userId);
    }
});

Sessions.deny({
    update: function(userId, post, fieldNames) {
        // may only edit the following two fields:
        return (_.without(fieldNames, 'endedAt').length > 0);
    }
});


