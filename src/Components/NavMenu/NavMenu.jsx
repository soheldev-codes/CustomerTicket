import React from "react";

const NavMenu = () => {
  const NavLinks = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>FAQ</a>
      </li>
      <li>
        <a>Changelog</a>
      </li>
      <li>
        <a>Blog</a>
      </li>
      <li>
        <a>Download</a>
      </li>
      <li>
        <a>Contact</a>
      </li>

      <li>
        <button className="btn text-white font-semibold bg-gradient-to-br from-[#632EE3] to-[#9F62F2]">
          New Ticket
        </button>
      </li>
    </>
  );
  return (
    <div className=" bg-base-100 shadow-sm">
      <div className="navbar container mx-auto">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
            >
              {NavLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">CS — Ticket System</a>
        </div>
        <div className="navbar-end hidden md:flex">
          <ul className="menu menu-horizontal items-center px-1">{NavLinks}</ul>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
