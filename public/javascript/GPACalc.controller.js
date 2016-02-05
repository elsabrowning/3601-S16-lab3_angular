//GPA Controller
angular.module('mainApp').controller('GPAController', function() {
    var GPACalc = this;
    console.log("GPA Controller loaded");

    GPACalc.textFieldLetter ="";
    GPACalc.textFieldCredit = "";
    GPACalc.textFieldCourse = "";
    GPACalc.courses = [];
    GPACalc.letters = [];
    GPACalc.credits = [];

    GPACalc.data = [GPACalc.courses, GPACalc.letters,GPACalc.credits];

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
    };

    GPACalc.calculator = function(letterArray, creditArray){
        chunkOfNumbers = 0;
        creditSum = 0;
        for(i=0;i<letterArray.length;i++){
            x = letterConverter(letterArray[i])*parseInt(creditArray[i]);
            chunkOfNumbers+= x;
            creditSum += parseInt(creditArray[i]);
        }
        return chunkOfNumbers/creditSum;
    };


    GPACalc.addLetter = function(){
        if(GPACalc.textFieldLetter.length >= 1) {
           // GPACalc.addCourse.push({text: GPACalc.textFieldLetter});
            GPACalc.letters.push(GPACalc.textFieldLetter);
            GPACalc.textFieldLetter = "";

        }
    };

    GPACalc.addCourse = function(){
        if(GPACalc.textFieldCourse.length >= 1) {
            //GPACalc.addLetter.push({text: GPACalc.textFieldLetter});
            GPACalc.courses.push(GPACalc.textFieldCourse);
            GPACalc.textFieldCourse = "";

        }
    };

    GPACalc.addAll = function(){
        GPACalc.addCredit();
        GPACalc.addLetter();
        GPACalc.addCourse();
    };

    GPACalc.addCredit = function(){
        if(GPACalc.textFieldCredit.length >= 1) {
           // GPACalc.addCredit.push({text: GPACalc.textFieldCredit});
            GPACalc.credits.push(parseInt(GPACalc.textFieldCredit));
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