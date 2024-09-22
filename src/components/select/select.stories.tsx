import { Meta, StoryObj } from '@storybook/react'

import s from './select.module.scss'

import { RuFlag, UkFlag } from '../../assets/icons'
import { Select } from './select'

const meta: Meta<typeof Select> = {
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'Default value for the select component',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the select input',
    },
    labelField: {
      description: 'Label text for the select component',
    },
    onValueChange: {
      action: 'changed',
      description: 'Callback function when the value changes',
    },
    options: {
      control: 'object',
      description: 'Options available for selection',
    },
    pagination: {
      control: 'boolean',
      description: 'Enable pagination style for select options',
    },
    placeholder: {
      description: 'Placeholder text when no option is selected',
    },
  },
  component: Select,
  parameters: {
    description: {
      component:
        'The Select component in React provides a customizable dropdown selection interface with options, supporting features like pagination, placeholder text, and styling classes for easy customization. It utilizes Radix for enhanced styling and functionality, making it simple to create interactive select dropdowns for various use cases.',
    },
  },
  title: 'UI/Select',
}

export default meta
type Story = StoryObj<typeof Select>

export const Default: Story = {
  args: {
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
    pagination: false,
    placeholder: 'Select an option...',
  },
}

export const WithLabel: Story = {
  args: {
    labelField: 'Select an option',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
    placeholder: 'Select an option...',
  },
}

export const WithPagination: Story = {
  args: {
    defaultValue: 'option1',
    options: [
      { label: '10', value: 'option1' },
      { label: '20', value: 'option2' },
      { label: '30', value: 'option3' },
      { label: '50', value: 'option4' },
      { label: '100', value: 'option5' },
    ],
    pagination: true,
  },
}

export const WithIcon: Story = {
  args: {
    classes: { root: s.rootWithIcon, trigger: s.triggerWithIcon },
    defaultValue: 'en',
    options: [
      { image: <UkFlag />, label: 'English', value: 'en' },
      { image: <RuFlag />, label: 'Russian', value: 'ru' },
    ],
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
