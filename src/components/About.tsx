import Image from "next/image";
import React from "react";

import styles from "../styles/About.module.scss";

function PhonesComp({ phone }: { phone: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {" "}
      <span className={styles.phoneIconContainer}>
        <Image
          src="/assets/phone_icon.svg"
          alt="Logo Oceanautas"
          width={18}
          height={18}
        />
      </span>
      <p className={styles.phoneNumber}>{phone}</p>
    </div>
  );
}

function About() {
  const phones = [
    "(71) 99983-9400",
    "(71) 99988-3658",
    "(71) 99655-5221",
    "(71) 3027-7812",
  ];
  return (
    <div className={styles.container}>
      <div>
        <h2>Sobre a Oceanauta</h2>
        <p>
          A crescente demanda de serviços na área de meio ambiente proporcionou
          a criação da Oceanauta, uma empresa de consultoria ambiental
          especializada para suporte técnico e prestação de serviços em diversos
          setores. A Oceanauta conta com profissionais com alto nível de
          habilitação técnico-científica, adquirida ao longo de 13 anos de
          trabalho em projetos vinculados à instituições públicas e empresas do
          setor ambiental.
        </p>
        <h3>Clique aqui para baixar nosso folder digital.</h3>
        {phones.map((phone) => (
          <PhonesComp key={phone} phone={phone} />
        ))}
      </div>
      <div></div>
    </div>
  );
}

export default About;
