import { lustria, poppins, andika } from "../fonts";
import Link from "next/link";
export default function Logo() {
  return (
    <Link href={'/'} className={"w-full "}>
      <h1 className={`${andika.className} text-2xl m-4 font-bold`}>Chavatar</h1>
    </Link>
  );
}
