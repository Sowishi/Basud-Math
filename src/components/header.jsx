"use client";

import logo from "../assets/received_1497173757635461-transformed.png";

import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  HiLogin,
  HiOutlineCalendar,
  HiOutlineHome,
  HiOutlineMap,
  HiOutlineRss,
  HiOutlineUser,
  HiOutlineUserCircle,
  HiOutlineUserGroup,
  HiViewBoards,
} from "react-icons/hi";
import { Button, Navbar } from "flowbite-react";

export default function Header() {
  const { pathname } = useLocation();

  return (
    <Navbar fluid rounded className="py-3 shadow-lg">
      <Navbar.Brand className="ml-5">
        <img
          src={logo}
          className="mr-3 h-6 sm:h-9 rounded-xl"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white flex items-center justify-start">
          Learn Math
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 mr-5">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Button.Group>
          <Link to="/home">
            <Button color={pathname == "/home" ? "info" : "gray"}>
              {" "}
              <HiOutlineHome className="mr-2 h-5 w-5" />
              Home
            </Button>
          </Link>
          <Link to="/home">
            <Button color={pathname == "/home" ? "info" : "gray"}>
              {" "}
              <HiOutlineHome className="mr-2 h-5 w-5" />
              Learn
            </Button>
          </Link>
          <Link to="/home">
            <Button color={pathname == "/home" ? "info" : "gray"}>
              {" "}
              <HiOutlineHome className="mr-2 h-5 w-5" />
              About
            </Button>
          </Link>
        </Button.Group>
      </Navbar.Collapse>
    </Navbar>
  );
}
