    import { FeatureList, Feature } from "./features.enum";

    const permissions: Record<any, any> = {}

    FeatureList.map(each => {
        permissions[each] = {
            create: {
                type: Boolean,
            },
            read: {
                type: Boolean,
            },
            update: {
                type: Boolean,
            },
            delete: {
                type: Boolean,
            },
        }
    })

    permissions[Feature.USER]

/**
 * {
 *  1 : {
 *  create: {
 * type Boolean
 * }
 * read: {
 * type Boolean
 * }
 * update: {
 * type Boolean
 * }
* delete: {
 * type Boolean
 * }
 * }
 * }
 */

export default permissions