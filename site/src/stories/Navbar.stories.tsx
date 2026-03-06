import type { Meta, StoryObj } from '@storybook/react'
import { Navbar } from '../components/Navbar'
import '../index.css'

const meta: Meta<typeof Navbar> = {
  title: 'Navbar',
  component: Navbar,
}

export default meta
type Story = StoryObj<typeof Navbar>

export const Default: Story = {
  render: () => {
    
    return (
      <div className="bg-background min-h-24">
        <Navbar />
      </div>
    )
  },
}