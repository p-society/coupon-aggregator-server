import assert from "assert";
import app from "../../src/app";

describe("'buy-coupon' service", () => {
  it("registered the service", () => {
    const service = app.service("buy-coupon");

    assert.ok(service, "Registered the service");
  });
});
