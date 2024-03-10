// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
import { ObjectIdSchema } from '@feathersjs/schema'
import type { FromSchema } from '@feathersjs/schema'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { BuyCouponService } from './buy-coupon.class'

// Main data model schema
export const buyCouponSchema = {
  $id: 'BuyCoupon',
  type: 'object',
  additionalProperties: false,
  required: ['_id', 'text'],
  properties: {
    _id: ObjectIdSchema(),

    text: { type: 'string' }
  }
} as const
export type BuyCoupon = FromSchema<typeof buyCouponSchema>
export const buyCouponValidator = getValidator(buyCouponSchema, dataValidator)
export const buyCouponResolver = resolve<BuyCoupon, HookContext<BuyCouponService>>({})

export const buyCouponExternalResolver = resolve<BuyCoupon, HookContext<BuyCouponService>>({})

// Schema for creating new data
export const buyCouponDataSchema = {
  $id: 'BuyCouponData',
  type: 'object',
  additionalProperties: false,
  required: ['text'],
  properties: {
    ...buyCouponSchema.properties
  }
} as const
export type BuyCouponData = FromSchema<typeof buyCouponDataSchema>
export const buyCouponDataValidator = getValidator(buyCouponDataSchema, dataValidator)
export const buyCouponDataResolver = resolve<BuyCouponData, HookContext<BuyCouponService>>({})

// Schema for updating existing data
export const buyCouponPatchSchema = {
  $id: 'BuyCouponPatch',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...buyCouponSchema.properties
  }
} as const
export type BuyCouponPatch = FromSchema<typeof buyCouponPatchSchema>
export const buyCouponPatchValidator = getValidator(buyCouponPatchSchema, dataValidator)
export const buyCouponPatchResolver = resolve<BuyCouponPatch, HookContext<BuyCouponService>>({})

// Schema for allowed query properties
export const buyCouponQuerySchema = {
  $id: 'BuyCouponQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(buyCouponSchema.properties)
  }
} as const
export type BuyCouponQuery = FromSchema<typeof buyCouponQuerySchema>
export const buyCouponQueryValidator = getValidator(buyCouponQuerySchema, queryValidator)
export const buyCouponQueryResolver = resolve<BuyCouponQuery, HookContext<BuyCouponService>>({})
