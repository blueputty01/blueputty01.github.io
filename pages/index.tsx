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
          This site is a work in progress. Please be patient as content and
          functionality is added.
        </i>
      </p>
      <section>
        <h1 className={utilStyles.headingXl}>Gallery</h1>
        <p>Here's some of my recent work:</p>
        <Project
          desc="Saves tabs for later"
          imgSrc="/images/tabs-aside/icon-128.png"
          href="https://chrome.google.com/webstore/detail/tabs-aside/nboikgnmjgjcnnhencinblbaikdccdlb?hl=en"
        >
          Tabs Aside
        </Project>
        <Project
          desc="Coming soon: Integrates Google Forms quizzes and Google Spreadsheets for quick review"
          imgSrc="/images/form-octopus/icon-128.png"
          href="/forms"
        >
          Form Octopus
        </Project>
        <Project
          desc="Custom built on Next.js"
          imgSrc="/images/profile.png"
          href="/"
        >
          This site
        </Project>
        <Project
          desc="...and more on my GitHub"
          imgSrc="/images/github/icon-128.png"
          href="https://github.com/blueputty01"
        ></Project>
      </section>
    </Layout>
  );
}
