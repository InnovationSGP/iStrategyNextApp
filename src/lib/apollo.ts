import {ApolloClient, InMemoryCache, ApolloProvider, gql} from '@apollo/client';

export const client = new ApolloClient(
    {
        uri: `${process.env.WORDPRESS_API_URL}/graphql`,
        cache: new InMemoryCache()
    }
)