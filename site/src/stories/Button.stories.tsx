import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../components/ui/Button'
import '../index.css'

import {Moon} from "lucide-react"

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'destructive', 'secondary', 'ghost', 'link', 'icon'],
    },
    size: {
      control: 'radio',
      options: ['default', 'xs', 'sm', 'lg', 'icon', 'icon-xs', 'icon-sm', 'icon-lg'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Buttons: Story = {
  args: {
    variant: 'default',
    effect: "shineHover",
    size: 'default',
    children: 'Press me',
    asChild: false,
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-6">

      <section className="flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Variants</p>
        <div className="flex flex-wrap gap-3 items-center">
          <Button variant="default">Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="icon" size = "icon"><Moon size={14} strokeWidth={2.5} /></Button>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Effects</p>
        <div className="flex flex-wrap gap-3 items-center">
          <Button variant="default" effect="shineHover">Shine Hover</Button>
          <Button variant="navigation" effect="hoverUnderline">Hover Underline</Button>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Sizes</p>
        <div className="flex flex-wrap gap-3 items-center">
          <Button size="xs">XSmall</Button>
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

    </div>
  ),
}