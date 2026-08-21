import type { UIStrings } from "../types";

export default {
  nav: {
    home: "Home",
    posts: "Posts",
    projects: "Projects",
    club: "GreyHats",
    series: "Series",
    tags: "Tags",
    about: "About",
    archives: "Archives",
    search: "Search",
  },
  post: {
    publishedAt: "Published at",
    updatedAt: "Updated",
    sharePostIntro: "Share this post:",
    sharePostOn: "Share this post on {{platform}}",
    sharePostViaEmail: "Share this post via email",
    tagLabel: "Tags",
    backToTop: "Back to top",
    goBack: "Go back",
    editPage: "Edit page",
    previousPost: "Previous Post",
    nextPost: "Next Post",
  },
  pagination: {
    prev: "Prev",
    next: "Next",
    page: "Page",
  },
  home: {
    socialLinks: "Social Links",
    featured: "Featured",
    recentPosts: "Recent Posts",
    allPosts: "All Posts",
  },
  footer: {
    copyright: "Copyright",
    allRightsReserved: "All rights reserved.",
  },
  pages: {
    tagTitle: "Tag",
    tagDesc: "All the articles with the tag",

    tagsTitle: "Tags",
    tagsDesc: "All the tags used in posts.",

    postsTitle: "Posts",
    postsDesc: "All the articles I've posted.",

    projectsTitle: "Projects",
    projectsDesc: "Projects, experiments, and ongoing work.",

    clubTitle: "GreyHats",
    clubDesc: "Posts and resources from the cybersecurity club.",

    seriesTitle: "Series",
    seriesDesc: "Ongoing and multi-part work, ordered by recent activity.",
    seriesListTitle: "Series",
    projectSeriesTitle: "Project series",
    clubSeriesTitle: "Club series",
    otherSeriesTitle: "Other series",
    standaloneProjectsTitle: "Standalone projects",
    standaloneClubTitle: "Standalone club posts",
    seriesPostsTitle: "Posts in this series",
    noProjects: "No projects have been published yet.",
    noClubPosts: "No club posts have been published yet.",
    noSeries: "No series have been published yet.",
    noSeriesPosts: "No posts have been published in this series yet.",

    archivesTitle: "Archives",
    archivesDesc: "All the articles I've archived.",

    searchTitle: "Search",
    searchDesc: "Search any article ...",
  },
  a11y: {
    skipToContent: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    toggleTheme: "Toggle theme",
    searchPlaceholder: "Search posts...",
    noResults: "No results found",
    goToPreviousPage: "Go to previous page",
    goToNextPage: "Go to next page",
  },
  notFound: {
    title: "404 Not Found",
    message: "Page Not Found",
    goHome: "Go back home",
  },
} satisfies UIStrings;
