import { gql, type TypedDocumentNode } from "@apollo/client";

export const GET_CATEGOR_TREE: TypedDocumentNode = gql`
  query getCategoryTree($filters: CategoryFilterInput) {
    categoryList(filters: $filters) {
      uid
      children {
        uid
        name
        url_path
        include_in_menu
      }
    }
  }
`;
