Sessions.allow({
    insert: function(userId, doc) {
        return (userId && doc.owner === userId);
    },
    update: function(userId, doc, fieldNames, modifier) {
        return (userId && doc.owner === userId);
    }
});