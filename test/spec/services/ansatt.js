'use strict';

describe('Service: Ansatt', function () {

  // load the service's module
  beforeEach(module('eksempelKonsumentAdressebokApp'));

  // instantiate service
  var Ansatt;
  beforeEach(inject(function (_Ansatt_) {
    Ansatt = _Ansatt_;
  }));

  it('should do something', function () {
    expect(!!Ansatt).toBe(true);
  });

});
