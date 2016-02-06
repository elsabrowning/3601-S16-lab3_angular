'use strict';
//=== Testing mainCtrl =============================================
describe('Testing controller: GPAController', function(){

    beforeEach(module('mainApp'));

    var GPAController, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        GPAController = $controller('GPAController as GPACalc', {
            $scope: scope
        });
    }));


    describe("testing data functionality: ", function() {
        it('testing calculator', function () {
            expect(scope.GPACalc.calculator(["A", "A"], [1, 1])).toEqual(4);
            expect(scope.GPACalc.calculator(["A", "A", "A"], [1, 1, 1])).toEqual(4);
            expect(scope.GPACalc.calculator(["B", "B", "B"], [1, 1, 1])).toEqual(3);
            expect(scope.GPACalc.calculator(["C", "C", "C"], [1, 1, 1])).toEqual(2);
            expect(scope.GPACalc.calculator(["D", "D", "D"], [1, 1, 1])).toEqual(1);
            expect(scope.GPACalc.calculator(["F", "F", "F"], [1, 1, 1])).toEqual(0);
        });

        it('testing letter converter', function () {
            expect(scope.GPACalc.letterConverter('A')).toEqual(4.0);
            expect(scope.GPACalc.letterConverter('B')).toEqual(3.0);
            expect(scope.GPACalc.letterConverter('C')).toEqual(2.0);
            expect(scope.GPACalc.letterConverter('D')).toEqual(1.0);
            expect(scope.GPACalc.letterConverter('F')).toEqual(0.0);
        });

        it('testing initial arrays', function () {
            expect(scope.GPACalc.letters.length).toEqual(0);
            expect(scope.GPACalc.credits.length).toEqual(0);
            expect(scope.GPACalc.courses.length).toEqual(0);
        });
    });

});