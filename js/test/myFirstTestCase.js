describe("ControllerTest", function () {

    beforeEach(module("testApp"))

    var scope;

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        $controller("testCtrl", {$scope:scope})
    }))

    it('Counter is defined', function () {
        expect(scope.counter).toBeDefined();
    })

    it('Var zero', function () {
        expect(scope.counter).toEqual(0)
    })

})
