import Image from "next/image";
import React from "react";

import styles from "../styles/Layout.module.scss";

function Footer() {
  return (
    <div>
      <Image
        src="/assets/footer3.gif"
        alt="Footer image"
        layout="responsive"
        width={250}
        height={60}
      />
      <footer className={styles.footer}>
        <p>
          Rua Ewerton Visco nº 290 . Condomínio Boulevard Side Empresarial .
          Sala 1001 . Caminho das Árvores . Salvador - Bahia, Brasil . CEP:
          41.820-022
        </p>
        <p>
          Marginal da Avenida Vasco da Gama nº 3743 . Loja 2b . Brotas .
          Salvador - Bahia, Brasil . CEP: 40290-350 © 2020.
        </p>
        <p>Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Footer;
