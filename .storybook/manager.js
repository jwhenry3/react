import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'

addons.setConfig({
  theme: create({
    base: 'light',
    brandImage: 'cytracom.png',
    brandTitle: 'Cytracom Storybook',
    fontBase: 'Graphik, "Helvetica Neue", sans-serif',
    fontCode: 'monospace'
  })
})
