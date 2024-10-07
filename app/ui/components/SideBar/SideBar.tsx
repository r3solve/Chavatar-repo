'use client'

import Logo from "../logo/Logo";
import { ArrowLeftToLine,
    Compass,
    ArchiveIcon,
    Plus,
    Settings2,
    Library,
    MessageSquareDashed

} from "lucide-react";
import NavItems from "../nav-items/nav-items";
import { MenuItem } from "@/app/utils/typedefinitions";

import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";

export const items: MenuItem[] = [
  {
    name: "Chat",
    logo: <MessageSquareDashed strokeWidth={2} size={25} />,
    href: "/c",
  },
  { name: "Discover", logo: <Compass size={25} />, href: "/discover" },
  { name: "History", logo: <Library size={25} />, href: "/history" },
];

export const secondaryItems: MenuItem[] = [
  { name: "Settings", logo: <Settings2 />, href: "settings" },
];

export default function SideBar() {
    const [IsOpen, setIsOpen] = useState(true)
    
 
  return (
    <nav
      className={clsx(
        "transition-all hidden lg:flex space-y-3 delay-0 duration-150 h-screen bg-black border-r-[0.04px] flex-col border-r-[#202020]",
        [IsOpen ? "w-72" : "w-18"]
      )}
    >
      <>
        <div className="w-full flex items-center flex-row">
          {IsOpen && (
            <>
              <Logo />
              <ArrowLeftToLine
                onClick={() => setIsOpen(false)}
                className="mx-4 rounded-full hover:bg-[#2e2e2e] hover:cursor-pointer"
                size={30}
              />
            </>
          )}
        </div>
        {IsOpen ? (
          <Link
            href={"/c/new"}
            className="w-36 btn hover:text-border  text-white ml-10 h-12 hover:shadow-md transition-all hover:shadow-[#fcaa67]  bg-[#1b1b1b] rounded-full justify-center border items-center  border-[#1b1b1b]  flex flex-row"
          >
            <Plus className="text-lint" />
            
            <span className="text-lg">Create</span>
          </Link>
        ): (
          <Link className="mx-auto btn border-none bg-border rounded-full" href={'/c/new'}>
            <Plus size={30} className="text-lint " />
          </Link>
        )}
        <div className="w-full  h-1/2 px-4">
          <NavItems onlyIcons={IsOpen} items={items} />
        </div>
        <div className=" border-t-[0.01px] p-4 border-t-[#202020]">
          <div className="dropdown dropdown-right dropdown-top">
            <div tabIndex={0} role=" " className="hover:cursor-pointer items-center flex flex-row space-x-2 m-1">
              <Settings2 />
              {IsOpen && (

              <span>
                Settings

              </span>
              )}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-border rounded-md z-[1] w-52 p-2 shadow"
            >
              <li>
                <Link href={'/settings/profile'}>Profile</Link>
              </li>
              <li>
                <Link href={'/settings/account'}>Account</Link>
              </li>
            </ul>
          </div>
        </div>
      </>
    </nav>
  );
}
