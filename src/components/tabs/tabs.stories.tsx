import { Meta, StoryObj } from '@storybook/react'

import { TabContent, Tabs, TabsProps } from './tabs'

const meta: Meta<TabsProps> = {
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'The initial tab value to be selected by default.',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the tabs stretch to fill the full width.',
    },
    onValueChange: {
      action: 'onValueChange',
      description: 'Callback function when tab selection changes.',
    },
    value: {
      control: 'text',
      description: 'The controlled value of the currently selected tab.',
    },
  },
  component: Tabs,
  tags: ['autodocs'],
  title: 'UI/Tabs',
}

export default meta
type Story = StoryObj<TabsProps>

export const Default: Story = {
  args: {
    defaultValue: 'tab1',
    fullWidth: false,
    tabs: [
      { title: 'Tab 1', value: 'tab1' },
      { title: 'Tab 2', value: 'tab2' },
      { title: 'Tab 3', value: 'tab3' },
    ],
  },
  render: (args: TabsProps) => (
    <Tabs {...args}>
      <TabContent value={'tab1'}>Content for Tab 1</TabContent>
      <TabContent value={'tab2'}>Content for Tab 2</TabContent>
      <TabContent value={'tab3'}>Content for Tab 3</TabContent>
    </Tabs>
  ),
}

export const FullWidthTabs: Story = {
  args: {
    ...Default.args,
    fullWidth: true,
  },
}

export const DisabledTabs: Story = {
  args: {
    defaultValue: 'tab2',
    fullWidth: false,
    tabs: [
      { disabled: true, title: 'Tab 1', value: 'tab1' },
      { title: 'Tab 2', value: 'tab2' },
      { title: 'Tab 3', value: 'tab3' },
    ],
  },
}
