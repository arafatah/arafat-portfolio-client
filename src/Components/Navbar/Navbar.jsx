import React from "react";
import { DiCssdeck } from "react-icons/di";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const NavLink = (
    <>
      <li>
        <Link>Projects</Link>
      </li>
      <li>
        <Link>technologies</Link>
      </li>
      <li>
        <Link>About</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {NavLink}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          < DiCssdeck  className="text-2xl"/> <span>Arafat Portfolio</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{NavLink}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex gap-5">
            <a className="text-2xl" href="https://github.com/arafatah"><FaGithub /></a>
            <a className="text-2xl" href="https://www.linkedin.com/in/md-arafat-howlader-688a39183/"><FaLinkedin /></a>
          
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
