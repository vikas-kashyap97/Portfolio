import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import { Drawer, IconButton } from "@material-tailwind/react";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="h-16 w-full flex items-center justify-between px-5 bg-forth sticky top-0 z-[2000]">
        <Link to={"/"}>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-red-900 bg-clip-text text-transparent">
            Vikas.dev
          </h1>
        </Link>
        <div className="hidden lg:flex flex-col md:flex-row gap-5 pl-5 md:pl-0 md:gap-10 text-md md:text-xl">
          <a href="#about" className="hover:text-blue-500 transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-blue-500 transition-colors">
            Skills
          </a>
          <a href="#project" className="hover:text-blue-500 transition-colors">
            Project
          </a>
          <a href="#contact" className="hover:text-blue-500 transition-colors">
            Contact
          </a>
        </div>

        <Drawer open={open} onClose={() => setOpen(false)} className="bg-forth">
          <div className="mb-2 flex items-center justify-end p-4">
            <IconButton
              variant="text"
              color="white"
              onClick={() => setOpen(false)}
            >
              <RxCross2 size={26} />
            </IconButton>
          </div>

          <div className="flex flex-col" onClick={() => setOpen(false)}>
            <a
              href="#about"
              className="px-5 py-3 text-lg transition-colors hover:bg-blue-500 border-b border-gray-800"
            >
              About
            </a>
            <a
              href="#skills"
              className="px-5 py-3 text-lg transition-colors hover:bg-blue-500 border-b border-gray-800"
            >
              Skills
            </a>
            <a
              href="#project"
              className="px-5 py-3 text-lg transition-colors hover:bg-blue-500 border-b border-gray-800"
            >
              Project
            </a>
            <a
              href="#contact"
              className="px-5 py-3 text-lg transition-colors hover:bg-blue-500 border-b border-gray-800"
            >
              Contact
            </a>
          </div>
        </Drawer>

        <IconButton  variant="text"  className="lg:hidden text-white">

          <FaBars
            size={26}
           
            onClick={() => setOpen(!open)}
            />
            </IconButton>
      </nav>
    </>
  );
};

export default Navbar;
