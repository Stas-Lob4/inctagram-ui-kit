import type { Preview } from '@storybook/react'
import '../src/styles/index.scss'

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          'getting-started',
          ['Installation', 'Usage', 'Styling'],
          'design-system',
          ['Colors', 'Iconography'],
          'components',
          'layout',
        ],
      },
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values: [
        // 👇 Default values
        { name: 'Dark', value: '#000' },
        { name: 'Light', value: '#F7F9F2' },
        // 👇 Add your own
        { name: 'Maroon', value: '#400' },
      ],
      // 👇 Specify which background is shown by default
      default: 'Dark',
    },
    initialGlobals: {
      // 👇 Set the initial background color
      backgrounds: { value: '#000' },
    },
  },
}

export default preview
