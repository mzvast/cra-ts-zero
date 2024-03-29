---
to: src/pages/<%= h.changeCase.paramCase(title)%>/<%= title%>.tsx
---
/**
 * @file [<%= title%>]
 * @author []
 * @email []
 * @create date <%= h.getDate() %>
 */
import React from 'react';
import {styled, css, keyframes, Box, palette, Flex}  from 'galaco';
interface Props {};
const <%= title%>: React.FC<Props> = () => {
    return <div><%= title%></div>;
}
export default <%= title%>;