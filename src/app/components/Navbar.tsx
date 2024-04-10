import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <ul className="flex justify-between px-20 py-2">
        <li>
          <Link href="/">
            <span className="text-white cursor-pointer hover:text-gray-300">
              Home
            </span>
          </Link>
        </li>
        <li>
          <Link href="/">
            <span className="text-white cursor-pointer hover:text-gray-300">
              About
            </span>
          </Link>
        </li>
        <li>
          <Link href="/">
            <span className="text-white cursor-pointer hover:text-gray-300">
              Contact
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
