/**
 * Created by Steve Kehoe on 9/22/2015.
 */
Template.registerHelper('pluralize', function(n, thing) {
    if (n === 1) {
        return '1 ' + thing;  
    }
    else {
        return n + ' ' + thing + 's';
    }
});
