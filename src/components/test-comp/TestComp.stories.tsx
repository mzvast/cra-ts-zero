import React from 'react';
import {Story, Meta} from '@storybook/react';

import {default as TestComp, Props} from './TestComp';

export default {
    title: 'Site/TestComp',
    component: TestComp
} as Meta;

const Template: Story<Props> = args => <TestComp {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
