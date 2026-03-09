import type { Meta, StoryObj } from '@storybook/react'
import { MediaCard } from '../components/MediaCard'
import Showcase1 from '../assets/project-showcase-1.jpg?w=400;800;1200;1600&format=avif;webp;jpg&as=picture'
import Showcase2 from '../assets/project-showcase-2.jpg?w=400;800;1200;1600&format=avif;webp;jpg&as=picture'
import '../index.css'

const meta: Meta<typeof MediaCard> = {
  title: 'MediaCard',
  component: MediaCard,
}

export default meta
type Story = StoryObj<typeof MediaCard>

export const Default: Story = {
  render: () => (
    <MediaCard
      title="Project Title"
      description="A brief description of the project, what it does, and what results it achieved."
      href="https://example.com"
      image={{
        picture: Showcase1,
        alt: "test"
      }}
    />
  )
}

export const Reversed: Story = {
  render: () => (
    <MediaCard
      title="Project Title"
      description="A brief description of the project, what it does, and what results it achieved."
      href="https://example.com"
      reverse
      image={{
        picture: Showcase2,
        alt: "Showcase project screenshot",
      }}
    />
  )
}