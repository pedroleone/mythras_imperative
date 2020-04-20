const searchEnabled = process.env.ALGOLIA_ADMIN_KEY ? true : false;

const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://hasura.io',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: './images/ose_logo_white.png',
    logoLink: '/',
    title: 'Mythras Imperative',
    githubUrl: '',
    helpUrl: '',
    tweetText: '',
    social: '',
    links: [{ text: '', link: '' }],
    search: {
      enabled: searchEnabled,
      indexName: 'OSE_SRD',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      
      //'/introduction', // add trailing slash if enabled above

    ],
    collapsedNav: [
      //'/personagens', // add trailing slash if enabled above
    ],
    links: [{ text: 'Mythras Imperative', link: '#' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "",
  },
  siteMetadata: {
    title: 'Mythras Imperative',
    description: 'Documento do Mythras Imperative ',
    ogImage: null,
    docsLocation: '',
    favicon: null,
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
