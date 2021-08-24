import Head from "next/head";
import Image from "next/image";

import { BlogPost } from "../@types/blogpost";
import { ProjectPost } from "../@types/projectpost";
import styles from "../styles/Home.module.scss";

import type { GetStaticProps, NextPage } from "next";

export interface HomeProps {
  blogPosts: BlogPost[];
  projectPosts: ProjectPost[];
}

const getBlogPosts = async (): Promise<BlogPost[]> => {
  const posts = await fetch(`${process.env.apiAddress}/blog-posts`);
  const jsonPosts = await posts.json();
  return jsonPosts;
};

const getProjectPosts = async (): Promise<ProjectPost[]> => {
  const posts = await fetch(`${process.env.apiAddress}/projects`);
  const jsonPosts = await posts.json();
  return jsonPosts;
};

const Home = ({ blogPosts, projectPosts }: HomeProps) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Oceaunata - Consultoria Ambiental</title>
        <meta
          name="description"
          content="A Oceanauta conta com profissionais com alto nível de habilitação técnico-científica, adquirida ao longo de 13 anos de trabalho em projetos vinculados à instituições públicas e empresas do setor ambiental."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (content) => {
  const blogPosts = await getBlogPosts();
  const projectPosts = await getProjectPosts();

  return { props: { blogPosts, projectPosts } };
};
