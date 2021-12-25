import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Home() {
  function Project({ children }) {
    return (
      <section>
        <h2 className={utilStyles.headingLg}>{children}</h2>
      </section>
    );
  }

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <p>
        <i>This site is a work in progress. Please check back later.</i>
      </p>
      <section>
        <h1 className={utilStyles.headingXl}>Gallery</h1>
        <Project>Form Butler</Project>
        <Project>Tabs Aside</Project>
      </section>
    </Layout>
  );
}
