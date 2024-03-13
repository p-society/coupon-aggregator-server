// Initializes the `buy-coupon` service on path `/buy-coupon`
import { ServiceAddons } from "@feathersjs/feathers";
import { Application } from "../../declarations";
import { BuyCoupon } from "./buy-coupon.class";
import createModel from "../../models/buy-coupon.model";
import hooks from "./buy-coupon.hooks";

// Add this service to the service type index
declare module "../../declarations" {
  interface ServiceTypes {
    "buy-coupon": BuyCoupon & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate")
  };

  // Initialize our service with any options it requires
  app.use("/buy-coupon", new BuyCoupon(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("buy-coupon");

  service.hooks(hooks);
}
