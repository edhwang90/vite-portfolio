import type { Project } from "./types/types";

export const projectsJson: Project[] = [
  {
    title: 'a front-end dev sandbox',
    tags: [
      'react & typescript',
      'AI-assisted dev',
      'miscellaneous'
    ],
    route: '/sandbox',
    color: '#FFCA40',
    type: 'dev'
  },
  {
    title: 'facilitating ride-sharing',
    tags: [
      'mobile',
      'trust',
      'transparency'
    ],
    route: '/fareshare',
    color: '#66FF88',
    type: 'design'
  },
  {
    title: 'helping with recipe usage',
    tags: [
      'web',
      'AI',
      'accessibility'
    ],
    route: '/recipebook',
    color: '#66FF88',
    type: 'design'
  },
  {
    title: 'assisting in a redesign',
    tags: [
      '.gov',
      'design thinking',
      'sales'
    ],
    route: '/govredesign',
    color: '#66FF88',
    type: 'design'
  },
  {
    title: 'a pattern library',
    tags: [
      'react',
      'storybook.js',
      'forms'
    ],
    route: '/storybook',
    color: '#FFCA40',
    type: 'dev'
  }
]