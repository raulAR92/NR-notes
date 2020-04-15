import React from "react";
import NotesNavBar from "../components/notesNavbar";
import menuItems from "../constantants/menuItems";

export default {
  title: "Navbar",
  component: NotesNavBar,
};

export const navBar = () => (
  <NotesNavBar menuItems={menuItems} username="Raul" />
);

navBar.story = {
  name: "populated",
};

export const emptyNavBar = () => <NotesNavBar username="Raul" />;

emptyNavBar.story = {
  name: "empty",
};

export const noUsernameNB = () => <NotesNavBar />;

noUsernameNB.story = {
  name: "No username",
};
