import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Title from "../../components/Title";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Layout/Title",
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => (
  <Title color={args.color} fontWeight={args.fontWeight}>
    {args.children}
  </Title>
);

export const Primary = Template.bind({});

export const Secondary = Template.bind({});

Primary.args = {
  color: "black",
  fontWeight: "400",
  children: "Texto contido",
};

Secondary.args = {
  color: "green",
  fontWeight: "600",
  children: "Texto contido",
};
