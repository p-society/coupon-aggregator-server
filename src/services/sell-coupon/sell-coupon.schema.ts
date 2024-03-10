// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
import { ObjectIdSchema } from '@feathersjs/schema'
import type { FromSchema } from '@feathersjs/schema'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { SellCouponService } from './sell-coupon.class'

// Main data model schema
export const sellCouponSchema = {
  $id: 'SellCoupon',
  type: 'object',
  additionalProperties: false,
  required: ['_id', 'text'],
  properties: {
    _id: ObjectIdSchema(),

    text: { type: 'string' }
  }
} as const
export type SellCoupon = FromSchema<typeof sellCouponSchema>
export const sellCouponValidator = getValidator(sellCouponSchema, dataValidator)
export const sellCouponResolver = resolve<SellCoupon, HookContext<SellCouponService>>({})

export const sellCouponExternalResolver = resolve<SellCoupon, HookContext<SellCouponService>>({})

// Schema for creating new data
export const sellCouponDataSchema = {
  $id: 'SellCouponData',
  type: 'object',
  additionalProperties: false,
  required: ['text'],
  properties: {
    ...sellCouponSchema.properties
  }
} as const
export type SellCouponData = FromSchema<typeof sellCouponDataSchema>
export const sellCouponDataValidator = getValidator(sellCouponDataSchema, dataValidator)
export const sellCouponDataResolver = resolve<SellCouponData, HookContext<SellCouponService>>({})

// Schema for updating existing data
export const sellCouponPatchSchema = {
  $id: 'SellCouponPatch',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...sellCouponSchema.properties
  }
} as const
export type SellCouponPatch = FromSchema<typeof sellCouponPatchSchema>
export const sellCouponPatchValidator = getValidator(sellCouponPatchSchema, dataValidator)
export const sellCouponPatchResolver = resolve<SellCouponPatch, HookContext<SellCouponService>>({})

// Schema for allowed query properties
export const sellCouponQuerySchema = {
  $id: 'SellCouponQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(sellCouponSchema.properties)
  }
} as const
export type SellCouponQuery = FromSchema<typeof sellCouponQuerySchema>
export const sellCouponQueryValidator = getValidator(sellCouponQuerySchema, queryValidator)
export const sellCouponQueryResolver = resolve<SellCouponQuery, HookContext<SellCouponService>>({})
