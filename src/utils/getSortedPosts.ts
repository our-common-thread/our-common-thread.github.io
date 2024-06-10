import type { CollectionEntry } from 'astro:content';
import postFilter from './postFilter';

/// sort by the latest blogs to be published / updated
export function getSortedPosts(
  posts: CollectionEntry<'posts' | 'portfolio'>[]
) {
  return posts
    .filter(postFilter)
    .sort(
      (a, b) =>
        Math.floor(new Date(get_time(b)).getTime() / 1000) -
        Math.floor(new Date(get_time(a)).getTime() / 1000)
    );
}

function get_time(entry: CollectionEntry<'posts' | 'portfolio'>) {
  return entry.collection === 'posts'
    ? entry.data.modDatetime ?? entry.data.pubDatetime
    : entry.data.pubDatetime;
}

export default getSortedPosts;
