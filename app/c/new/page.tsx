"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Avatar from "@/app/ui/components/avatar/Avatar";
import { useForm } from "react-hook-form";
export default function Page() {
    const {register, handleSubmit, reset, formState:{errors}} = useForm()
    const [avatarName, setAvatarName] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [fileName, setFileName] = useState("No file selected");

   const handleChangesSaved = (e) => {
     // Handle form submission logic here
     console.log(e);
   };


  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("No file selected");
    }
  };

  return (
    <div className="w-full  lg:p-4 flex justify-center overflow-y-auto">
      <Link className="self-start m-4" href={"/c"}>
        <ArrowLeft strokeWidth={1.2} className="" />
      </Link>
      <div className="lg:w-[70%] sm:w-full mt-20">
        <form className="w-full" onSubmit={handleSubmit(handleChangesSaved)}>
          <div className="w-full flex flex-row space-x-4 items-center">
            <div className="avatar ">
              <div className="w-24 rounded">
                <img
                  className="rounded-full"
                  src="https://static.vecteezy.com/system/resources/thumbnails/022/470/618/small_2x/anime-boy-avatar-ai-generative-art-photo.jpg"
                />
              </div>
            </div>
            <div>
              <label htmlFor="file-upload" className="custom-file-upload">
                <div className="cursor-pointer bg-black transition-all duration-700 text-white py-2 px-4 rounded">
                  Upload Image
                </div>
              </label>
              <input
              {...register('profile')}
                id="file-upload"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: "none" }} // Hide the default input
              />
              {/* <p className="mt-2 text-gray-600">{fileName}</p> */}
            </div>
          </div>
          <div className="relative mb-6">
            <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
              Chavatar Name
              <svg
                width="7"
                height="7"
                className="ml-1"
                viewBox="0 0 7 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                  fill="#EF4444"
                />
              </svg>
            </label>
            <input
              type="text"
              {...register('name')}
              onChange={(e) => setName(e.target.value)}
              className="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none"
              placeholder="Chavatar Name"
              required
            />
          </div>

          <div className="relative mb-6">
            <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
              Bio
              <svg
                width="7"
                height="7"
                className="ml-1"
                viewBox="0 0 7 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                  fill="#EF4444"
                />
              </svg>
            </label>
            <input
              {...register('bio')}
              type="text"
              className="block  w-full h-11 px-5 py-2.5 leading-7 input-lg input text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none"
              placeholder="I am a chavatar"
              required
            />
          </div>

          <div className="relative mb-6">
            <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
              Behavior
              <svg
                width="7"
                height="7"
                className="ml-1"
                viewBox="0 0 7 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                  fill="#EF4444"
                />
              </svg>
            </label>
            <div className="flex mb-6">
              <div className="relative w-full">
                <textarea
                  
                  {...register('description')}
                  className="block w-full h-40 px-4 py-2.5 text-base leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-2xl placeholder-gray-400 focus:outline-none resize-none"
                  placeholder="Describe your chavatar ..."
                />
              </div>
            </div>

            <div className="relative mb-6">
              <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
                Welcome Tag
                <svg
                  width="7"
                  height="7"
                  className="ml-1"
                  viewBox="0 0 7 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                    fill="#EF4444"
                  />
                </svg>
              </label>
              <input
                type="text"
                {...register('greetings')}
                className="block w-full h-11 px-5 py-2.5 leading-7 input-lg input text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none"
                placeholder="Hello I am chavatar"
                required
              />
            </div>
          </div>

            <button type='submit' className="w-full h-12 bg-black  hover:bg-border transition-all duration-700 rounded-full shadow-xs text-white text-base font-semibold leading-6">
            Deploy
          </button>
        </form>
      </div>
    </div>
  );
}
