---
title: The Making of LibThon
description: Ethan Morrell's InfoSec Blog
pubDatetime: 2026-09-02
section: projects
# series: libthon # Optional: match a filename in src/content/series
# seriesOrder: 1
---

# Motivation and Background

I have been wanting to start an InfoSec blog for some time now. I regularly work on fun projects, cybersecurity certifications, Grey Hats lectures, or CTF challenges, but I have never gotten around to publishing writeups of them. The thought of creating (and maintaining) a blog seemed like too much overhead for my liking, and I would much rather spend my time on the next {project, cert, lecture, challenge}. On the other hand, forcing myself to develop my personal shorthand notes into detailed writeups could not only be helpful to potential readers, but it would also test and refine my own understanding of the subject matter. Because of this, in the time between my recent summer internship and the start of my Master's program, I decided to at least get things started before I got too busy or lost motivation.

Every student of ICS 314 (Software Engineering) builds their own digital portfolio site, but it had been over two years since I last updated the repository. The old site was ok, but I wanted this new site to be more than just a digital resume for two reasons:

1. That's what LinkedIn is for
2. Writing to try and market myself is much less fun than writing about my passions

Rather than working from the old template, I decided to take this opportunity to rebuild the site from "scratch". I still used a template, albeit with extensive modifications to the theme and the underlying structure. Now that the site has been built, I decided to make my first post about how I did it, and how you could do similar.

# Website Design

Going into this project, I had a few main "wants" for the site:

- I wanted to have complete control over the site's design
- I wanted the site to be relatively easy to build, edit, and maintain
- I wanted the site to be free or as close to free as possible

There were also some key features I had in mind:

- Writing posts in Markdown format (`.md`) would make it easier to port content over from my Obsidian notes or my old portfolio
- A light and dark theme toggle would be nice. I generally prefer dark theme, but I also like having the option to choose for myself
- A robust search feature would be helpful ~~if~~ as the site grows

I also wanted to build the site from a template. Although I have experience with web design and web development, my heart is in cybersecurity. As I mentioned previously, I wanted there to be as little overhead associated with the website itself as possible. Adapting a template to my needs would save me considerable time building out schemas, designing layouts, catering to desktop and mobile form factors, etc.

After talking through various options with my good friend Claude, I landed on the [Astro web framework](https://astro.build/) using the [AstroPaper theme](https://astro.build/themes/details/astropaper/). The Astro web framework and this particular theme checked off all of my hard requirements, and the theme could be "easily" tweaked to fit my visual preferences.

# Design Implementation

The AstroPaper theme already included Markdown posts, a theme toggle, a search feature, an About page, and many other design features I had in mind. However, I made significant edits to the theme before adding any content. If you are interested in the exact code changes made, check out the [commit history](https://github.com/EthanMorrell/ethanmorrell.github.io/commits/libthon-revamp) (and if you're really committed, you can view the old site as well).

Apart from UI changes, I also added logical collections to organize posts as [projects](https://libthon.com/projects/), [Grey Hats-related content](https://libthon.com/greyhats/), or named [series](https://libthon.com/series/). Given that this site is multi-faceted, I thought it would benefit both organization and navigation to classify posts in this way rather than throwing all posts into [one big list](https://libthon.com/posts/) and forcing the user do their best.

As far as the actual coding goes, my friend Codex had a big role in it. That being said, I refuse to fully vibe-code this site. As the owner and author, I write all the post content, and I do actually review the code diffs before approving my own pull requests.

# Hosting

There are a few different options for hosting, but I did not look as extensively into these as I did the UI templates. I considered hosting the site on my own hardware for the extra challenge of securing a web server, but I did not want to spend money on a VPS, and I am already using my PC and router for other things (that you can maybe read about in a future post). The old site was already hosted on GitHub Pages, which is free for static sites, so it was only natural to continue using it. I developed the new site in its own branch and built it locally, then I merged it with the main branch once it was finished.

# Domain Configuration

GitHub Pages also plays nice with custom domains. By default, it gives your website a `username.github.io` URL, but you can configure your own in the repository settings (currently under `Settings > Pages > Build and deployment`). I purchased my domain from Cloudflare, mainly because it was cheap ($10/year), reputable, and secure. This isn't a Cloudflare ad, but even their free tier offers all kinds of useful security and detection features related to bot traffic, web application exploits, DDoS attacks, and more. Those security features are relevant if you use Cloudflare as a reverse proxy, but I am only using it in passthrough mode because GitHub Pages already assumes the risk on most if not all of those concerns.

One feature I did take advantage of is email security through SPF, DKIM, and DMARC records in my DNS configuration. I do not currently send emails from this domain, but I may configure an inbox in the future. Even more so, I do not want anyone to spoof emails on my behalf. I don't want to get into the weeds, but simply put:

- A Sender Policy Framework (SPF) record lists which mail servers are authorized to send mail on my behalf.
- A DomainKeys Identified Mail (DKIM) record uses public key cryptography to ensure that messages were not tampered with in transit and that they actually came from my domain.
- A Domain-based Message Authentication, Reporting, and Conformance (DMARC) record works in conjunction with SPF and/or DKIM. The domain must first pass the SPF/DKIM check(s) and must also be the same domain listed in the `From: domain` header.

Given that their are currently _no_ domains that I authorize to send my mail, I should be pretty safe from spoofing in theory. Later, if I decide to create an inbox using this domain, I can reconfigure the aforementioned DNS records accordingly.

# Closing Thoughts

Through this process, I achieved my main goal of starting an InfoSec blog. I also gained familiarity with a new web framework (Astro) and the process of purchasing and configuring my own domain through Cloudflare. I hope this post will be the first of many. I have many old projects under my belt that I may or may not port to this site, but I am currently working on some other projects that I would very much like to finish and publish first.

Be on the lookout for new posts Soon™ - either about my current Adversary Emulation project using [MITRE's Caldera](https://github.com/mitre/caldera), or about my training series for Grey Hats' Collegiate Cyber Defense Competition (CCDC) team.
