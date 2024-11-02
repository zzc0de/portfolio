import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed font-Poppins w-full p-8 text-xl flex justify-between px-40 items-center border-b-2 bg-[#f9f5f2]">
      <div>
        <h1 className="font-bold">AzedMuhammad</h1>
      </div>
      <div>
        <ul className="flex space-x-4 ">
          <Link href={"/"}>
            <li>My Work</li>
          </Link>
          <Link href={"/"}>
            <li>About</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
