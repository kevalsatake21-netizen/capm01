sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], (Controller, MessageBox) => {
    "use strict";

    return Controller.extend("customviewbookshop.controller.View1", {
        onInit() {
        },

        onCollapseExpandPress() {
			const oSideNavigation = this.byId("sideNavigation"),
				bExpanded = oSideNavigation.getExpanded();

			oSideNavigation.setExpanded(!bExpanded);
		},

        Submit: function(){
           // alert("Test");
           var title = this.getView().byId("title").getValue();
           var author = this.getView().byId("author").getValue();
           var price  = this.getView().byId("price").getValue();
           var stock = this.getView().byId("stock").getValue();
           var location = this.getView().byId("location").getValue();
           var genre = this.getView().byId("genre").getValue();
            var oModel = this.getView().getModel();

           //alert(title + " " + author);

           var oContext = oModel.bindList("/Books").create({
                "title" : title,
                "author" : author,
                "price" : price,
                "stock" : stock,
                //"location" : location,
                "genre" : genre
            });
             oContext.created().then(() =>{
                MessageBox.success("Book added successfully!");
                this.getView().byId("title").setValue(null);
                this.getView().byId("author").setValue(null);
                this.getView().byId("price").setValue(null);
                this.getView().byId("stock").setValue(null);
                this.getView().byId("genre").setValue(null);
                this.getView().byId("location").setValue(null);
            }).catch((err) => {
                MessageBox.error("Error adding item : " + err);
            });
        },
        onAddBookPressed(){
            this.hideAllPanels();
            var oPanel = this.byId("Panel1");
            oPanel.setVisible(true);
        },
         onViewDetailsBookPressed() {
            this.hideAllPanels();
            var oPanel = this.byId("Panel2");
            oPanel.setVisible(true);
        },
         hideAllPanels() {
            this.byId("Panel1").setVisible(false);
            this.byId("Panel2").setVisible(false);
        }

    });
});