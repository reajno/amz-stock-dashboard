import { Link } from "react-router";

function NavBar() {
  return (
    <nav className="flex p-6 items-center h-20 w-screen bg-amber-400 justify-between fixed z-50">
      <Link className="text-2xl font-bold" to={"/"}>
        BNE1 Stock Count Metrics 📝
      </Link>
    </nav>
  );
}
export default NavBar;
