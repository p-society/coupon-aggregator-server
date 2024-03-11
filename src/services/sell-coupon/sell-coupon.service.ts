// Initializes the `sell-coupon` service on path `/sell-coupon`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { SellCoupon } from './sell-coupon.class';
import createModel from '../../models/sell-coupon.model';
import hooks from './sell-coupon.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'sell-coupon': SellCoupon & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/sell-coupon', new SellCoupon(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('sell-coupon');

  service.hooks(hooks);
}
