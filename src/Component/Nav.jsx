import { useState, useEffect } from "react";
import { Link,NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isActive, setisActive] = useState(false);

  const openMailbox = () => {
    const email = "mailto:arnabmukherjee58260@gmail.com";
    window.open(email);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setisActive(true) : setisActive(false);
    });
  });

  return (
    <>
      <div
        className={`fixed lg:hidden top-0 w-full items-center  flex justify-between px-4 py-4 ${
          isActive ? "navActive" : ""
        }`}
      >
        <h1 className="text-[20px]  tracking-[5px] font-primary">Arnab</h1>
        <div
          className="cursor-pointer"
          onClick={(e) => {
            setOpen(true);
          }}
        >
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            class="octicon octicon-three-bars Button-visual"
          >
            <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
          </svg>
        </div>
      </div>
      <div
        className={`absolute transition ease-in-out delay-[3s] lg:fixed flex items-center top-0 lg:left-0 bg-white w-full z-[10]  lg:w-[350px] h-full px-[70px] ${
          open ? "left-0" : "left-[-100%]"
        }`}
      >
        <div
          className="absolute lg:hidden top-4 right-4 text-xl cursor-pointer  "
          onClick={(e) => {
            setOpen(false);
          }}
        >
          <svg
            aria-hidden="true"
            height="20"
            viewBox="0 0 16 16"
            version="1.1"
            width="20"
            data-view-component="true"
            className="octicon octicon-x "
          >
            <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
          </svg>
        </div>
        <div className="h-auto">
          <h1 className="text-[31px]  tracking-[5px] font-primary">Arnab</h1>
          <ul className="py-[50px] cursor-pointer flex flex-col gap-3 font-medium  text-[#767676] font-primary  transition-all duration-300">
            <NavLink
              className={({ isActive }) => (isActive ? "text-black" : "")}
              to="/"
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "text-black" : "")}
              to="/about"
            >
              <li>About</li>
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "text-black" : "")}
              to="/portfolio"
            >
              <li>Portfolio</li>
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "text-black" : "")}
              to="/blogs"
            >
              <li>Blog</li>
            </NavLink>
          </ul>
          <div
            className="text-white bg-black w-[100%] py-4 items-center justify-center gap-2 px-4 rounded-sm text-sm font-secondary flex cursor-pointer"
            onClick={openMailbox}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="m7.172 11.334l2.83 1.935l2.728-1.882l6.115 6.033c-.161.052-.333.08-.512.08H1.667c-.22 0-.43-.043-.623-.12l6.128-6.046ZM20 6.376v9.457c0 .247-.054.481-.15.692l-5.994-5.914L20 6.376ZM0 6.429l6.042 4.132l-5.936 5.858A1.663 1.663 0 0 1 0 15.833V6.43ZM18.333 2.5c.92 0 1.667.746 1.667 1.667v.586L9.998 11.648L0 4.81v-.643C0 3.247.746 2.5 1.667 2.5h16.666Z"
              ></path>
            </svg>
            <p>Get in Touch</p>
          </div>
          <div className="flex mt-5 gap-4 justify-end items-center  text-xs  w-full font-primary">
            <Link to="https://www.linkedin.com/in/arnab-mukherjee-20b36221a" className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="#0a66c2"
                class="mercado-match"
                width="16"
                height="16"
                focusable="false"
              >
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
              Linkedin
            </Link>
            <Link to="https://github.com/ArnabMukherjee03" className="flex items-center gap-1">
              <svg
                height="16"
                aria-hidden="true"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="octicon octicon-mark-github v-align-middle color-fg-default"
              >
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
              </svg>
              Github
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
