import authResolver from "./auth.resolvers";
import { mergeResolvers } from "@graphql-tools/merge";

const mergedResolvers = mergeResolvers([authResolver]);

export default mergedResolvers;