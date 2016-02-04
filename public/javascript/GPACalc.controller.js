//GPA Controller
angular.module('mainApp').controller('GPACtrl', function() {
    var GPACalc = this;

    GPACalc.textFieldLetter ="";
    GPACalc.textFieldCredits = "";
    GPACalc.textFieldCourse = "";

    GPACalc.letterConverter = function(letter){
        if (letter == "A"){
            return 4.0
        }
        else if(letter == "B"){
            return 3.0
        }
        else if(letter == "C"){
            return 2.0
        }
        else if(letter == "D"){
            return 1.0
        }
        else if(letter == "F"){
            return 0.0
        }
        else{return "Error"}
    }

    GPACalc.addCourse = function(){
        if(GPACalc.textFieldCourse.length >= 1) {
            GPACalc.addCourse.push({text: GPACalc.textFieldCourse});
            GPACalc.textFieldCourse = "";
        }
    };


    GPACalc.addLetter = function(){
        if(GPACalc.textField.length >= 1) {
            GPACalc.addLetter.push({text: GPACalc.textFieldLetter});
            GPACalc.textFieldLetter = "";
        }
    };

    GPACalc.addCredit = function(){
        if(GPACalc.textFieldCredits.length >= 1) {
            GPACalc.addCredit.push({text: GPACalc.textFieldCredits});
            GPACalc.textFieldCredits = "";
        }
    };

    GPACalc.removeData = function(index){
        GPACalc.data.splice(index, 1);
    };
});