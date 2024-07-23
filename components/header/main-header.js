'use client'
import Link from "next/link";
import classes from "./main-header.module.css";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={Logo} alt="a plate of food" priority />
          Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href={'/meals'}>Meals</NavLink>
            </li>
            <li>
              <NavLink href={'/community'}>Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
