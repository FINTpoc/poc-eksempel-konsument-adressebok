'use strict';

/**
 * @ngdoc service
 * @name eksempelKonsumentAdressebokApp.Ansatt
 * @description
 * # Ansatt
 * Factory in the eksempelKonsumentAdressebokApp.
 */
angular.module('eksempelKonsumentAdressebokApp')
  .factory('Ansatt', function ($resource) {
      return $resource('http://localhost:8080/ansatte');
  });
