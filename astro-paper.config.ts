import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://libthon.com/",
    title: "LibThon",
    description: "Musings of a cybersecurity student.",
    author: "Ethan Morrell",
    profile: "https://libthon.com/about",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Pacific/Honolulu",
    dir: "ltr",
  },
  posts: {
    perPage: 1000,
    perIndex: 1000,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    { name: "linkedin", url: "https://www.linkedin.com/in/ethan-morrell/" },
  ],
  shareLinks: [
  ],
});