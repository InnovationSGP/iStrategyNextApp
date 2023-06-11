import { gql, useQuery } from "@apollo/client";

const GET_POSTS = gql`
  query AllPostsQuery {
    posts {
      nodes {
        author {
          node {
            firstName
          }
        }
        categories {
          nodes {
            name
          }
        }
        content
        databaseId
        date
        uri
        featuredImage {
          node {
            link
          }
        }
        title
        status
      }
    }
  }
`;

export function useWordpressPosts() {
  const { data, loading } = useQuery(GET_POSTS);

  return {
    posts: data?.posts?.nodes,
    loading,
  };
}
