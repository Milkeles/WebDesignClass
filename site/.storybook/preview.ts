import type { Preview } from '@storybook/react-vite'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { ThemeContext } from '../src/context/theme-context'
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
      const dark = context.globals.theme === 'dark'
      document.documentElement.classList.toggle('dark', dark)
      return React.createElement(
        ThemeContext.Provider,
        { value: { dark, toggleDark: () => {} } },
        React.createElement(MemoryRouter, null,
          React.createElement(Story)
        )
      )
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