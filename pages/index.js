import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Project from "../components/card";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <p>
        <i>
          This site is a work in progress. Please be patient as content is
          added.
        </i>
      </p>
      <section>
        <h1 className={utilStyles.headingXl}>Gallery</h1>
        <p>Here's some of my recent work:</p>
        <Project
          desc="Saves tabs for later"
          imgSrc="/images/project-thumbs/tabs-aside-128.png"
          href=""
        >
          Tabs Aside
        </Project>
        <Project
          desc="Coming soon: Integrates Google Forms quizzes and Google Spreadsheets for quick review"
          imgSrc="/images/project-thumbs/forms-128.png"
          href=""
        >
          Form Octopus
        </Project>
        <Project
          desc="Custom built on Next.js"
          imgSrc="/images/profile.png"
          href="/"
        >
          This website
        </Project>
      </section>
    </Layout>
  );
}
