import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>Test Page</h1>
      <p>lorem ipsum</p>
    </Layout>
  );
}
