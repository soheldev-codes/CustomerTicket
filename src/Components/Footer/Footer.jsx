import React from "react";

const Footer = () => {
  return (
    <div className=" bg-black text-white mt-10">
      <footer className="footer sm:footer-horizontal container mx-auto p-10 grid md:grid-cols-12">
        <aside className="col-span-4">
          <a className=" text-xl">CS — Ticket System</a>
          <p>
            A lightweight React ticket management app that allows tracking
            customer issues, updating ticket status, and visualizing progress
            with a clean, responsive UI.
          </p>
        </aside>
        <nav className="col-span-2">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Products & Services</a>
          <a className="link link-hover">Customer Stories</a>
          <a className="link link-hover">Download Apps</a>
        </nav>
        <nav className="col-span-2">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Our Mission</a>
          <a className="link link-hover">Contact Saled</a>
        </nav>
        <nav className="col-span-2">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Join Us</a>
        </nav>
        <nav className="col-span-2">
          <h6 className="footer-title">Social Link</h6>
          <a className="link link-hover">@CS — Ticket System</a>
          <a className="link link-hover">@CS — Ticket System</a>
          <a className="link link-hover">@CS — Ticket System</a>
        </nav>
      </footer>
      <hr className="text-gray-700 my-5  " />
      <p className="bg-black text-center pb-5">
        © 2025 CS — Ticket System. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
