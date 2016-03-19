angular.module('myApp', [])
.directive('optIn', function() {
    return {
    	restrict: 'E',
        templateUrl: 'opt-in.html',
        transclude: true
    };
});