import { navLinks } from "../Constants"
import { logo } from "../assets/images"


const Nav = () => {
    return (
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className="flex justify-between items-center">
                <a href="/">
                    <img
                        src={logo}
                        alt="FITFLEX"
                        width={129}
                        height={30}
                        className="m-0 w-[210px] h-[75px]"
                    />
                </a>


                <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map((link) => (
                        <li key={link.label} >
                            <a
                                href={link.href}
                                className="font-montserrat text-slate-gray leading-normal text-lg"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

        </header>
    )
}

export default Nav