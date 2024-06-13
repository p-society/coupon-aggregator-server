import { HooksObject } from "@feathersjs/feathers";
import * as authentication from "@feathersjs/authentication";
import restrictToCreator from "../../hooks/restrict-to-creator";
import setCreatedBy from "../../hooks/set-created-by";
// Don't remove this comment. It's needed to format import lines nicely.

const { authenticate } = authentication.hooks;

export default {
  before: {
    all: [authenticate("jwt")],
    find: [],
    get: [],
    create: [setCreatedBy()],
    update: [],
    patch: [restrictToCreator()],
    remove: [restrictToCreator()],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
