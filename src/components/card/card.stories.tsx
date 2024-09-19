import { ElementRef, ForwardedRef, ReactElement, ReactNode } from 'react'

import { Decorator, Meta, StoryContext, StoryFn, StoryObj } from '@storybook/react'

import { Replace } from '../../types/helpers'
import { Button } from '../button'
import { Typography } from '../typography'
import { Card, CardContentProps } from './card'

export const commonDecorator: Decorator = (Story: StoryFn, context: StoryContext) => (
  <>
    <style>{`
      .card-content { width: 400px; max-width: 100%; }
      .buttons-group { display: flex; gap: 16px; }
      .button { flex: 1 1 0; }
    `}</style>
    <Story {...context} />
  </>
)

type CustomRenderProps =
  | (Omit<CardContentProps, 'children'> & {
      children?: undefined
      renderChildren: (props: Pick<CardContentProps, 'ignoreHeader'>) => ReactNode
    })
  | Replace<CardContentProps, { children: ReactElement | ReactElement[] }>

const CustomRender = (props: CustomRenderProps) => {
  if (!props.children) {
    const { renderChildren, ...restProps } = props

    return <Card {...restProps}>{renderChildren({ ignoreHeader: props.ignoreHeader })}</Card>
  }

  return <Card {...props} />
}

const meta: Meta<CustomRenderProps & { ref: ForwardedRef<ElementRef<'div'>> }> = {
  argTypes: {
    children: {
      control: false,
      description: 'Any ReactNode component',
      table: { type: { summary: 'ReactNode' } },
    },
    className: {
      description: 'Class for the root `div` element',
      table: { type: { summary: 'string' } },
    },
    ignoreHeader: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'Prevents increased top padding for Card.Content if following a Card.Header',
      table: { type: { summary: 'boolean' } },
    },
    ref: {
      control: false,
      description: 'Forwarded ref for the root `div` element',
      table: { type: { summary: 'ForwardedRef<HTMLDivElement>' } },
    },
  },
  decorators: [commonDecorator],
  excludeStories: ['cardHeader', 'cardContent', 'commonDecorator'],
  render: CustomRender,
  tags: ['autodocs'],
  title: 'UI/Card',
}

export default meta
type Story = StoryObj<CustomRenderProps>

export const cardHeader = (
  <Typography.H1 component={'h2'} style={{ marginLeft: 16 }}>
    Long UserName
  </Typography.H1>
)

export const cardContent = [
  <Typography.Regular16 component={'p'} key={'short'}>
    Lorem, ipsum dolor.
  </Typography.Regular16>,
  <Typography.Regular16 component={'p'} key={'long'}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero in, mollitia facilis nisi
    praesentium necessitatibus. Harum veritatis odit ullam ut earum recusandae totam quia impedit
    consequatur, illo minus, quidem in repellat possimus! Facilis obcaecati maiores tenetur!
  </Typography.Regular16>,
  <div className={'buttons-group'} key={'buttons'}>
    <Button className={'button'}>Confirm</Button>
    <Button className={'button'} variant={'tertiary'}>
      Deny
    </Button>
  </div>,
]

export const HeaderOnly: Story = {
  args: { children: <Card.Header>{cardHeader}</Card.Header>, className: 'card-content' },
}

export const ContentOnly: Story = {
  args: {
    className: 'card-content',
    renderChildren: props =>
      cardContent.map((content, i) => (
        <Card.Content {...props} key={i}>
          {content}
        </Card.Content>
      )),
  },
}

export const Basic: Story = {
  args: {
    className: 'card-content',
    ignoreHeader: false,
    renderChildren: props => (
      <>
        {HeaderOnly.args?.children}
        {ContentOnly.args?.renderChildren?.(props)}
      </>
    ),
  },
}
