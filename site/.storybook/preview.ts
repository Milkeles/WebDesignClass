import type { Preview } from '@storybook/react-vite'
import React from 'react'
import '../src/i18n'
import '../src/index.css'
import 'flag-icons/css/flag-icons.min.css'

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme
      document.documentElement.classList.toggle('dark', theme === 'dark')
      return React.createElement(Story)
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo'
    }
  },
}

export default preview