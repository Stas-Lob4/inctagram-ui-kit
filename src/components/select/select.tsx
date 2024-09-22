import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import * as SelectRadix from '@radix-ui/react-select'
import clsx from 'clsx'

import s from './select.module.scss'

import { ArrowIos } from '../../assets/icons'
import { Typography } from '../typography'

type SelectSlot = 'content' | 'item' | 'label' | 'root' | 'trigger' | 'viewport'
export type SelectClasses = { [P in SelectSlot]?: string }

export type SelectBoxOption = {
  image?: ReactNode | string
  label?: string
  value: string
}

type SelectProps = {
  classes?: SelectClasses
  labelField?: string
  options?: SelectBoxOption[]
  pagination?: boolean
  placeholder?: string
} & ComponentPropsWithoutRef<typeof SelectRadix.Root>

export const Select = forwardRef<ElementRef<typeof SelectRadix.Trigger>, SelectProps>(
  ({ classes, labelField, options, pagination, placeholder, ...rest }, ref) => {
    const cls = getClassNames(classes, pagination)

    return (
      <div className={cls.root}>
        <Typography.Regular14 className={cls.label}>{labelField}</Typography.Regular14>
        <SelectRadix.Root {...rest}>
          <SelectRadix.Trigger className={cls.trigger} ref={ref}>
            <SelectRadix.Value placeholder={placeholder} />
            <SelectRadix.Icon asChild>
              <ArrowIos className={s.icon} />
            </SelectRadix.Icon>
          </SelectRadix.Trigger>

          <SelectRadix.Content className={cls.content} position={'popper'}>
            <SelectRadix.Viewport className={cls.viewport}>
              {options?.map((option, i) => (
                <SelectRadix.Item className={cls.item} key={i} value={option.value}>
                  <SelectRadix.ItemText>
                    <span className={clsx(s.text, pagination && s.small, option.image)}>
                      {option.image}
                      {option.label}
                    </span>
                  </SelectRadix.ItemText>
                </SelectRadix.Item>
              ))}
            </SelectRadix.Viewport>
            <SelectRadix.ScrollDownButton />
          </SelectRadix.Content>
        </SelectRadix.Root>
      </div>
    )
  }
)

const getClassNames = (classes?: SelectClasses, pagination?: boolean): SelectClasses => ({
  content: clsx(s.content, classes?.content),
  item: clsx(s.item, classes?.item, pagination ? s.withPagination : s.withoutPagination),
  label: clsx(s.label, classes?.label),
  root: clsx(s.root, classes?.root),
  trigger: clsx(s.trigger, classes?.trigger, pagination ? s.withPagination : s.withoutPagination),
  viewport: clsx(s.viewport, classes?.viewport),
})
