export interface Post {
  title: string;
  brief: string;
  slug: string;
  coverImage: {
    url: string;
  };
  publishedAt: string;
  readTimeInMinutes: number;
  author: {
    name: string;
    profilePicture: string;
  };
  content: {
    html: string;
  };
  tags: {
    name: string;
    slug: string;
  }[];
}

export interface PageInfo {
  hasNextPage: boolean;
  endCursor: string;
}

export async function getPosts(after?: string, tag?: string) {
  const query = `
    query Publication($host: String!, $after: String, $tagSlugs: [String!]) {
      publication(host: $host) {
        posts(first: 10, after: $after, filter: { tagSlugs: $tagSlugs }) {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              title
              brief
              slug
              coverImage {
                url
              }
              publishedAt
              readTimeInMinutes
              author {
                name
                profilePicture
              }
              content {
                html
              }
              tags {
                name
                slug
              }
            }
          }
        }
      }
    }
  `;

  const variables: any = {
    host: import.meta.env.HASHNODE_HOST || "davidvictoria.hashnode.dev",
    after,
  };

  if (tag) {
    variables.tagSlugs = [tag];
  }

  const response = await fetch("https://gql.hashnode.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const { data } = await response.json();
  return {
    posts: data.publication.posts.edges.map((edge: any) => edge.node),
    pageInfo: data.publication.posts.pageInfo,
  };
}
