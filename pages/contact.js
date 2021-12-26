import Head from "next/head";
import Layout from "../components/layout";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";

export default function Contact() {
  return (
    <Layout home>
      <Head>
        <title>About and Contact Me</title>
      </Head>
      <h1 className={utilStyles.headingXl}>About and Contact Me</h1>
      <Link href="https://github.com/blueputty01">
        <img
          src="/images/GitHub-Mark-120px-plus.png"
          alt="GitHub Logo"
          width="30px"
        />
      </Link>
      <br />
      <Link href="mailto:blueputty01@gmail.com">
        [blueputty01 [at] gmail.com]
      </Link>
    </Layout>
  );
}
