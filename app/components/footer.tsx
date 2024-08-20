import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
export default function Footer(){
  return(
    <div>
    <footer className="footer footer-center bg-primary text-primary-content p-10">
  <aside className="grid-flow-col items-center">
    <Image 
    src="/AI-Buddy.png"
    width={90}
    height={90}
    alt="Logo"
    />
    <p>Copyright © {new Date().getFullYear()} - All right reserved to DevM7mdAli</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a href="https://x.com/DevM7mdAli" target="_blank">
      <FaXTwitter className="w-8 h-8"/>
    </a>
    <a href="https://github.com/DevM7mdAli" target="_blank">
      <FaGithub className="w-8 h-8"/>
    </a>
  </nav>
</footer>
    </div>
  )
}