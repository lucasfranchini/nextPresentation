import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { screen, userEvent } from "@storybook/testing-library";

import NewToolForm from "../components/NewToolForm";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Layout/NewToolForm",
  component: NewToolForm,
} as ComponentMeta<typeof NewToolForm>;

const Template: ComponentStory<typeof NewToolForm> = (args) => {
  return <NewToolForm />;
};

export const Primary = Template.bind({});
Primary.play = async () => {
  const name = await screen.findByPlaceholderText("Nome da ferramenta");
  userEvent.type(name, "Teste", { delay: 400 });
};
