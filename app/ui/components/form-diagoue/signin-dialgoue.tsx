import Image from "next/image";
import GoogleLogo from "@/app/images/google.png";
import Link from "next/link";


export default function LoginDialogue() {
  return (
    <dialog id="login_modal" className="modal">
      <div className="modal-box bg-border">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>

        {/* Form content*/}
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2
            className="mt-10 text-center text-2xl font-bold
           leading-9 tracking-tight text-white"
          >
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium 
              leading-6 text-white"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full p-4 rounded-md border-0 py-1.5
                   text-black shadow-sm ring-1 ring-inset ring-gold placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-white hover:text-gold"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full p-4 text-md rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full rounded-xl justify-center  bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:shadow-lint"
              >
                Sign in
              </button>
            </div>
            <div className="text-center ">
              <hr />
              <span className="font-thin">OR</span>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full items-center flex-row rounded-xl justify-center  bg-white text-black px-3 py-1.5 text-sm font-semibold leading-6shadow-sm hover:shadow-lint"
              >
                <Image src={GoogleLogo} width={30} alt="google logo" />
                Continue With Google
              </button>
            </div>
          </form>

        
        </div>
      </div>
    </dialog>
  );
}
