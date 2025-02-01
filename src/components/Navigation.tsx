import Link from "next/link";

const NavigationBar = () => <nav className="sticky top-0 z-20 flex flex-row flex-nowrap justify-around items-stretch bg-white/60 backdrop-blur-[4px]">
  <Link href="/" className="flex-grow text-center font-bold p-3 cursor-pointer border-b-4 hover:border-primary-400 hover:text-primary-500 animated-underline">About Me</Link>
  <Link href="/posts" className="flex-grow text-center font-bold p-3 cursor-pointer border-b-4 hover:border-primary-400 hover:text-primary-500 animated-underline">Posts</Link>
  <Link href="/notes" className="flex-grow text-center font-bold p-3 cursor-pointer border-b-4 hover:border-primary-400 hover:text-primary-500 animated-underline">Notes</Link>
</nav>;

export default NavigationBar
