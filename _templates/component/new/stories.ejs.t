---
to: src/components/<%= h.changeCase.paramCase(title)%>/<%= title%>.stories.tsx
---
import React from 'react';
import {Story, Meta} from '@storybook/react';

import {default as <%= title%>, Props} from './<%= title%>';

export default {
    title: 'Site/<%= title%>',
    component: <%= title%>
} as Meta;

const Template: Story<Props> = (args) => <<%= title%> {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};