/**
 * Created by Steve Kehoe on 9/22/2015.
 */


  AccountsTemplates.configure({
    confirmPassword: false,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    sendVerificationEmail: false,
    lowercaseUsername: false,
    showAddRemoveServices: true,
    showForgotPasswordLink: true,
    showLabels: true,
    showPlaceholders: true,
    showResendVerificationEmailLink: false,
    continuousValidation: false,
    negativeFeedback: false,
    negativeValidation: true,
    positiveValidation: false,
    positiveFeedback: true,
    showValidating: true,
    privacyUrl: "home",
    termsUrl: "home",
    homeRoutePath: "home",
    onLogoutHook: function() {
      return console.log('logout');
    },
    onSubmitHook: function() {
      return console.log('submitting form');
    }
  });