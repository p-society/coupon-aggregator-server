// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type {
  BuyCoupon,
  BuyCouponData,
  BuyCouponPatch,
  BuyCouponQuery,
  BuyCouponService
} from './buy-coupon.class'

export type { BuyCoupon, BuyCouponData, BuyCouponPatch, BuyCouponQuery }

export type BuyCouponClientService = Pick<
  BuyCouponService<Params<BuyCouponQuery>>,
  (typeof buyCouponMethods)[number]
>

export const buyCouponPath = 'buy-coupon'

export const buyCouponMethods = ['find', 'get', 'create', 'patch', 'remove'] as const

export const buyCouponClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(buyCouponPath, connection.service(buyCouponPath), {
    methods: buyCouponMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [buyCouponPath]: BuyCouponClientService
  }
}
