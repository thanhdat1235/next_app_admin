import React from "react";

export const Header = () => {
  return (
    <>
      <div className="header h-20 bg-gradient-to-r from-indigo-500 flex items-center px-4 lg:px-0">
        <nav className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <div className="flex">
            <div className="w-12 mr-8">
              <a href="/">
                <img
                  className="rounded-full"
                  src="/img/1000_F_245411630_tAL4umzMTgyIt7DbmCK67Jtq338jyWUh.jpg"
                  alt="logo"
                />
              </a>
            </div>
            <div className="name_logo">
              <a href="/">
                <h1 className="text-2xl font-bold">Writers</h1>
                <p className="text-lg font-normal">Your Tagline Here</p>
              </a>
            </div>
          </div>
          <ul className="hidden xl:flex">
            <li className="px-3 text-black hover:text-blue-500 hover:underline">
              <a className="font-semibold text-xl" href="#">
                Home
              </a>
            </li>
            <li className="px-3 text-black hover:text-blue-500 hover:underline">
              <a className="font-semibold text-xl" href="#">
                About Instructor
              </a>
            </li>
            <li className="px-3 text-black hover:text-blue-500 hover:underline">
              <a className="font-semibold text-xl" href="#">
                His Courses
              </a>
            </li>
            <li className="px-3 text-black hover:text-blue-500 hover:underline">
              <a className="font-semibold text-xl" href="#">
                Skills Courses
              </a>
            </li>
            <li className="px-3 text-black hover:text-blue-500 hover:underline">
              <a className="font-semibold text-xl" href="#">
                Objectives Courses
              </a>
            </li>
            <li className="pl-3 text-black hover:text-blue-500 hover:underline">
              <a className="font-semibold text-xl" href="#">
                Contact Instructor
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
