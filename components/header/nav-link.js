import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from './navlink.module.css'
import React from "react";

export default function NavLink({ href, children }) {
   const path =  usePathname()
  return (
    <Link
      href={href}
      className={`${classes.link} ${path.startsWith(href) ? classes.active : undefined}`}
    >
      {children}
    </Link>
  );
}
