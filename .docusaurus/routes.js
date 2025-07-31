import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/archive',
    component: ComponentCreator('/archive', '1f7'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/now',
    component: ComponentCreator('/now', '975'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'ac5'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'f67'),
        routes: [
          {
            path: '/docs/tags',
            component: ComponentCreator('/docs/tags', 'fce'),
            exact: true
          },
          {
            path: '/docs/tags/agile',
            component: ComponentCreator('/docs/tags/agile', 'f02'),
            exact: true
          },
          {
            path: '/docs/tags/ai',
            component: ComponentCreator('/docs/tags/ai', 'bd3'),
            exact: true
          },
          {
            path: '/docs/tags/ai-tools',
            component: ComponentCreator('/docs/tags/ai-tools', '26d'),
            exact: true
          },
          {
            path: '/docs/tags/background',
            component: ComponentCreator('/docs/tags/background', '526'),
            exact: true
          },
          {
            path: '/docs/tags/bio',
            component: ComponentCreator('/docs/tags/bio', '416'),
            exact: true
          },
          {
            path: '/docs/tags/books',
            component: ComponentCreator('/docs/tags/books', '3be'),
            exact: true
          },
          {
            path: '/docs/tags/case-study',
            component: ComponentCreator('/docs/tags/case-study', 'aff'),
            exact: true
          },
          {
            path: '/docs/tags/collaboration',
            component: ComponentCreator('/docs/tags/collaboration', 'e6d'),
            exact: true
          },
          {
            path: '/docs/tags/community',
            component: ComponentCreator('/docs/tags/community', '987'),
            exact: true
          },
          {
            path: '/docs/tags/community-platform',
            component: ComponentCreator('/docs/tags/community-platform', '338'),
            exact: true
          },
          {
            path: '/docs/tags/content-architecture',
            component: ComponentCreator('/docs/tags/content-architecture', 'de2'),
            exact: true
          },
          {
            path: '/docs/tags/content-creation',
            component: ComponentCreator('/docs/tags/content-creation', '37e'),
            exact: true
          },
          {
            path: '/docs/tags/content-strategy',
            component: ComponentCreator('/docs/tags/content-strategy', '1f1'),
            exact: true
          },
          {
            path: '/docs/tags/data-literacy',
            component: ComponentCreator('/docs/tags/data-literacy', '221'),
            exact: true
          },
          {
            path: '/docs/tags/decision-framework',
            component: ComponentCreator('/docs/tags/decision-framework', '080'),
            exact: true
          },
          {
            path: '/docs/tags/decision-tracking',
            component: ComponentCreator('/docs/tags/decision-tracking', '9bc'),
            exact: true
          },
          {
            path: '/docs/tags/deployment',
            component: ComponentCreator('/docs/tags/deployment', '6c0'),
            exact: true
          },
          {
            path: '/docs/tags/design',
            component: ComponentCreator('/docs/tags/design', 'b23'),
            exact: true
          },
          {
            path: '/docs/tags/design-decisions',
            component: ComponentCreator('/docs/tags/design-decisions', '20f'),
            exact: true
          },
          {
            path: '/docs/tags/design-process',
            component: ComponentCreator('/docs/tags/design-process', '978'),
            exact: true
          },
          {
            path: '/docs/tags/documentation',
            component: ComponentCreator('/docs/tags/documentation', 'a92'),
            exact: true
          },
          {
            path: '/docs/tags/feedback',
            component: ComponentCreator('/docs/tags/feedback', '406'),
            exact: true
          },
          {
            path: '/docs/tags/field-guide',
            component: ComponentCreator('/docs/tags/field-guide', 'ba4'),
            exact: true
          },
          {
            path: '/docs/tags/format-selection',
            component: ComponentCreator('/docs/tags/format-selection', '322'),
            exact: true
          },
          {
            path: '/docs/tags/foundation',
            component: ComponentCreator('/docs/tags/foundation', 'ea7'),
            exact: true
          },
          {
            path: '/docs/tags/frameworks',
            component: ComponentCreator('/docs/tags/frameworks', '065'),
            exact: true
          },
          {
            path: '/docs/tags/getting-started',
            component: ComponentCreator('/docs/tags/getting-started', 'eda'),
            exact: true
          },
          {
            path: '/docs/tags/implementation',
            component: ComponentCreator('/docs/tags/implementation', '0a6'),
            exact: true
          },
          {
            path: '/docs/tags/improvement',
            component: ComponentCreator('/docs/tags/improvement', '270'),
            exact: true
          },
          {
            path: '/docs/tags/influences',
            component: ComponentCreator('/docs/tags/influences', 'f08'),
            exact: true
          },
          {
            path: '/docs/tags/integration',
            component: ComponentCreator('/docs/tags/integration', '42d'),
            exact: true
          },
          {
            path: '/docs/tags/iteration',
            component: ComponentCreator('/docs/tags/iteration', 'e7e'),
            exact: true
          },
          {
            path: '/docs/tags/ld-strategy',
            component: ComponentCreator('/docs/tags/ld-strategy', '0fc'),
            exact: true
          },
          {
            path: '/docs/tags/learning-ecosystem',
            component: ComponentCreator('/docs/tags/learning-ecosystem', '635'),
            exact: true
          },
          {
            path: '/docs/tags/learning-framework',
            component: ComponentCreator('/docs/tags/learning-framework', 'd87'),
            exact: true
          },
          {
            path: '/docs/tags/learning-in-public',
            component: ComponentCreator('/docs/tags/learning-in-public', '6a9'),
            exact: true
          },
          {
            path: '/docs/tags/learning-philosophy',
            component: ComponentCreator('/docs/tags/learning-philosophy', '612'),
            exact: true
          },
          {
            path: '/docs/tags/learning-program',
            component: ComponentCreator('/docs/tags/learning-program', '710'),
            exact: true
          },
          {
            path: '/docs/tags/learning-resources',
            component: ComponentCreator('/docs/tags/learning-resources', 'af8'),
            exact: true
          },
          {
            path: '/docs/tags/learning-theory',
            component: ComponentCreator('/docs/tags/learning-theory', '3f6'),
            exact: true
          },
          {
            path: '/docs/tags/mental-models',
            component: ComponentCreator('/docs/tags/mental-models', 'fae'),
            exact: true
          },
          {
            path: '/docs/tags/methodology',
            component: ComponentCreator('/docs/tags/methodology', '7ab'),
            exact: true
          },
          {
            path: '/docs/tags/modularity',
            component: ComponentCreator('/docs/tags/modularity', '80f'),
            exact: true
          },
          {
            path: '/docs/tags/overview',
            component: ComponentCreator('/docs/tags/overview', '24f'),
            exact: true
          },
          {
            path: '/docs/tags/personal',
            component: ComponentCreator('/docs/tags/personal', 'ae2'),
            exact: true
          },
          {
            path: '/docs/tags/phases',
            component: ComponentCreator('/docs/tags/phases', '25f'),
            exact: true
          },
          {
            path: '/docs/tags/philosophy',
            component: ComponentCreator('/docs/tags/philosophy', '0da'),
            exact: true
          },
          {
            path: '/docs/tags/principles',
            component: ComponentCreator('/docs/tags/principles', 'c3f'),
            exact: true
          },
          {
            path: '/docs/tags/problem-definition',
            component: ComponentCreator('/docs/tags/problem-definition', 'c4d'),
            exact: true
          },
          {
            path: '/docs/tags/program-design',
            component: ComponentCreator('/docs/tags/program-design', '93a'),
            exact: true
          },
          {
            path: '/docs/tags/project-management',
            component: ComponentCreator('/docs/tags/project-management', '4d0'),
            exact: true
          },
          {
            path: '/docs/tags/prototyping',
            component: ComponentCreator('/docs/tags/prototyping', '28f'),
            exact: true
          },
          {
            path: '/docs/tags/resource-allocation',
            component: ComponentCreator('/docs/tags/resource-allocation', 'ff3'),
            exact: true
          },
          {
            path: '/docs/tags/resources',
            component: ComponentCreator('/docs/tags/resources', 'e0f'),
            exact: true
          },
          {
            path: '/docs/tags/scalability',
            component: ComponentCreator('/docs/tags/scalability', '44b'),
            exact: true
          },
          {
            path: '/docs/tags/scoping',
            component: ComponentCreator('/docs/tags/scoping', '46f'),
            exact: true
          },
          {
            path: '/docs/tags/smes',
            component: ComponentCreator('/docs/tags/smes', 'e71'),
            exact: true
          },
          {
            path: '/docs/tags/strategy',
            component: ComponentCreator('/docs/tags/strategy', '2be'),
            exact: true
          },
          {
            path: '/docs/tags/systems-thinking',
            component: ComponentCreator('/docs/tags/systems-thinking', '262'),
            exact: true
          },
          {
            path: '/docs/tags/tactics',
            component: ComponentCreator('/docs/tags/tactics', '843'),
            exact: true
          },
          {
            path: '/docs/tags/technology',
            component: ComponentCreator('/docs/tags/technology', '8db'),
            exact: true
          },
          {
            path: '/docs/tags/testing',
            component: ComponentCreator('/docs/tags/testing', 'd75'),
            exact: true
          },
          {
            path: '/docs/tags/upskilling',
            component: ComponentCreator('/docs/tags/upskilling', 'aa3'),
            exact: true
          },
          {
            path: '/docs/tags/validation',
            component: ComponentCreator('/docs/tags/validation', 'a17'),
            exact: true
          },
          {
            path: '/docs/tags/workflow',
            component: ComponentCreator('/docs/tags/workflow', 'ecc'),
            exact: true
          },
          {
            path: '/docs',
            component: ComponentCreator('/docs', '40c'),
            routes: [
              {
                path: '/docs/about-me',
                component: ComponentCreator('/docs/about-me', '898'),
                exact: true,
                sidebar: "fieldGuideSidebar"
              },
              {
                path: '/docs/connections/',
                component: ComponentCreator('/docs/connections/', 'efb'),
                exact: true,
                sidebar: "fieldGuideSidebar"
              },
              {
                path: '/docs/experiments/',
                component: ComponentCreator('/docs/experiments/', '073'),
                exact: true,
                sidebar: "fieldGuideSidebar"
              },
              {
                path: '/docs/field-guide/',
                component: ComponentCreator('/docs/field-guide/', '44a'),
                exact: true,
                sidebar: "fieldGuideSidebar"
              },
              {
                path: '/docs/field-guide/phases/',
                component: ComponentCreator('/docs/field-guide/phases/', '3b7'),
                exact: true,
                sidebar: "fieldGuideSidebar"
              },
              {
                path: '/docs/field-guide/phases/build',
                component: ComponentCreator('/docs/field-guide/phases/build', 'aa3'),
                exact: true,
                sidebar: "fieldGuideSidebar"
              },
              {
                path: '/docs/field-guide/phases/defining-framing',
                component: ComponentCreator('/docs/field-guide/phases/defining-framing', 'fbc'),
                exact: true,
                sidebar: "fieldGuideSidebar"
              },
              {
                path: '/docs/field-guide/phases/deploy',
                component: ComponentCreator('/docs/field-guide/phases/deploy', '3f8'),
                exact: true,
                sidebar: "fieldGuideSidebar"
              },
              {
                path: '/docs/field-guide/phases/iterate',
                component: ComponentCreator('/docs/field-guide/phases/iterate', '256'),
                exact: true,
                sidebar: "fieldGuideSidebar"
              },
              {
                path: '/docs/field-guide/phases/prototype',
                component: ComponentCreator('/docs/field-guide/phases/prototype', '6c4'),
                exact: true,
                sidebar: "fieldGuideSidebar"
              },
              {
                path: '/docs/field-guide/phases/test',
                component: ComponentCreator('/docs/field-guide/phases/test', '411'),
                exact: true,
                sidebar: "fieldGuideSidebar"
              },
              {
                path: '/docs/field-guide/tactics/ai-builder-archivist',
                component: ComponentCreator('/docs/field-guide/tactics/ai-builder-archivist', 'ec3'),
                exact: true,
                sidebar: "fieldGuideSidebar"
              },
              {
                path: '/docs/field-guide/tactics/build-buy-ignore',
                component: ComponentCreator('/docs/field-guide/tactics/build-buy-ignore', '51d'),
                exact: true,
                sidebar: "fieldGuideSidebar"
              },
              {
                path: '/docs/field-guide/tactics/choosing-format',
                component: ComponentCreator('/docs/field-guide/tactics/choosing-format', '971'),
                exact: true,
                sidebar: "fieldGuideSidebar"
              },
              {
                path: '/docs/field-guide/tactics/cursor-tracking',
                component: ComponentCreator('/docs/field-guide/tactics/cursor-tracking', '080'),
                exact: true,
                sidebar: "fieldGuideSidebar"
              },
              {
                path: '/docs/field-guide/tactics/designing-with-smes',
                component: ComponentCreator('/docs/field-guide/tactics/designing-with-smes', 'fb9'),
                exact: true,
                sidebar: "fieldGuideSidebar"
              },
              {
                path: '/docs/field-guide/tactics/reusable-scaffolding',
                component: ComponentCreator('/docs/field-guide/tactics/reusable-scaffolding', '0a4'),
                exact: true,
                sidebar: "fieldGuideSidebar"
              },
              {
                path: '/docs/field-guide/thinking-models-ld',
                component: ComponentCreator('/docs/field-guide/thinking-models-ld', '953'),
                exact: true,
                sidebar: "fieldGuideSidebar"
              },
              {
                path: '/docs/field-guide/thinking-models-learning',
                component: ComponentCreator('/docs/field-guide/thinking-models-learning', 'f8e'),
                exact: true,
                sidebar: "fieldGuideSidebar"
              },
              {
                path: '/docs/field-guide/why-field-guide',
                component: ComponentCreator('/docs/field-guide/why-field-guide', '06f'),
                exact: true,
                sidebar: "fieldGuideSidebar"
              },
              {
                path: '/docs/first-principles',
                component: ComponentCreator('/docs/first-principles', 'ece'),
                exact: true,
                sidebar: "fieldGuideSidebar"
              },
              {
                path: '/docs/influences/',
                component: ComponentCreator('/docs/influences/', 'c39'),
                exact: true,
                sidebar: "fieldGuideSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '998'),
                exact: true,
                sidebar: "fieldGuideSidebar"
              },
              {
                path: '/docs/learning/',
                component: ComponentCreator('/docs/learning/', '079'),
                exact: true,
                sidebar: "fieldGuideSidebar"
              },
              {
                path: '/docs/library',
                component: ComponentCreator('/docs/library', '2ef'),
                exact: true,
                sidebar: "fieldGuideSidebar"
              },
              {
                path: '/docs/projects/coffee-and-t',
                component: ComponentCreator('/docs/projects/coffee-and-t', 'df2'),
                exact: true,
                sidebar: "fieldGuideSidebar"
              },
              {
                path: '/docs/projects/learning-village',
                component: ComponentCreator('/docs/projects/learning-village', '850'),
                exact: true,
                sidebar: "fieldGuideSidebar"
              },
              {
                path: '/docs/projects/zero-to-data',
                component: ComponentCreator('/docs/projects/zero-to-data', '39d'),
                exact: true,
                sidebar: "fieldGuideSidebar"
              },
              {
                path: '/docs/questions/',
                component: ComponentCreator('/docs/questions/', 'c6e'),
                exact: true,
                sidebar: "fieldGuideSidebar"
              },
              {
                path: '/docs/reflections/',
                component: ComponentCreator('/docs/reflections/', '97e'),
                exact: true,
                sidebar: "fieldGuideSidebar"
              },
              {
                path: '/docs/topics/',
                component: ComponentCreator('/docs/topics/', '224'),
                exact: true,
                sidebar: "fieldGuideSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
