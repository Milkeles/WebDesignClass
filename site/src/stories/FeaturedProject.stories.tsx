import type { Meta, StoryObj } from '@storybook/react'
import { FeaturedProject } from '../components/FeaturedProject'
import Showcase1 from '../assets/Showcase1.jpg?w=400;800;1200;1600&format=avif;webp;jpg&as=picture'
import Showcase2 from '../assets/Showcase1.jpg?w=400;800;1200;1600&format=avif;webp;jpg&as=picture'
import '../index.css'

const meta: Meta<typeof FeaturedProject> = {
  title: 'FeaturedProject',
  component: FeaturedProject,
}

export default meta
type Story = StoryObj<typeof FeaturedProject>

export const Default: Story = {
  render: () => (
    <FeaturedProject
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
    <FeaturedProject
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