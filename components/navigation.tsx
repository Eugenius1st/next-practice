import Link from "next/link";
import styles from "../style/navigation.module.css";
export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>about</Link>
        </li>
        <li>
          <Link href={"/test/123"}>TestId</Link>
        </li>
      </ul>
    </nav>
  );
}
