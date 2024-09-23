import type { PatternStoreObjects, Site, SocialObjects } from './types';

export const SITE: Site = {
  website: 'https://our-common-thread.github.io/',
  author: 'Beans',
  desc: 'A portfolio of fabric art projects and creative pursuits.',
  title: 'Our Common Thread',
  ogImage: 'assets/logo_full.png',
  lightAndDarkMode: true,
  postPerPage: 6,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: 'en', // html lang code. Set this empty and default will be "en"
  langTag: ['en-US'], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: true,
  svg: true,
  width: 150,
  height: 150,
};

export const SOCIALS: SocialObjects = [
  {
    name: 'Github',
    href: 'https://github.com/our-common-thread',
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: 'Facebook',
    href: '',
    linkTitle: `${SITE.title} on Facebook`,
    active: false,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/our.common.thread/',
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: 'LinkedIn',
    href: '',
    linkTitle: `${SITE.title} on LinkedIn`,
    active: false,
  },
  {
    name: 'Mail',
    href: 'mailto:our.common.thread.art@gmail.com',
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: 'Twitter',
    href: '',
    linkTitle: `${SITE.title} on Twitter`,
    active: false,
  },
  {
    name: 'Twitch',
    href: '',
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
  },
  {
    name: 'YouTube',
    href: '',
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: 'WhatsApp',
    href: '',
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
  },
  {
    name: 'Snapchat',
    href: '',
    linkTitle: `${SITE.title} on Snapchat`,
    active: false,
  },
  {
    name: 'Pinterest',
    href: '',
    linkTitle: `${SITE.title} on Pinterest`,
    active: false,
  },
  {
    name: 'TikTok',
    href: '',
    linkTitle: `${SITE.title} on TikTok`,
    active: false,
  },
  {
    name: 'CodePen',
    href: '',
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
  },
  {
    name: 'Discord',
    href: '',
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: 'GitLab',
    href: '',
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: 'Reddit',
    href: '',
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: 'Skype',
    href: '',
    linkTitle: `${SITE.title} on Skype`,
    active: false,
  },
  {
    name: 'Steam',
    href: '',
    linkTitle: `${SITE.title} on Steam`,
    active: false,
  },
  {
    name: 'Telegram',
    href: '',
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
  {
    name: 'Mastodon',
    href: '',
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },
];

export const PATTERNS: PatternStoreObjects = [
  {
    name: 'Ribblr',
    href: 'https://ribblr.com/shop/our-common-thread/?referrer=443329',
    active: true,
  },
  {
    name: 'Ravelry',
    href: 'https://www.ravelry.com/stores/our-common-thread',
    active: true,
  },
  {
    name: 'Ko-Fi',
    href: 'https://ko-fi.com/ourcommonthread',
    active: true,
  },
];
