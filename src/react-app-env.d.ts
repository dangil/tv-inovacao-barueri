/// <reference types="react-scripts" />
// Set your iOS Settings
var iosSettings = {};
iosSettings["kOSSettingsKeyAutoPrompt"] = false;
iosSettings["kOSSettingsKeyInAppLaunchURL"] = false;

window.plugins.OneSignal
    .startInit("ZDgxMWNhNDYtNmE0OS00YzE2LWEzODAtZjA4M2YwNTRkOGMx")
    .handleNotificationOpened(notificationOpenedCallback)
    .iOSSettings(iosSettings)
    .inFocusDisplaying(window.plugins.OneSignal.OSInFocusDisplayOption.Notification)
    .endInit();

// The promptForPushNotificationsWithUserResponse function will show the iOS push notification prompt. We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step 6)
window.plugins.OneSignal.promptForPushNotificationsWithUserResponse(function(accepted) {
    console.log("User accepted notifications: " + accepted);
});