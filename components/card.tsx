import styles from "./card.module.css";
import Link from "next/link";

interface ProjectProps {
  children?: React.ReactNode;
  imgSrc?: string;
  desc?: string;
  href?: string;
}

export default function Project(props: ProjectProps) {
  return (
    <Link href={props.href}>
      <a className={styles.card}>
        <img src={props.imgSrc} alt="project icon" className={styles.thumb} />
        <div className={styles.container}>
          <h2 className={styles.heading}>{props.children}</h2>
          <p className={styles.desc}>{props.desc}</p>
        </div>
        <p className={styles.arrow}>▶</p>
      </a>
    </Link>
  );
}
