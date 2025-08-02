import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import TabButton from './TabButton'

export default {
  title: 'Components/TabButton',
  component: TabButton,
} as Meta

const Template: StoryFn<React.ComponentProps<typeof TabButton>> = (args) => <TabButton {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Best',
  active: false,
  onClick: () => console.log('Tab clicked'),
}
