//GPA Controller
angular.module('mainApp').controller('GPACtrl', function() {
    var GPACalc = this;

    GPACalc.textFieldLetter ="";
    GPACalc.textFieldCredit = "";
    GPACalc.textFieldCourse = "";
    GPACalc.letters = [];
    GPACalc.credits = [];

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

    GPACalc.calculator = function(letterArray, creditArray){
        chunkOfNumbers = 0;
        creditSum = 0;
        for(i=0;i<letterArray.length;i++){
            x = letterConverter(letterArray[i])*parseInt(creditArray[i])
            chunkOfNumbers+= x
            creditSum += parseInt(creditArray[i]);
        }
        return chunkOfNumbers/creditSum;
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
            GPACalc.letters.push({text: GPACalc.textFieldLetter});
            GPACalc.textFieldLetter = "";

        }
    };

    GPACalc.addCredit = function(){
        if(GPACalc.textFieldCredit.length >= 1) {
            GPACalc.addCredit.push({text: GPACalc.textFieldCredit});
            GPACalc.credits.push({text: GPACalc.textFieldCredit});
            GPACalc.textFieldCredit = "";
        }
    };

    GPACalc.removeData = function(index){
        GPACalc.data.splice(index, 1);
    };

    GPACalc.itemsInList = function(){
        return GPACalc.letters.length;
    };
});