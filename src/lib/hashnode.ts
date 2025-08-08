import { GraphQLClient } from 'graphql-request';
import type { 
  HashnodeQueryResponse, 
  HashnodePostResponse, 
  BlogPost, 
  BlogPostsResponse 
} from '../types/hashnode';

// Hashnode GraphQL API endpoint
const HASHNODE_API_URL = 'https://gql.hashnode.com/';

// Create GraphQL client
const client = new GraphQLClient(HASHNODE_API_URL, {
  headers: {
    'Content-Type': 'application/json',
  },
});

// GraphQL Queries
const GET_POSTS_QUERY = `
  query GetPosts($host: String!, $first: Int!) {
    publication(host: $host) {
      id
      title
      displayTitle
      posts(first: $first) {
        edges {
          node {
            id
            title
            brief
            slug
            publishedAt
            readTimeInMinutes
            coverImage {
              url
            }
            content {
              html
            }
            tags {
              id
              name
              slug
            }
            seo {
              title
              description
            }
            subtitle
            ogMetaData {
              image
            }
            canonicalUrl
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`;

const GET_POST_BY_SLUG_QUERY = `
  query GetPostBySlug($host: String!, $slug: String!) {
    publication(host: $host) {
      post(slug: $slug) {
        id
        title
        brief
        slug
        publishedAt
        readTimeInMinutes
        coverImage {
          url
        }
        content {
          html
        }
        tags {
          id
          name
          slug
        }
        seo {
          title
          description
        }
        subtitle
        ogMetaData {
          image
        }
        canonicalUrl
      }
    }
  }
`;

// Helper functions to transform Hashnode data to our format
function transformHashnodePost(post: any): BlogPost {
  return {
    id: post.id,
    title: post.title,
    slug: post.slug,
    excerpt: post.brief || '',
    category: post.tags?.[0]?.name || 'General',
    date: post.publishedAt,
    readTime: post.readTimeInMinutes || 5,
    body: post.content.html,
    mainImage: post.coverImage?.url,
    // SEO fields from Hashnode
    seoTitle: post.seo?.title,
    seoDescription: post.seo?.description,
    subtitle: post.subtitle,
    canonicalUrl: post.canonicalUrl,
    ogImage: post.ogMetaData?.image || post.coverImage?.url,
  };
}

// API functions
export async function getAllPosts(host: string, limit: number = 10): Promise<BlogPostsResponse> {
  try {
    const variables = {
      host,
      first: limit,
    };

    const data: HashnodeQueryResponse = await client.request(GET_POSTS_QUERY, variables);
    
    if (!data.publication) {
      throw new Error(`Publication not found for host: ${host}`);
    }

    const posts = data.publication.posts.edges.map(edge => 
      transformHashnodePost(edge.node)
    );

    return {
      posts,
      hasNextPage: data.publication.posts.pageInfo.hasNextPage,
    };
  } catch (error) {
    console.error('Error fetching posts from Hashnode:', error);
    
    // Return empty array instead of throwing to prevent build failures
    return {
      posts: [],
      hasNextPage: false,
    };
  }
}

export async function getPostBySlug(host: string, slug: string): Promise<BlogPost | null> {
  try {
    const variables = {
      host,
      slug,
    };

    const data: HashnodePostResponse = await client.request(GET_POST_BY_SLUG_QUERY, variables);
    
    if (!data.publication?.post) {
      return null;
    }

    return transformHashnodePost(data.publication.post);
  } catch (error) {
    console.error('Error fetching post from Hashnode:', error);
    return null;
  }
}

// Lightweight query just for getting slugs (for getStaticPaths)
const GET_POST_SLUGS_QUERY = `
  query GetPostSlugs($host: String!, $first: Int!) {
    publication(host: $host) {
      posts(first: $first) {
        edges {
          node {
            slug
          }
        }
      }
    }
  }
`;

// API function for getting just slugs
export async function getPostSlugs(host: string, limit: number = 50): Promise<string[]> {
  try {
    const variables = {
      host,
      first: limit,
    };

    const data: any = await client.request(GET_POST_SLUGS_QUERY, variables);
    
    if (!data.publication) {
      console.error('Publication not found for host:', host);
      return [];
    }

    return data.publication.posts.edges.map((edge: any) => edge.node.slug);
  } catch (error) {
    console.error('Error fetching post slugs from Hashnode:', error);
    return [];
  }
}

// Configuration
export const HASHNODE_CONFIG = {
  // Replace with your Hashnode publication host
  host: import.meta.env.HASHNODE_PUBLICATION_HOST || 'your-blog.hashnode.dev',
  postsPerPage: 10,
};