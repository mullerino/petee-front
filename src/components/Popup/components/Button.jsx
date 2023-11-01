import { CaretRight } from "@phosphor-icons/react";
import styles from "./Button.module.css";

export function ButtonNext() {
  return (
    <button className={styles.next}>
      <CaretRight size={24} />
    </button>
  );
}
