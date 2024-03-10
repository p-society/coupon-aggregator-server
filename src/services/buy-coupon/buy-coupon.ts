// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  buyCouponDataValidator,
  buyCouponPatchValidator,
  buyCouponQueryValidator,
  buyCouponResolver,
  buyCouponExternalResolver,
  buyCouponDataResolver,
  buyCouponPatchResolver,
  buyCouponQueryResolver
} from './buy-coupon.schema'

import type { Application } from '../../declarations'
import { BuyCouponService, getOptions } from './buy-coupon.class'
import { buyCouponPath, buyCouponMethods } from './buy-coupon.shared'

export * from './buy-coupon.class'
export * from './buy-coupon.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const buyCoupon = (app: Application) => {
  // Register our service on the Feathers application
  app.use(buyCouponPath, new BuyCouponService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: buyCouponMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(buyCouponPath).hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(buyCouponExternalResolver),
        schemaHooks.resolveResult(buyCouponResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(buyCouponQueryValidator),
        schemaHooks.resolveQuery(buyCouponQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(buyCouponDataValidator),
        schemaHooks.resolveData(buyCouponDataResolver)
      ],
      patch: [
        schemaHooks.validateData(buyCouponPatchValidator),
        schemaHooks.resolveData(buyCouponPatchResolver)
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
    [buyCouponPath]: BuyCouponService
  }
}
