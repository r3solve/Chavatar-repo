
import Link from "next/link";
import SignUpDialogue from "@/app/ui/components/form-diagoue/signup-dialogue";
import LoginDialogue from "@/app/ui/components/form-diagoue/signin-dialgoue";

function TopNav() {
  return (
    <div className="navbar hidden lg:block w-full bg-black border-b border-border ">
      <div className="flex-1">
        <div className="w-10 rounded-full">
          <img
            alt="bot image"
            src="https://gravatar.com/avatar/37d76a8ecfb878fe390130be17bb8edb?s=200&d=identicon&r=pg"
          />
        </div>
      </div>
      <div className="flex-none gap-2">
        <div className="flex flex-row space-x-4 ">
          <button
            className="btn rounded-full h-6 tracking-wider"
            onClick={() => document.getElementById("signup_modal").showModal()}
          >
            Signup
          </button>
          <button
            className="btn rounded-full bg-black
           text-white border-none h-6 hover:bg-border tracking-wider"
          
            onClick={() => document.getElementById("login_modal").showModal()}
          >
            Login
          </button>
          <SignUpDialogue />
          <LoginDialogue />

        </div>
      </div>
    </div>
  );
}

export default TopNav