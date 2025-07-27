import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar for Maria's Field Guide that makes navigation intuitive
 */
const sidebars: SidebarsConfig = {
  // Main sidebar for the field guide
  fieldGuideSidebar: [
    'intro',
    'first-principles',
    'about-me',
    {
      type: 'category',
      label: 'Field Guide to Learning',
      link: {
        type: 'doc',
        id: 'field-guide/index',
      },
      items: [
        'field-guide/why-field-guide',
        'field-guide/thinking-models-learning',
        'field-guide/thinking-models-ld',
        {
          type: 'category',
          label: 'Phases of Work',
          link: {
            type: 'doc',
            id: 'field-guide/phases/index',
          },
          items: [
            'field-guide/phases/defining-framing',
            'field-guide/phases/prototype',
            'field-guide/phases/build',
            'field-guide/phases/test',
            'field-guide/phases/iterate',
            'field-guide/phases/deploy',
          ],
        },
        {
          type: 'category',
          label: 'Levers & Tactics',
          items: [
            'field-guide/tactics/designing-with-smes',
            'field-guide/tactics/ai-builder-archivist',
            'field-guide/tactics/cursor-tracking',
            'field-guide/tactics/choosing-format',
            'field-guide/tactics/reusable-scaffolding',
            'field-guide/tactics/build-buy-ignore',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Projects & Case Studies',
      items: [
        'projects/coffee-and-t',
        'projects/learning-village',
        'projects/zero-to-data',
      ],
    },
    'library',
  ],
};

export default sidebars;
