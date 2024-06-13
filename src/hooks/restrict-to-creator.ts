// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { BadRequest, NotAuthenticated } from "@feathersjs/errors";
import { Hook, HookContext } from "@feathersjs/feathers";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (options = {}): Hook => {
  return async (context: HookContext): Promise<HookContext> => {
    try {
      const { user } = context.params;
      if (!user) {
        throw new NotAuthenticated();
      }
      const id = context.id;
      if (!id) {
        throw new BadRequest();
      }
      const listing = await context.app.service("list-coupon")._get(id);

      if (listing.createdBy.toString() !== user._id.toString()) {
        throw new BadRequest(
          "You are a piece of shit. Modify your own coupon."
        );
      }
      return context;
    } catch (error) {
      throw new Error();
    }
  };
};
