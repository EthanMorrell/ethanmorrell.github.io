import { getRelativeLocaleUrl } from "astro:i18n";
import type { CollectionEntry } from "astro:content";
import { getSortedPosts } from "./getSortedPosts";
import config from "@/config";

export type SeriesSection = NonNullable<
  CollectionEntry<"series">["data"]["section"]
>;

export function getSeriesUrl(
  id: string,
  locale: string | undefined = config.site.lang
): string {
  return getRelativeLocaleUrl(locale, `series/${id}`);
}

export function getSeriesPosts(
  posts: CollectionEntry<"posts">[],
  seriesId: string
): CollectionEntry<"posts">[] {
  return getSortedPosts(
    posts.filter(({ data }) => data.series === seriesId)
  ).sort((a, b) => {
    const orderDifference =
      (a.data.seriesOrder ?? Number.MAX_SAFE_INTEGER) -
      (b.data.seriesOrder ?? Number.MAX_SAFE_INTEGER);

    if (orderDifference !== 0) return orderDifference;

    return a.data.pubDatetime.getTime() - b.data.pubDatetime.getTime();
  });
}
