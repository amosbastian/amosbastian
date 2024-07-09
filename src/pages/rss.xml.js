import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      author: post.data.authors.join(", "),
      pubDate: post.data.datePublished,
      title: post.data.title,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
  });
}
