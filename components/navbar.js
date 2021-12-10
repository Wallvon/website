import Link from "next/link";
import {useState} from "react";
import NavLink from "./navlink";

export default function Navbar() {
    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(!active)
    }

    return (
        <>
            <nav className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row">
                <div className="flex">
                    <Link href="/">
                        <a className="flex font-medium items-center mb-4 md:mb-0">
                            <span className="text-2xl font-bold duration-200">Robert S.</span>
                        </a>
                    </Link>
                    <button
                        className="inline-block md:hidden w-8 h-8 text-gray-400 focus:text-white p-1 ml-auto"
                        onClick={handleClick}
                        aria-label="Navigation menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className={`${
                        active ? "flex" : "hidden"
                    }   md:ml-auto md:flex flex-wrap flex-col md:flex-row md:space-x-4 items-center w-full pt-2 md:pt-0 md:w-auto text-lg justify-center font-semibold`}
                >
                    <NavLink href="/">
                        <a className="w-full sm:w-auto flex-none hover:text-white duration-200 text-md py-2 rounded mr-auto mr-0@m">
                            Home
                        </a>
                    </NavLink>
                    <NavLink href="/work">
                        <a className="w-full sm:w-auto flex-none hover:text-white duration-200 text-md py-2 rounded mr-auto mr-0@m">
                            Work
                        </a>
                    </NavLink>
                    <NavLink href="/about">
                        <a className="w-full sm:w-auto flex-none hover:text-white duration-200 text-md py-2 rounded mr-auto mr-0@m">
                            About
                        </a>
                    </NavLink>
                    <NavLink href="/contact">
                        <a className="w-full sm:w-auto flex-none hover:text-white duration-200 text-md py-2 rounded mr-auto mr-0@m">
                            Contact
                        </a>
                    </NavLink>
                </div>
            </nav>
        </>
    )
}
