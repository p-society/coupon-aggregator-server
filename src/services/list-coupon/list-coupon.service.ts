// Initializes the `list-coupon` service on path `/list-coupon`
import { ServiceAddons } from "@feathersjs/feathers";
import { Application } from "../../declarations";
import { ListCoupon } from "./list-coupon.class";
import createModel from "../../models/list-coupon.model";
import hooks from "./list-coupon.hooks";

// Add this service to the service type index
declare module "../../declarations" {
  interface ServiceTypes {
    "list-coupon": ListCoupon & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
    whitelist: ["$regex", "$options", "$populate"],
  };

  // Initialize our service with any options it requires
  app.use("/list-coupon", new ListCoupon(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("list-coupon");

  service.hooks(hooks);
}
