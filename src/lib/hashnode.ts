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

export async function getPosts(after?: string) {
  const query = `
    query Publication($host: String!, $after: String) {
      publication(host: $host) {
        posts(first: 10, after: $after) {
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

  const response = await fetch("https://gql.hashnode.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: {
        host: import.meta.env.HASHNODE_HOST || "davidvictoria.hashnode.dev",
        after,
      },
    }),
  });

  const { data } = await response.json();
  return {
    posts: data.publication.posts.edges.map((edge: any) => edge.node),
    pageInfo: data.publication.posts.pageInfo,
  };
}
