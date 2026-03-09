import type { Meta, StoryObj } from '@storybook/react'
import { HeroSection } from '../components/HeroSection'
import { Button } from '../components/ui/Button'
import { ArrowRight } from 'lucide-react'
import '../index.css'

const meta: Meta<typeof HeroSection> = {
  title: 'HeroSection',
  component: HeroSection,
  argTypes: {
    eyebrow: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
  }
}

export default meta
type Story = StoryObj<typeof HeroSection>

export const TitleOnly: Story = {
  args: {
    title: 'About Us',
  }
}

export const WithEyebrow: Story = {
  args: {
    eyebrow: 'Who we are',
    title: 'About Us',
  }
}

export const WithDescription: Story = {
  args: {
    eyebrow: 'Who we are',
    title: 'About Us',
    description: 'We are a small team of developers and designers building high-performance, conversion-focused websites for small businesses, startups, and creators.',
  }
}

export const WithChildren: Story = {
  render: () => (
    <HeroSection
      eyebrow="Who we are"
      title="About Us"
      description="We are a small team of developers and designers building high-performance websites."
    >
      <Button variant="default" className="mt-8" asChild>
        <a href="#contact">
          Get in touch
          <ArrowRight size={14} strokeWidth={2.5} />
        </a>
      </Button>
    </HeroSection>
  )
}