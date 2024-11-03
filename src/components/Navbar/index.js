import { Link } from "react-scroll";

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed font-Poppins w-full p-8 text-xl flex justify-between px-40 items-center border-b-2 bg-[#f9f5f2]">
      <div>
        <Link href={"/"}>
          <h1 className="font-bold">AzedMuhammad</h1>
        </Link>
      </div>
      <div>
        <ul className="flex space-x-4 ">
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link
            to={"project"}
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <li>Projects</li>
          </Link>
          <Link
            to={"experience"}
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <li>Experience</li>
          </Link>
          <Link
            to={"contact"}
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
