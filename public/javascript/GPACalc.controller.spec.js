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
            expect(scope.GPACalc.calculator(["A", "A"], [1, 1])).toBe("4.00");
            expect(scope.GPACalc.calculator(["A", "A", "A"], [1, 1, 1])).toBe("4.00");
            expect(scope.GPACalc.calculator(["B", "B", "B"], [1, 1, 1])).toBe("3.00");
            expect(scope.GPACalc.calculator(["C", "C", "C"], [1, 1, 1])).toBe("2.00");
            expect(scope.GPACalc.calculator(["D", "D", "D"], [1, 1, 1])).toBe("1.00");
            expect(scope.GPACalc.calculator(["F", "F", "F"], [1, 1, 1])).toBe("0.00");
            //testing a few random ones
            expect(scope.GPACalc.calculator(["A", "B", "C"], [2, 1, 5])).toBe("2.63");
            expect(scope.GPACalc.calculator(["A", "B", "C", "B"], [2, 1, 5, 2])).toBe("2.70");
            expect(scope.GPACalc.calculator(["C", "B", "F"], [5, 2, 3])).toBe("1.60");
            expect(scope.GPACalc.calculator(["C", "B"], [5, 2])).toBe("2.29");
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

        it('testing items in List', function () {
            scope.GPACalc.data.push(["Csci4454", 4, "A"], ["math", 2, "B"]);
            expect(scope.GPACalc.itemsInList()).toEqual(2);
        });

    });

});