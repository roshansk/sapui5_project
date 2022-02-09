sap.ui.define([

    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",

], function (UIComponent,  JSONModel) {
    "use strict";

    return UIComponent.extend("webapp.Component", {
        metadata : {
            manifest:"json"
        },

        setInputMsg : function () {
            
            let items = this.getModel().getProperty("/inventory");
            if(items.length <= 0){
                this.getModel().setProperty("/infoMsgs/groceryInputMsg","Hey there! your list looks empty, add some things to get.") ;
            }
            else if(items.length > 0 && items.length <=5){
                this.getModel().setProperty("/infoMsgs/groceryInputMsg","A few items to go, lets get it done") ;
            }
            else{
                this.getModel().setProperty("/infoMsgs/groceryInputMsg","Lots of stuff to get done...") ;
            }
            console.log("setMsg called",this.getModel().getProperty("/infoMsgs/groceryInputMsg"))
        },

        init : function () {
            UIComponent.prototype.init.apply(this,arguments);

            let oData = {
                
                infoMsgs:{
                    groceryInputMsg : "Blah Blah Blah"
                },

                groceryInput:{
                    item:""
                },

                inventory:[
                    {
                        "id":"001",
                        "item":"Apples"
                    },
                    {
                        "id":"002",
                        "item":"Cake"
                    },
                    {
                        "id":"003",
                        "item":"Pie"
                    },

                ]

            }

            var oModel = new JSONModel(oData);
            this.setModel(oModel);
            this.setInputMsg();
        },

    })


}); 