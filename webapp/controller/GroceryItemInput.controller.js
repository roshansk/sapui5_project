sap.ui.define([

    "sap/ui/core/mvc/Controller",
    "sap/base/util/uid/",
    "sap/m/MessageToast"

], function(Controller, uid, MessageToast) {
    
    'use strict';
    
    return Controller.extend("webapp.controller.GroceryItemInput",{

        getItem : function() {
            const item = this.getView().getModel().getProperty("/groceryInput/item");
            const inventory = this.getView().getModel().getProperty("/inventory")
            const newOrder = {
                "id": uid(),
                "item":item
            }
            inventory.push(newOrder);
            this.getView().getModel().setProperty("/inventory",inventory);
            MessageToast.show(`${item} Added!`);
            this.getOwnerComponent().setInputMsg();
        }

    });
});