/**
 * Created by Steve Kehoe on 9/21/2015.
 */
Template.selectTime.events({
    'click': function(e){
        e.preventDefault();
        var value = $(e.target).val();
        alert(this.value());
    }
});