sap.ui.define([

    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",

], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("webapp.controller.App",{

        onPress : function () {
            let bundle = this.getView().getModel("i18n").getResourceBundle();
            let msg = bundle.getText("appTitle"); 
            MessageToast.show(msg);
        }
    });
});