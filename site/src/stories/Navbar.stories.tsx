import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Navbar } from '../components/navbar'
import '../index.css'

const meta: Meta<typeof Navbar> = {
  title: 'Navbar',
  component: Navbar,
}

export default meta
type Story = StoryObj<typeof Navbar>

export const Default: Story = {
  render: () => {
    const [dark, setDark] = useState(false)
    return (
      <div className="bg-background min-h-24">
        <Navbar dark={dark} onToggleDark={() => setDark(!dark)} />
      </div>
    )
  },
}