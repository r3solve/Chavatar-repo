import React from "react";
import { Inter, Sen } from "next/font/google";
import SideBar from "./ui/components/SideBar/SideBar";
import TopNav from "./utils/ui/top-nav";
import { Mic, Send } from "lucide-react";
import Logo from "./ui/components/logo/Logo";
const interFonts = Inter({
  subsets: ["latin"], // Specify subsets if needed
  weight: "400",
  style: "normal",
  variable: "--font-inter", // This is fine for CSS variables
});

export default function Page() {
  return (
    <div className="w-full h-full flex justify-center flex-col mx-4 lg:mx-40 flex-shrink items-center">
      <div className="text-4xl tracking-wider text-center text-lint my-4">
        Connect with your favourite characters
      </div>
      <div className="text-area flex-col flex  bg-border w-full mx-4 lg:mx-40 h-44 rounded-lg ">
        <textarea
          className="bg-border text-lg p-4 textarea rounded-lg text-white border-none focus:outline-none  focus:ring-0 h-32 w-full"
          placeholder="Ask me something..."
        ></textarea>
        <div className="w-full border-t-2 border-t-[#222222] p-2 space-x-2 flex flex-row">
          <div className="ml-auto space-x-2">
            <button className="btn rounded-full btn-sm">
              <Mic size={18} />
            </button>
            <button className="btn rounded-full btn-sm">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
