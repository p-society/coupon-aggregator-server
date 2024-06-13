// list-coupon-model.ts - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
import { CouponStatusList } from "../constants/couponStatus.enum";
import { CouponTypeList } from "../constants/couponType.enum";
import { Application } from "../declarations";
import { Model, Mongoose } from "mongoose";

export default function (app: Application): Model<any> {
  const modelName = "listCoupon";
  const mongooseClient: Mongoose = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      couponType: {
        type: String,
        required: true,
        enum: CouponTypeList,
      },
      couponDate: {
        type: Date,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      createdBy: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true,
      },
      couponFloor: {
        type: Number,
        required: true,
        enum: [1, 2],
      },
      isVeg: {
        type: Boolean,
        required: true,
        index: true,
      },
      status: {
        type: String,
        required: true,
        enum: CouponStatusList,
        default: "active",
        index: true,
      },
      deleted: {
        type: Boolean,
        default: false,
      },
    },
    {
      timestamps: true,
    }
  );

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    (mongooseClient as any).deleteModel(modelName);
  }
  return mongooseClient.model<any>(modelName, schema);
}
