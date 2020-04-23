import React from "react";
import Fav from "../components/fav";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export default {
  title: "Favorito",
  component: Fav,
  decorators: [withKnobs],
};

export const fav = () => (
  <Fav isFav={boolean("isFav", true)} handleClick={action("updateState")} />
);

fav.story = {
  name: "Icono",
};
