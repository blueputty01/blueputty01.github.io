import styles from "./card.module.css";
import Link from "next/link";

export default function Project({ children, imgSrc, desc, href }) {
  return (
    <Link href={href}>
      <section className={styles.card}>
        <img src={imgSrc} alt="project icon" className={styles.thumb} />
        <div className={styles.container}>
          <h2 className={styles.heading}>{children}</h2>
          <p className={styles.desc}>{desc}</p>
        </div>
        <p className={styles.arrow}>▶</p>
      </section>
    </Link>
  );
}
