import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "../styles/Layout.module.scss";

function Navbar() {
  return (
    <div className={styles.container}>
      <Link href="/">
        <a>
          <Image
            src="/assets/navLogo.svg"
            alt="Logo Oceanautas"
            width={442}
            height={124}
          />{" "}
        </a>
      </Link>
      <div className={styles.links}>
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
    </div>
  );
}

export default Navbar;
