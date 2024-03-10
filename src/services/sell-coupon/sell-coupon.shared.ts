// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type {
  SellCoupon,
  SellCouponData,
  SellCouponPatch,
  SellCouponQuery,
  SellCouponService
} from './sell-coupon.class'

export type { SellCoupon, SellCouponData, SellCouponPatch, SellCouponQuery }

export type SellCouponClientService = Pick<
  SellCouponService<Params<SellCouponQuery>>,
  (typeof sellCouponMethods)[number]
>

export const sellCouponPath = 'sell-coupon'

export const sellCouponMethods = ['find', 'get', 'create', 'patch', 'remove'] as const

export const sellCouponClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(sellCouponPath, connection.service(sellCouponPath), {
    methods: sellCouponMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [sellCouponPath]: SellCouponClientService
  }
}
