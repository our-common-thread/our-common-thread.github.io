import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { getSortedPosts } from '@utils/getSortedPosts';
import { SITE } from '@config';

export async function GET() {
  const posts = await getCollection('posts');
  const portfolio = await getCollection('portfolio');
  const sortedPosts = getSortedPosts(posts);
  const sortedPortfolio = getSortedPosts(portfolio);
  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: SITE.website,
    items: sortedPosts
      .map(({ data, slug }) => ({
        link: `posts/${slug}/`,
        title: data.title,
        description: data.description,
        pubDate: new Date(data.modDatetime ?? data.pubDatetime),
      }))
      .concat(
        sortedPortfolio.map(({ data, slug }) => ({
          link: `portfolio/${slug}/`,
          title: data.title,
          description: data.description,
          pubDate: new Date(data.modDatetime ?? data.pubDatetime),
        }))
      ),
  });
}
