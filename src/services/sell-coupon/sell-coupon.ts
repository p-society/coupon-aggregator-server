// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  sellCouponDataValidator,
  sellCouponPatchValidator,
  sellCouponQueryValidator,
  sellCouponResolver,
  sellCouponExternalResolver,
  sellCouponDataResolver,
  sellCouponPatchResolver,
  sellCouponQueryResolver
} from './sell-coupon.schema'

import type { Application } from '../../declarations'
import { SellCouponService, getOptions } from './sell-coupon.class'
import { sellCouponPath, sellCouponMethods } from './sell-coupon.shared'

export * from './sell-coupon.class'
export * from './sell-coupon.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const sellCoupon = (app: Application) => {
  // Register our service on the Feathers application
  app.use(sellCouponPath, new SellCouponService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: sellCouponMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(sellCouponPath).hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(sellCouponExternalResolver),
        schemaHooks.resolveResult(sellCouponResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(sellCouponQueryValidator),
        schemaHooks.resolveQuery(sellCouponQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(sellCouponDataValidator),
        schemaHooks.resolveData(sellCouponDataResolver)
      ],
      patch: [
        schemaHooks.validateData(sellCouponPatchValidator),
        schemaHooks.resolveData(sellCouponPatchResolver)
      ],
      remove: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    [sellCouponPath]: SellCouponService
  }
}
