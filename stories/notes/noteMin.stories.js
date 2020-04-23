import React from "react";
import MinNote from "../../components/notes/minNote";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export default {
  title: "Nota Miniatura",
  component: MinNote,
  decorators: [withKnobs],
};

const colors = [
  "Primary",
  "Secondary",
  "Success",
  "Danger",
  "Warning",
  "Info",
  "Light",
  "Dark",
];

const color = colors[Math.floor(Math.random() * colors.length)];

export const navBar = () => (
  <MinNote
    note="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    title="this is a title"
    key={1}
    color={color}
    handleClick={action("open note")}
  />
);

navBar.story = {
  name: "Normal",
};
