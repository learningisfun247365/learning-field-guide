import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Maria's Field Guide",
  tagline: 'Learning in public, building in the open',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://marias-field-guide.onrender.com', // You can change this later
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'learningisfun247365', // Your GitHub username
  projectName: 'learning-field-guide', // Your repo name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/learningisfun247365/learning-field-guide/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/field-guide-social-card.jpg',
    navbar: {
      title: "Maria's Digital Garden",
      items: [
        {to: '/docs/about-me', label: 'About Me', position: 'left'},
        {
          type: 'docSidebar',
          sidebarId: 'fieldGuideSidebar',
          position: 'left',
          label: 'Learning Field Guide',
        },
        {
          label: 'Digital Garden',
          position: 'left',
          items: [
            {to: '/docs/learning', label: 'Learning Journal'},
            {to: '/docs/experiments', label: 'Experiments'},
            {to: '/docs/reflections', label: 'Reflections'},
            {to: '/docs/topics', label: 'Topics'},
            {to: '/docs/connections', label: 'Connections'},
            {to: '/docs/questions', label: 'Questions'},
            {to: '/docs/influences', label: 'Influences'},
          ],
        },
        {href: 'https://github.com/learningisfun247365/learning-field-guide', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Field Guide',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
            {
              label: 'First Principles',
              to: '/docs/first-principles',
            },
                          {
                label: 'Index',
                to: '/archive',
              },
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'What I\'m Working On',
              to: '/now',
            },
            {
              label: 'About Me',
              to: '/docs/about-me',
            },
            {
              label: 'Projects',
              to: '/docs/projects/coffee-and-t',
            },
            {
              label: 'Library',
              to: '/docs/library',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/learningisfun247365/learning-field-guide',
            },
            {
              label: 'Learning in Public',
              to: '/docs/intro',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Maria's Field Guide. Learning in public, building in the open.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
