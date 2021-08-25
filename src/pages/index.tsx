import Head from "next/head";

import { BlogPost } from "../@types/blogpost";
import { ProjectPost } from "../@types/projectpost";
import About from "../components/About";
import styles from "../styles/Home.module.scss";

import type { GetStaticProps, NextPage } from "next";
export interface HomeProps {
  blogPosts: BlogPost[];
  projectPosts: ProjectPost[];
}

const getBlogPosts = async (): Promise<BlogPost[]> => {
  const posts = await fetch(`http://localhost:1337/blog-posts`);
  const jsonPosts = await posts.json();
  return jsonPosts;
};

const getProjectPosts = async (): Promise<ProjectPost[]> => {
  const posts = await fetch(`http://localhost:1337/projects`);
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
        <About />
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (content) => {
  const blogPosts = await getBlogPosts();
  const projectPosts = await getProjectPosts();

  return { props: { blogPosts, projectPosts } };
};
