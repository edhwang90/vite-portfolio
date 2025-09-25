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
    color: '#83F5FF'
  },
  {
    title: 'facilitating ride-sharing',
    tags: [
      'mobile',
      'trust',
      'transparency'
    ],
    route: '/fareshare',
    color: '#66FF88'
  },
  {
    title: 'helping with recipe usage',
    tags: [
      'web',
      'AI',
      'accessibility'
    ],
    route: '/recipebook',
    color: '#FFCA40'
  },
  {
    title: 'assisting in a redesign',
    tags: [
      '.gov',
      'design thinking',
      'sales'
    ],
    route: '/govredesign',
    color: '#4a9bff'
  },
  {
    title: 'a pattern library',
    tags: [
      'react',
      'storybook.js',
      'forms'
    ],
    route: '/storybook',
    color: '#FD71FF'
  }
]