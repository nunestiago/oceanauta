import Image from "next/image";
import Link from "next/link";
import React from "react";

import Logo from "../assets/navLogo.svg";
import styles from "../styles/Navbar.module.scss";

function Navbar() {
  return (
    <div className={styles.navContainer}>
      <Image src={Logo} alt="Logo Oceanautas" />
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/portfolio">
        <a>Portfólio</a>
      </Link>
      <Link href="/servicos">
        <a>Serviços</a>
      </Link>
      <Link href="/contato">
        <a>Contato</a>
      </Link>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
    </div>
  );
}

export default Navbar;
