// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { MongoDBService } from '@feathersjs/mongodb'
import type { MongoDBAdapterParams, MongoDBAdapterOptions } from '@feathersjs/mongodb'

import type { Application } from '../../declarations'
import type { SellCoupon, SellCouponData, SellCouponPatch, SellCouponQuery } from './sell-coupon.schema'

export type { SellCoupon, SellCouponData, SellCouponPatch, SellCouponQuery }

export interface SellCouponParams extends MongoDBAdapterParams<SellCouponQuery> {}

// By default calls the standard MongoDB adapter service methods but can be customized with your own functionality.
export class SellCouponService<ServiceParams extends Params = SellCouponParams> extends MongoDBService<
  SellCoupon,
  SellCouponData,
  SellCouponParams,
  SellCouponPatch
> {}

export const getOptions = (app: Application): MongoDBAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('mongodbClient').then((db) => db.collection('sell-coupon'))
  }
}
