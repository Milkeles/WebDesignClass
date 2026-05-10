import type { Meta, StoryObj } from '@storybook/react'
import { VideoEmbed } from '../components/VideoEmbed'
import '../index.css'

const meta: Meta<typeof VideoEmbed> = {
  title: 'YoutubeEmbed',
  component: VideoEmbed,
  argTypes: {
    videoId: { control: 'text' },
    title: { control: 'text' },
    className: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof VideoEmbed>

export const Default: Story = {
  args: {
    videoId: 'DEQZqUq7Z-Y',
    title: 'Fervor Web — Services Overview',
  },
}