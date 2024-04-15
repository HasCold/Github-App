import authTypeDef from "./auth.typeDef";
import { mergeTypeDefs } from "@graphql-tools/merge";

const mergedTypeDefs = mergeTypeDefs([authTypeDef]);

export default mergedTypeDefs;