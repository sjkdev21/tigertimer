/**
 * Created by Steve Kehoe on 9/22/2015.
 */

AccountsTemplates.configure({
    defaultLayout: 'masterLayout',
});

Router.route('signOut', {
    path: '/sign-out',
    onBeforeAction: function() {
        Meteor.logout(function() {});
        this.redirect('/');
        return this.next();
    }
});

AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('enrollAccount');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');
AccountsTemplates.configureRoute('resendVerificationEmail');