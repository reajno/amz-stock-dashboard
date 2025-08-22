import { Outlet } from "react-router";
import NavBar from "@/components/NavBar";
import { Toaster } from "@/components/ui/sonner";

function MainLayout() {
  return (
    <>
      <NavBar />
      <div className="pt-20">
        <Outlet />
        <Toaster />
      </div>
    </>
  );
}
export default MainLayout;
