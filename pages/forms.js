import Layout from "../components/layout";
import Head from "next/head";

const components = {
  h1: (props) => (
    <h1
      style={{
        fontSize: "calc(1rem + 1.5vw)",
        color: "black",
        margin: "1vh 0 1vh 0",
      }}
      {...props}
    />
  ),

  p: (props) => (
    <p
      style={{
        fontSize: "calc(1rem + 0.1vw)",
        color: "#000000e6",
        margin: "0vh 0 1vh 0",
      }}
      {...props}
    />
  ),
};

export default function Blog() {
  return (
    <Layout>
      <Head>
        <title>Form Octopus</title>
      </Head>
      <div className="blog-content">
        <h1>Form Octopus</h1>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/OGqMW0DycNQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <style jsx>{`
        .blog-content {
          display: flex;
          flex: 100%;
          flex-direction: column;
          width: 50vw;
          max-width: 50vw;
        }
      `}</style>
    </Layout>
  );
}
