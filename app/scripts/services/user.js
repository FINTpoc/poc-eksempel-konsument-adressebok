'use strict';

angular.module('eksempelKonsumentAdressebokApp')
  .factory('User', function($resource) {
    return $resource('/user');
  });
