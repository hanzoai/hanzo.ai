import { SolutionsContent } from "./SolutionsContent";
import NavMenu from "../NavMenu";

export const SolutionsMenu = () => {
  return (
    <NavMenu label="Solutions">
      {(closeMenu) => (
        <SolutionsContent onCloseMenu={closeMenu} />
      )}
    </NavMenu>
  );
};