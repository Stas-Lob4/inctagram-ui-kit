import type { Preview } from '@storybook/react'
import '../src/styles/index.scss'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import { themes } from '@storybook/theming'

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
        { name: 'dark', value: '#000' },
        { name: 'light', value: '#F7F9F2' },
        // 👇 Add your own
        { name: 'maroon', value: '#400' },
      ],
      // 👇 Specify which background is shown by default
      default: 'dark',
    },
    docs: {
      theme: themes.dark,
    },
    initialGlobals: {
      // 👇 Set the initial background color
      backgrounds: { value: '#000' },
    },
  },

  tags: ['autodocs'],
}

export default preview
