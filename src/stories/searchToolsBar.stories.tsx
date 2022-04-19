import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import SearchBar from "../components/searchToolsBar/Input";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Layout/SearchBar",
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => {
  return <SearchBar {...args} />;
};

export const Primary = Template.bind({});

Primary.args = {
  fontWeight: "400",
  border: "1px",
  color: "black",
};
