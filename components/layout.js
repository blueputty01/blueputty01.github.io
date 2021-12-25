import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "blueputty01";
export const siteTitle = "blueputty01";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="blueputty01 personal website" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta
          name="google-site-verification"
          content="J9pzx4gcsh-JI5UnduPTG0qNCudH6hNqODwdtrzdDDw"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <a className={styles.logo}>
            <img
              src="/images/profile.png"
              className={utilStyles.borderCircle}
              height={30}
              width={30}
              alt={name}
            />
            <a className={styles.logoText}>{name}</a>
          </a>
        </Link>
        <Link href="contact">
          <a className={styles.push}>Contact</a>
        </Link>
        <Link href="privacy">Privacy Policy</Link>
        <Link href="terms">Terms of Service</Link>
        <Link href="forms">Form Octopus</Link>
      </header>
      <main>{children}</main>

      <footer>
        Built with ♥ by <Link href="github.com/blueputt01">blueputty01</Link>
        Powered by Next.js (along with ☕)
      </footer>
    </div>
  );
}
