'use strict';

/**
 * @ngdoc function
 * @name eksempelKonsumentAdressebokApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the eksempelKonsumentAdressebokApp
 */
angular.module('eksempelKonsumentAdressebokApp')
  .controller('MainCtrl', function($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.reset = function() {
        $scope.searchFor = "";
        $scope.selectedEmployee = "";
    };

    $scope.isMale = function(e) {
      var ret = false;
      if (e) {
        if (e.kjonn === 'mann') {
          ret = true;
        }
      }

      return ret;
    };
    $scope.employees = [{
      'fornavn': 'Frode',
      'etternavn': 'Sjovatsen',
      'mobil': '90882080',
      'epost': 'frode.sjovatsen@rogfk.no',
      'kjonn': 'mann'
    }, {
      'fornavn': 'Hege',
      'etternavn': 'Stubhaug',
      'mobil': '92820321',
      'epost': 'hege.stubhaug@hfk.no',
      'kjonn': 'kvinne'
    }, {
      'fornavn': 'Ole Anders',
      'etternavn': 'Eidjord',
      'mobil': '',
      'epost': 'ole.anders.eidjord@vaf.no',
      'kjonn': 'mann'
    }, {
      'fornavn': 'Jarle',
      'etternavn': 'Hansen',
      'mobil': '90909090',
      'epost': 'jarle@jarlehansen.net',
      'kjonn': 'mann'
    }];
    console.log($scope.employees);


  });
