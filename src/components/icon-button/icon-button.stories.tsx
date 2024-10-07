import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { JSX, MouseEvent, RefAttributes, useState } from 'react'
import { CalendarFill, CalendarOutline, HeartFill, HeartOutline } from '../../assets/icons'
import { IconButton, IconButtonProps, IconButtonSize } from './icon-button'
import { Typography } from '../typography'

const options = ['heart', 'calendar'] as const

const iconsMap: Record<(typeof options)[number], JSX.Element> = {
  calendar: <CalendarOutline />,
  heart: <HeartOutline />,
}
const activeIconsMap: Record<(typeof options)[number], JSX.Element> = {
  calendar: <CalendarFill />,
  heart: <HeartFill style={{ color: 'var(--color-danger-300, red)' }} />,
}

type CustomRenderProps = IconButtonProps<'button'> & {
  icon: (typeof options)[number]
  isToggle?: boolean
}

const CustomRender = ({ icon, isToggle = true, ...props }: CustomRenderProps) => {
  const [active, setActive] = useState(false)

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    props.onClick?.(e)

    if (!props.disabled && isToggle) {
      setActive(prev => !prev)
    }
  }

  return (
    <IconButton {...props} onClick={handleClick}>
      {active ? activeIconsMap[icon] : iconsMap[icon]}
    </IconButton>
  )
}

const meta: Meta<CustomRenderProps & RefAttributes<'button'>> = {
  argTypes: {
    className: {
      description: 'The name of the CSS class to be passed to the root component',
      table: { type: { summary: 'string' } },
    },
    component: {
      control: false,
      description: 'The component to be used as the root of the IconButton under the hood.',
      table: { defaultValue: { summary: 'button' }, type: { summary: 'ElementType' } },
    },
    disabled: {
      description: `When \`true\`, prevents the user from interacting with the button.
        CSS-property \`pointer-events: none\` is set in this case.`,
      table: { type: { summary: 'boolean' } },
    },
    icon: {
      control: { type: 'select' },
      description: `STORYBOOK_SPECIFIC_SETTING: An icon to demonstrate how the component works. 
        It toggles the view, simulating the \`active\` state.\t
        __NOTE:__ The \`IconButton\` component itself has no state switching functionality.`,
      options: options,
      table: { type: { summary: 'string' } },
    },
    onClick: { control: action('clicked') },
    ref: {
      description: 'The ref is forwarded to the root element, which by default is `button`.',
      table: { type: { summary: 'ForwardedRef<ElementRef<T>>' } },
    },
    size: {
      control: 'inline-radio',
      description: `One of the preset sizes. It has the following characteristics:\t
        _small:_ iconSize: 16px, buttonPadding: 4px\t
        _medium:_ iconSize: 24px, buttonPadding: 6px\t
        _large:_ iconSize: 36px, buttonPadding: 6px\t
        `,
      options: ['small', 'medium', 'large'] satisfies IconButtonSize[],
      table: { defaultValue: { summary: 'medium' }, type: { summary: 'small | medium | large' } },
    },
  },
  decorators: [
    Story => (
      <>
        <Typography.Regular14 component={'p'} style={{ marginBottom: '1rem' }}>
          <span style={{ fontStyle: 'italic' }}>NOTE:</span> Setting the active state of the button
          has been added for demonstration purposes. The component itself does not have this
          behavior.
        </Typography.Regular14>
        <Story />
      </>
    ),
  ],
  render: CustomRender,
  tags: ['autodocs'],
  title: 'UI/IconButton',
}

export default meta
type Story = StoryObj<typeof meta>

export const Small: Story = {
  args: {
    disabled: false,
    icon: 'heart',
    size: 'small',
  },
}

export const Medium: Story = {
  args: {
    ...Small.args,
    size: 'medium',
  },
}

export const Large: Story = {
  args: {
    ...Small.args,
    size: 'large',
  },
}

export const AsLink: StoryObj<IconButtonProps<'a'>> = {
  args: {
    ...Medium.args,
    component: 'a',
    href: '/?path=/docs/ui-iconbutton--docs',
    isToggle: false,
    title: 'go to IconButton docs',
  },
}