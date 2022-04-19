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
  await userEvent.type(name, "Teste", { delay: 100 });
  const link = await screen.findByPlaceholderText("Link");
  await userEvent.type(link, "Teste.com", { delay: 100 });
  const description = await screen.findByPlaceholderText("Descrição");
  await userEvent.type(description, "Teste", { delay: 100 });
  const tags = await screen.findByPlaceholderText(
    "Aperte Enter para adicionar uma tag"
  );
  await userEvent.type(tags, "Teste", { delay: 100 });
  await userEvent.keyboard("{enter}");
};
