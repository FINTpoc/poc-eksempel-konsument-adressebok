'use strict';

/**
 * @ngdoc function
 * @name eksempelKonsumentAdressebokApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the eksempelKonsumentAdressebokApp
 */
angular.module('eksempelKonsumentAdressebokApp')
  .controller('MainCtrl', function($scope, Ansatt, User) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.user = User.get();
    $scope.reset = function() {
        $scope.user = {};
        $scope.searchFor = "";
        $scope.selectedEmployee = "";
        $scope.employees = [];
    };

    $scope.isMale = function(e) {
      var ret = false;
      if (e) {
        if (e.kjonn === 'MANN') {
          ret = true;
        }
      }
      return ret;
    };

    $scope.search = function() {
      var searchString = $scope.searchFor;
      if (searchString.length > 2) {
        var result = Ansatt.get({name: searchString}, function() {
          $scope.employees = result.results;
        })
      }
    };

  });
