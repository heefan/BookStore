import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import background from "../public/home/book-bg.png";


export default function Page() {
  return (
    <div className="flex relative flex-col justify-center items-center h-screen">
      <Image
        className="blur-sm"
        alt="Background"
        src={background}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      <div className='p-2 flex flex-col justify-center items-center z-10 bg-purple-100 lg:w-2/5 h-1/4 rounded-md'>
        <SparklesIcon className="h-12 w-12" />
        <p>Book Store</p>
        <div>
          <Link href="/store" className="bg-purple-700 text-white hover:bg-purple-900 p-3 rounded-sm text-lg text mr-2"> TAKE ME TO THE STORE</Link>
        </div>
      </div>
    </div>
  );
}

