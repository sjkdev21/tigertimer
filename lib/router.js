/**
 * Created by Steve Kehoe on 9/14/2015.
 */
Router.configure({
    layoutTemplate: "masterLayout",
    loadingTemplate: "loading",
    notFoundTemplate: "notFound"
});
Router.route('/', {
    name: 'home'
});

var requireLogin = function() {
    if (! Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else {
            this.render('accessDenied');
        }
    } else {
        this.next();
    }
}
//Router.onBeforeAction('dataNotFound', {only: 'postPage'});
Router.onBeforeAction(requireLogin, {except: 'home'});
/*
Router.plugin('ensureSignedIn', {
    except: ['home', 'atSignIn', 'atSignUp', 'atForgotPassword', 'atSignOut']
});
*/