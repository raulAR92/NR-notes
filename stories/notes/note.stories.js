import React from "react";
import Note from "../../components/notes/note";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export default {
  title: "Note",
  component: Note,
  decorators: [withKnobs],
};

export const navBar = () => (
  <Note
    note="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    title="this is a title"
    color="black"
    show={boolean("show", true)}
  />
);

navBar.story = {
  name: "Normal",
};
