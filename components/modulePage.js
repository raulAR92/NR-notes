import React from "react";
import ModuleHead from "./moduleHead";
import NavBar from "./notesNavbar";
import menuItems from "../constantants/menuItems";

export const ModulePage = ({ children }) => (
  <div>
    <ModuleHead></ModuleHead>
    <body>
      <div>
        <NavBar menuItems={menuItems} username="Raul"></NavBar>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="ui-na-main_children">{children}</div>
          </div>
        </div>
      </div>
    </body>
  </div>
);
