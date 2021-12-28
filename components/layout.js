import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const name = "blueputty01";
export const siteTitle = "blueputty01";

export default function Layout({ children, home }) {
  const router = useRouter();
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    // https://reactjs.org/docs/hooks-state.html
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 30);
    });
  }, []);

  function ActiveLink({ children, href, className }) {
    return (
      <li
        className={[router.asPath == href ? styles.active : "", className].join(
          " "
        )}
      >
        <Link href={href}>{children}</Link>
      </li>
    );
  }

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
      <header className={scroll ? styles.shadow : ""}>
        <div className={styles.header}>
          <ul>
            <li>
              <Link href="/">
                <a className={styles.logo}>
                  <img
                    src="/images/profile.png"
                    className={utilStyles.borderCircle}
                    height={30}
                    width={30}
                    alt={name}
                  />
                  <span className={styles.logoText}>{name}</span>
                </a>
              </Link>
            </li>
            <ActiveLink href="/contact" className={styles.push}>
              Contact
            </ActiveLink>
            <ActiveLink href="/privacy">Privacy</ActiveLink>
          </ul>
        </div>
      </header>
      <div className={styles.fadeLeft}></div>
      <div className={styles.fadeRight}></div>
      <main>{children}</main>

      <footer>
        <div className={styles.footerContainer}>
          <div className={styles.col}>
            <Link href="/forms">
              <a>
                <h5>Form Octopus</h5>
              </a>
            </Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
          <div className={styles.col}>
            <h5>Tabs Aside</h5>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
          <div className={styles.col}>
            <h5>Contact</h5>
            <Link href="https://github.com/blueputty01">GitHub</Link>
            <Link href="mailto:blueputty01@gmail.com">Email</Link>
          </div>
        </div>
        <div className={styles.footerContainer}>
          <p>Built with ♥ and ☕.</p>
        </div>
      </footer>
    </div>
  );
}
