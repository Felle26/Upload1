import Navigation from "./Navigation";
import styles from "../styles/layout.module.css";

export default function layout({ children }) {
  return (
    <>
      <Navigation></Navigation>
      <div className={styles.main}>{children}</div>
    </>
  );
}
