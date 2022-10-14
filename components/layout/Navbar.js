import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classes from './Navbar.module.scss';
import logo from '../../images/FraceLogo.png';

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <Link href="/home-page">
        <a className={classes.logo}>
          <Image src={logo} alt="FraceRecipes logo" />
        </a>
      </Link>
      <ul className={classes.navLinks}>
        <li className="rounded-full p-2 px-3 hover:bg-orange-600">
          <Link href="/meals"> Meals </Link>
        </li>
        <li className="rounded-full p-2 px-3 hover:bg-orange-600">
          <Link href="/saved-meals"> Saved List </Link>
        </li>
        <li className="rounded-full p-2 px-3 hover:bg-orange-600">
          <Link href="/add-recipe">Add a Recipe</Link>
        </li>
        <li className="rounded-full p-2 px-3 hover:bg-orange-600">
          <Link href="/">Log Out</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
