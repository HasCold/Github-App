import gql from "graphql-tag";

const authTypeDef = gql`  # Tagged Template Literals

type Query{
    isAuth: Boolean
}

`

export default authTypeDef;