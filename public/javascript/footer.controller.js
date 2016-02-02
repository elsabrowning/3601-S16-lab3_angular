/**
 * Created by brow3924 on 2/2/16.
 */
//====================== FOOTER CONTROLLER ============================
angular.module('stdComponents').controller('footerCtrl', function(){
    var footer = this;
    console.log("footer controller loaded");

    footer.textField = "";

    footer.pages = [
        {text: "Home", link: '/'},
        {text: "About", link: '/about'},
    ];
});
