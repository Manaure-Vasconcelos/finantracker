import { Outlet } from "react-router-dom";
import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";

function Navigation() {
  return (
    <div className='flex flex-col md:flex-row'>
      <NavDesktop />
      <Outlet />
      <NavMobile />
    </div>
  );
}

export default Navigation;
