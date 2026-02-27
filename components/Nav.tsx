const Nav = () => {
    return (
        <nav>
            <ul className="flex gap-5 justify-end pr-4 pt-5 fixed top-0 w-full z-70 text-[#FF7C7C] notable text-xs">
                <li className="hover:text-[#FFC7C7] transition-colors duration-200 cursor-pointer">
                    Projects
                </li>
                |
                <li className="hover:text-[#FFC7C7] transition-colors duration-200 cursor-pointer">
                    Contact
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
