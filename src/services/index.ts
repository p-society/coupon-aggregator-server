import { Application } from "../declarations";
import users from "./users/users.service";
import buyCoupon from "./buy-coupon/buy-coupon.service";
import sellCoupon from "./sell-coupon/sell-coupon.service";
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(users);
  app.configure(buyCoupon);
  app.configure(sellCoupon);
}
