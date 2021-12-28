import Head from "next/head";
import Layout from "../components/layout";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>About and Contact Me</title>
      </Head>
      <h1 className={utilStyles.headingXl}>About and Contact Me</h1>
      <p>
        Hi there! I'm blueputty01. Here's where I can be found on the internet:
      </p>
      <Link href="https://github.com/blueputty01">
        <button>
          <img
            src="/images/github/icon-128.png"
            alt="GitHub Logo"
            width="30px"
            className="bob"
          />
        </button>
      </Link>
      <br />
      <Link href="mailto:blueputty01@gmail.com">
        blueputty01 [at] gmail.com
      </Link>
    </Layout>
  );
}
