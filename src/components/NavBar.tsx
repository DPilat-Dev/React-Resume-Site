import Position from "./Position";

const NavBar = () => {
 

  return (
    <nav className={`sticky top-0 w-full px-6 py-4 transition-all duration-300 z-50 bg-gray-800 shadow-lg`}>
      <div className="flex justify-between items-center text-white">
        {/* Left: Name */}
        <a href="#home" className="inline-flex text-[24px] ">David Pilat <Position textSize="text-[24px]" /></a>

        {/* Right: Navigation Links */}
        <div id="Nav" className="flex space-x-6">
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#experience" className="hover:text-gray-300">Experience</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;