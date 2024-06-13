// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { Hook, HookContext } from "@feathersjs/feathers";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (fieldName = "createdBy", override = true): Hook =>
  (context) => {
    const { user } = context.params;
    if (typeof user === "undefined") return context;
    if (typeof context.params.provider === "undefined") return context;
    if (!override && typeof context.data[fieldName] !== "undefined")
      return context;
    if (Array.isArray(context.data))
      context.data.map((each) => {
        each[fieldName] = user?._id;
      });
    else context.data[fieldName] = user?._id;
    return context;
  };
