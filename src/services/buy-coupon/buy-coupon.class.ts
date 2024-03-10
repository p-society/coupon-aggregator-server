// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { MongoDBService } from '@feathersjs/mongodb'
import type { MongoDBAdapterParams, MongoDBAdapterOptions } from '@feathersjs/mongodb'

import type { Application } from '../../declarations'
import type { BuyCoupon, BuyCouponData, BuyCouponPatch, BuyCouponQuery } from './buy-coupon.schema'

export type { BuyCoupon, BuyCouponData, BuyCouponPatch, BuyCouponQuery }

export interface BuyCouponParams extends MongoDBAdapterParams<BuyCouponQuery> {}

// By default calls the standard MongoDB adapter service methods but can be customized with your own functionality.
export class BuyCouponService<ServiceParams extends Params = BuyCouponParams> extends MongoDBService<
  BuyCoupon,
  BuyCouponData,
  BuyCouponParams,
  BuyCouponPatch
> {}

export const getOptions = (app: Application): MongoDBAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('mongodbClient').then((db) => db.collection('buy-coupon'))
  }
}
