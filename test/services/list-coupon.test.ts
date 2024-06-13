import assert from 'assert';
import app from '../../src/app';

describe('\'list-coupon\' service', () => {
  it('registered the service', () => {
    const service = app.service('list-coupon');

    assert.ok(service, 'Registered the service');
  });
});
