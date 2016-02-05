'use strict';
//=== Testing mainCtrl =============================================
describe('Testing controller: GPAController', function(){

    it('testing calculator', function(){
        expect(GPACalc.calculator(["A", "A"], [1, 1])).toEqual(4);
        expect(GPACalc.calculator(["A", "A", "A"], [1, 1, 1])).toEqual(4);
        expect(GPACalc.calculator(["B", "B", "B"], [1, 1, 1])).toEqual(3);
        expect(GPACalc.calculator(["C", "C", "C"], [1, 1, 1])).toEqual(2);
        expect(GPACalc.calculator(["D", "D", "D"], [1, 1, 1])).toEqual(1);
        expect(GPACalc.calculator(["F", "F", "F"], [1, 1, 1])).toEqual(0);
    });

    it('testing letter converter', function(){
        expect(GPACalc.letterConverter(A)).toEqual(4.0);
        expect(GPACalc.letterConverter(B)).toEqual(3.0);
        expect(GPACalc.letterConverter(C)).toEqual(2.0);
        expect(GPACalc.letterConverter(D)).toEqual(1.0);
        expect(GPACalc.letterConverter(F)).toEqual(0.0);
    });

});