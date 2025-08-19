import { Outlet } from "react-router";
import NavBar from "@/components/NavBar";
function MainLayout() {
  return (
    <>
      <NavBar />
      <div className="pt-20">
        <Outlet />
      </div>
    </>
  );
}
export default MainLayout;
