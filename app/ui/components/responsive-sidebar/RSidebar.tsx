
import clsx from "clsx";
import { AlignJustify, EarthIcon, Library, MessageSquare, Plus, Settings2} from "lucide-react";
import Logo from "../logo/Logo";
import Link from "next/link";

const navItems = [

]

export default function RSidebar() {
  return (
    <div
      className={clsx(
        "drawer lg:drawer-open transition-all relative ",
        true ? "w-72" : "w-20"
      )}
    >
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col ">
        {/* Page content here */}
        <label htmlFor="my-drawer-2" className="  drawer-button lg:hidden">
          <AlignJustify size={30} className="m-2 " />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className=" bg-black text-white   min-h-full w-64 p-4">
          {/* Sidebar content here */}
          <Logo />
          
            <Link
              href={"/c/new"}
              className="w-36 btn hover:text-border  text-white mx-4 h-12 hover:shadow-md transition-all hover:shadow-[#fcaa67]  bg-[#1b1b1b] rounded-full justify-center border items-center  border-[#1b1b1b]  flex flex-row"
            >
              <Plus className="text-lint" />
              <span className="text-lg">Create</span>
            </Link>
          
          <div className="w-full my-4  h-1/2 px-4">
            
              <Link
                href="/c"
                className="flex hover:bg-[#1a1a1a] items-center   flex-row h-12 rounded-xl p-2 space-x-3"
              >
                <MessageSquare strokeWidth={1.2} />
                <span className=" text-base mx-4">New Chat</span>
              </Link>
            

           
              <Link
                href="/discover"
                className="flex hover:bg-[#1a1a1a] items-center   flex-row h-12 rounded-xl p-2 space-x-3"
              >
                <EarthIcon strokeWidth={1.2} />
                <span className=" text-base mx-4">Discover</span>
              </Link>
            

            
              <Link
                href="/history"
                className="flex hover:bg-[#1a1a1a] items-center   flex-row h-12 rounded-xl p-2 space-x-3"
              >
                <Library  />
                <span className=" text-base mx-4">Library</span>
              </Link>
            
          </div>

          {/*Lower part of the side bar */}

          <div className=" border-t-[0.01px] p-4 border-t-[#202020]">
            <div className="dropdown dropdown-right dropdown-top">
              <div
                tabIndex={0}
                role=" "
                className="hover:cursor-pointer items-center flex flex-row space-x-2 m-1"
              >
                <Settings2 />
                <span>Settings</span>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-border rounded-md z-[1] w-52 p-2 shadow"
              >
                <li>
                  <Link href={"/settings/profile"}>Profile</Link>
                </li>
                <li>
                  <Link href={"/settings/account"}>Account</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
