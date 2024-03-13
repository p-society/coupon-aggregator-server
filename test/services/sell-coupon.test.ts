import assert from "assert";
import app from "../../src/app";

describe("'sell-coupon' service", () => {
  it("registered the service", () => {
    const service = app.service("sell-coupon");

    assert.ok(service, "Registered the service");
  });
});
