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
        excerpt
      }
    }
  }
`;

const GET_SINGLE_POST = gql`
  query PostById($id: ID!) {
    post(id: $id, idType: DATABASE_ID) {
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
      title
      uri
      featuredImage {
        node {
          link
        }
      }
      excerpt
    }
  }
`;

export function useSinglePost(id: any) {
  const { data, loading } = useQuery(GET_SINGLE_POST, {
    variables: { id },
  });
  return {
    data: data?.post,
    loading,
  };
}

export function useWordpressPosts() {
  const { data, loading } = useQuery(GET_POSTS);

  return {
    posts: data?.posts?.nodes,
    loading,
  };
}
