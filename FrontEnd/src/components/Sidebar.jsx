import { IoDocumentText, IoCart } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-1/5 min-h-screen bg-sidebarBG fixed top-0 left-0 z-10">
      <div className="logo container h-[10vh] border-b border-border flex items-center gap-2">
        <div className="size-10 bg-brand flex justify-center items-center rounded-full">
          <span className="text-white font-semibold text-xl">G</span>
        </div>
        <p className="text-brand font-semibold hidden md:block">Assignment 4 CRUD</p>
      </div>

      <div className="menu mt-10 container">
        <p className="text-text font-normal">List</p>

        <ul className="mt-6">
          <NavLink to="/create-food" className="sidebar-btn">
            <IoCart className="text-[18px]" />
            <span className="hidden md:block">Create Item</span>
          </NavLink>
          <NavLink to="/" className="sidebar-btn">
            <IoDocumentText className="text-[18px]" />
            <span className="hidden md:block">All Item</span>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
