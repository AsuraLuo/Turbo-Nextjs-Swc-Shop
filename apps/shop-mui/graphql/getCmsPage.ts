import { gql, type TypedDocumentNode } from '@apollo/client'

export const GET_CMS_PAGE: TypedDocumentNode = gql`
  query getCmsPage($id: Int, $identifier: String) {
    cmsPage(id: $id, identifier: $identifier) {
      content
      identifier
      meta_description
      meta_keywords
      meta_title
      page_layout
      title
    }
  }
`
