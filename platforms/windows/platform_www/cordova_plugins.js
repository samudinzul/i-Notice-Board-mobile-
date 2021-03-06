cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-datepicker.DatePicker",
        "file": "plugins/cordova-plugin-datepicker/www/windows/DatePicker.js",
        "pluginId": "cordova-plugin-datepicker",
        "clobbers": [
            "datePicker"
        ]
    },
    {
        "id": "cordova-plugin-datepicker.DatePickerProxy",
        "file": "plugins/cordova-plugin-datepicker/src/windows/DatePickerProxy.js",
        "pluginId": "cordova-plugin-datepicker",
        "merges": [
            ""
        ]
    },
    {
        "id": "cordova-plugin-document-viewer.SitewaertsDocumentViewer",
        "file": "plugins/cordova-plugin-document-viewer/www/sitewaertsdocumentviewer.js",
        "pluginId": "cordova-plugin-document-viewer",
        "clobbers": [
            "cordova.plugins.SitewaertsDocumentViewer",
            "SitewaertsDocumentViewer"
        ]
    },
    {
        "id": "cordova-plugin-document-viewer.SitewaertsDocumentViewerProxy",
        "file": "plugins/cordova-plugin-document-viewer/src/windows/sitewaertsdocumentviewerProxy_native.js",
        "pluginId": "cordova-plugin-document-viewer",
        "merges": [
            ""
        ]
    },
    {
        "id": "cordova-plugin-email.EmailComposer",
        "file": "plugins/cordova-plugin-email/www/email_composer.js",
        "pluginId": "cordova-plugin-email",
        "clobbers": [
            "cordova.plugins.email",
            "plugin.email"
        ]
    },
    {
        "id": "cordova-plugin-email.EmailComposerProxy",
        "file": "plugins/cordova-plugin-email/src/windows/EmailComposerProxy.js",
        "pluginId": "cordova-plugin-email",
        "runs": true
    },
    {
        "id": "cordova-plugin-email.EmailComposerProxyImpl",
        "file": "plugins/cordova-plugin-email/src/windows/EmailComposerProxyImpl.js",
        "pluginId": "cordova-plugin-email",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-datepicker": "0.9.3",
    "cordova-plugin-document-viewer": "0.9.9",
    "cordova-plugin-email": "1.2.7",
    "cordova-plugin-whitelist": "1.3.3"
};
// BOTTOM OF METADATA
});