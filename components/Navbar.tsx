import logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="flex justify-between items-center px-2 h-12 bg-gray-100 text-black shadow-sm font-mono"
      role="navigation"
    >
      <Link href="/">
        <Image
          placeholder="empty"
          priority
          src={logo}
          width={40}
          height={40}
          alt="Logo"
        />
      </Link>
    </nav>
  );
}
