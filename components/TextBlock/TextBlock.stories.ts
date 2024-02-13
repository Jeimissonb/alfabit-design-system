import { Meta, StoryObj } from "@storybook/react";

import { TextBlock, TextBlockProps } from "./TextBlock";

const meta: Meta<TextBlockProps> = {
  title: "Molecules/TextBlock",
  component: TextBlock,
  argTypes: {
    disabled: { type: "boolean" },
  },
};

export default meta;

export const Primary: StoryObj<TextBlockProps> = {
  args: {
    value: "TextBlock",
  },
};

export const PrimaryDisabled: StoryObj<TextBlockProps> = {
  args: {
    value: "TextBlock",
    disabled: true,
  },
};

export const PrimaryLabel: StoryObj<TextBlockProps> = {
  args: {
    value: "TextBlock",
    label: "Label of TextBlock",
  },
};

export const PrimaryLabelDisabled: StoryObj<TextBlockProps> = {
  args: {
    value: "TextBlock",
    label: "Label of TextBlock",
    disabled: true,
  },
};
