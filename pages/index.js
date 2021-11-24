import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey! I'm blueputty01, and this is my website. Take a look around!</p>
      </section>
      <Link href="posts/first-post">
        <a>Test page</a>
      </Link>
    </Layout>
  );
}
