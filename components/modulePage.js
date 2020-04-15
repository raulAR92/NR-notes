import NavBar from "./notesNavbar";
import menuItems from "../constantants/menuItems";

export default ModulePage = ({ children }) => (
  <div>
    <NavBar menuItems={menuItems} username="Raul"></NavBar>
  </div>
);
