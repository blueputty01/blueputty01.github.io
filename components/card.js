import styles from "./card.module.css";

export default function Project({ children, imgSrc, desc }) {
  return (
    <section className={styles.card}>
      <img src={imgSrc} alt="project icon" className={styles.thumb} />
      <div className={styles.container}>
        <h2 className={styles.heading}>{children}</h2>
        <p className={styles.desc}>{desc}</p>
      </div>
      <p className={styles.arrow}>▶</p>
    </section>
  );
}
