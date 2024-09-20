import { useState } from 'react'

import { Meta, StoryFn } from '@storybook/react'

import { Checkbox } from './checkbox'

const meta: Meta<typeof Checkbox> = {
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Set checked state',
    },
    className: {
      control: false,
      description: 'Managing styles from the outside',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the Checkbox use',
    },
    label: {
      control: 'text',
      description: 'Set label for Checkbox',
    },
    onCheckedChange: {
      action: 'Value changed',
      description: 'Callback for change current value',
    },
  },
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component:
          'The Checkbox component is a customizable checkbox control with a label, utilizing Radix for styling. It supports properties like `checked`, `disabled`, and `label`, offering flexibility in checkbox appearance based on these props.',
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'UI/Checkbox',
}

export default meta

export const Checked = {
  args: {
    checked: true,
    disabled: false,
    label: 'Checked',
  },
}

export const Unchecked = {
  args: {
    checked: false,
    disabled: false,
    label: 'Unchecked',
  },
}

export const Disabled = {
  args: {
    checked: true,
    disabled: true,
    label: 'Disabled',
  },
}

export const NoLabel = {
  args: {
    checked: false,
    disabled: false,
  },
}

export const Controlled: StoryFn<typeof Checkbox> = args => {
  const [checked, setChecked] = useState(args.checked || false)

  return <Checkbox {...args} checked={checked} onCheckedChange={() => setChecked(!checked)} />
}

Controlled.args = {
  disabled: false,
  label: 'Checkbox',
}
