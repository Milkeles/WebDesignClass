import type { Meta, StoryObj } from '@storybook/react'
import { Roadmap } from '../components/Roadmap'
import { Search, Paintbrush, Code, Rocket } from 'lucide-react'
import '../index.css'

const meta: Meta<typeof Roadmap> = {
  title: 'Roadmap',
  component: Roadmap,
}

export default meta
type Story = StoryObj<typeof Roadmap>

const defaultSteps = [
  { number: '01', title: 'Discovery', description: 'We discuss your goals, target audience, and requirements to establish a clear direction for the project.' },
  { number: '02', title: 'Design', description: 'We craft a visual direction aligned with your brand identity, including wireframes and a full UI design.' },
  { number: '03', title: 'Development', description: 'We build your site with clean, performant, and SEO-optimized code using modern technologies.' },
  { number: '04', title: 'Launch', description: 'We deploy your site, run final checks, and hand off everything you need to manage it going forward.' },
]

const iconSteps = [
  { number: '01', icon: <Search size={16} />, title: 'Discovery', description: 'We discuss your goals, target audience, and requirements to establish a clear direction for the project.' },
  { number: '02', icon: <Paintbrush size={16} />, title: 'Design', description: 'We craft a visual direction aligned with your brand identity, including wireframes and a full UI design.' },
  { number: '03', icon: <Code size={16} />, title: 'Development', description: 'We build your site with clean, performant, and SEO-optimized code using modern technologies.' },
  { number: '04', icon: <Rocket size={16} />, title: 'Launch', description: 'We deploy your site, run final checks, and hand off everything you need to manage it going forward.' },
]

export const WithNumbers: Story = {
  render: () => <Roadmap steps={defaultSteps} />
}

export const WithIcons: Story = {
  render: () => <Roadmap steps={iconSteps} />
}