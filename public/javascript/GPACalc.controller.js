//GPA Controller
angular.module('mainApp').controller('GPAController',function(){
    var GPACalc = this;
    console.log("GPA Controller loaded");

    GPACalc.textFieldLetter ="";
    GPACalc.textFieldCredit = "";
    GPACalc.textFieldCourse = "";
    GPACalc.courses = [];
    GPACalc.letters = [];
    GPACalc.credits = [];
    GPACalc.data = [];
    //GPACalc.dataList = [{course: GPACalc.courses,
                      //  letter: GPACalc.letters,
                       //  credit: GPACalc.credits}];




    GPACalc.addData = function(){
        //data = [];
        GPACalc.addAll();
        GPACalc.changeColor();
        //for(i=0; i<GPACalc.credits.length; i++){
        GPACalc.data.push([GPACalc.courses[GPACalc.courses.length - 1],GPACalc.credits[GPACalc.credits.length - 1], GPACalc.letters[GPACalc.letters.length - 1]]);
       // }
        console.log(GPACalc.data); //See console--it's adding them to an array, not sure yet how to display
        return GPACalc.data[GPACalc.credits.length - 1];
    };


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
            x = GPACalc.letterConverter(letterArray[i])*parseInt(creditArray[i]);
            if(x  < 0 || isNaN(x) == true){
                return "Invalid Information Entered, Please Delete Invalid Entry"
            }
            chunkOfNumbers+= x;
            creditSum += parseInt(creditArray[i]);
        }
        var GPA = chunkOfNumbers/creditSum;
        if(isNaN(GPA) == true){
            return "Please enter info.";
        }
        return GPA.toFixed(2);
    };

    GPACalc.changeColor= function() {
        if (GPACalc.calculator(GPACalc.letters, GPACalc.credits) >= 3.0) {
            document.getElementById("colors").style.color = "green"
        }
        else if (GPACalc.calculator(GPACalc.letters, GPACalc.credits) < 3.0 && GPACalc.calculator(GPACalc.letters, GPACalc.credits)>= 2.0) {
            document.getElementById("colors").style.color = "orange"
        }
        else{
            document.getElementById("colors").style.color = "red"

        }
    };

    GPACalc.addLetter = function(){
        if(GPACalc.textFieldLetter.length >= 1) {
            GPACalc.letters.push(GPACalc.textFieldLetter);
            GPACalc.textFieldLetter = "";

        }
    };

    GPACalc.addCourse = function(){
        if(GPACalc.textFieldCourse.length >= 1) {
            GPACalc.courses.push(GPACalc.textFieldCourse);
            GPACalc.textFieldCourse = "";

        }
    };

    GPACalc.addCredit = function(){
        if(GPACalc.textFieldCredit.length >= 1) {
            GPACalc.credits.push(parseInt(GPACalc.textFieldCredit));
            GPACalc.textFieldCredit = "";
        }
    };

    GPACalc.addAll = function(){
        GPACalc.addCredit();
        GPACalc.addLetter();
        GPACalc.addCourse();
    };

    GPACalc.removeData = function(index){
        GPACalc.data.splice(index, 1);
        GPACalc.letters.splice(index, 1);
        GPACalc.credits.splice(index, 1);
        GPACalc.courses.splice(index, 1);
        GPACalc.changeColor();
    };

    GPACalc.itemsInList = function(){
        return GPACalc.data.length;
    };
});