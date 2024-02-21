"use client";
import styles from "./page.module.css";
import ItemList from "../app/Components/ItemList";
import TotalPriceList from "../app/Components/TotalPriceList";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className= {styles.categories}>Categories</div>
      <div className= {styles.items}>
        <div className={styles.price}>
          <div className={'${styles.section}'}>
            Order
            <ItemList categories={{categories}} />
          </div>
          <div className={'${styles.section} '}>
            <TotalPriceList />
          </div>
        </div>
      </div>
    </div>
  );
}
