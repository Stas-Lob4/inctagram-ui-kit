import { Meta, StoryObj } from '@storybook/react'

import { Typography } from './typography'

const meta: Meta<typeof Typography.Bold14> = {
  argTypes: {
    children: {
      control: 'text',
      description: 'The text content',
    },
    className: {
      control: 'text',
      description: 'Custom CSS class',
      table: {
        defaultValue: { summary: 'undefined' },
        type: { summary: 'string' },
      },
    },
    color: {
      control: 'color',
      description: 'Sets the text color',
      table: {
        defaultValue: { summary: 'undefined' },
        type: { summary: 'string' },
      },
    },
  },
  component: Typography.Bold14,
  parameters: {
    controls: {
      expanded: true,
    },
  },
  tags: ['autodocs'],
  title: 'UI/Typography',
}

export default meta
type Story = StoryObj<typeof Typography.Bold14>

export const Bold14: Story = {
  args: {
    children: 'Bold 14px Text',
    color: '#fff',
  },
  render: args => <Typography.Bold14 {...args} />,
}

export const Bold16: Story = {
  args: {
    children: 'Bold 16px Text',
    color: '#fff',
  },
  render: args => <Typography.Bold16 {...args} />,
}

export const H1: Story = {
  args: {
    children: 'Heading 1',
    color: '#ff6347',
  },
  render: args => <Typography.H1 {...args} />,
}

export const H2: Story = {
  args: {
    children: 'Heading 2',
    color: '#4682b4',
  },
  render: args => <Typography.H2 {...args} />,
}

export const H3: Story = {
  args: {
    children: 'Heading 3',
    color: '#fff',
  },
  render: args => <Typography.H3 {...args} />,
}

export const Large: Story = {
  args: {
    children: 'Large Paragraph',
    color: '#fff',
  },
  render: args => <Typography.Large {...args} />,
}

export const Medium14: Story = {
  args: {
    children: 'Medium 14px Text',
    color: '#fff',
  },
  render: args => <Typography.Medium14 {...args} />,
}

export const Regular12: Story = {
  args: {
    children: 'Regular 12px Text',
    color: '#fff',
  },
  render: args => <Typography.Regular12 {...args} />,
}

export const Regular14: Story = {
  args: {
    children: 'Regular 14px Text',
    color: '#fff',
  },
  render: args => <Typography.Regular14 {...args} />,
}

export const Regular16: Story = {
  args: {
    children: 'Regular 16px Text',
    color: '#fff',
  },
  render: args => <Typography.Regular16 {...args} />,
}

export const RegularLink: Story = {
  argTypes: {
    href: {
      control: 'text',
      description: 'URL for the link',
      table: {
        defaultValue: { summary: '#' },
        type: { summary: 'string' },
      },
    },
  },
  args: {
    children: 'Regular Link',
    color: '#fff',
    href: '#',
  },
  render: args => <Typography.RegularLink {...args} />,
}

export const Semibold12: Story = {
  args: {
    children: 'Semibold 12px Text',
    color: '#fff',
  },
  render: args => <Typography.Semibold12 {...args} />,
}

export const SmallLink: Story = {
  argTypes: {
    href: {
      control: 'text',
      description: 'URL for the link',
      table: {
        defaultValue: { summary: '#' },
        type: { summary: 'string' },
      },
    },
  },
  args: {
    children: 'Small Link',
    color: '#fff',
    href: '#',
  },
  render: args => <Typography.SmallLink {...args} />,
}

export const SmallText: Story = {
  args: {
    children: 'Small text',
    color: '#fff',
  },
  render: args => <Typography.SmallText {...args} />,
}
