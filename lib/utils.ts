export function getAge() {
  return getCurrentYear() - 1982;
}

export function getCurrentYear() {
  return new Date().getFullYear();
}

export const SUBSCRIBE_URL =
  "https://dev.us2.list-manage.com/subscribe/post?u=a7ac7926ed477a5e810ed46f7&amp;id=51b196576b";

// export const RSS_FEED_URL = "rss/feed.xml";
export const ATOM_FEED_URL = "rss/atom.xml";
