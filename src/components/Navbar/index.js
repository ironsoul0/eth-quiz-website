import React, { useState } from "react";
import styles from "./Navbar.module.css";
import clsx from "clsx";

function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <div className={clsx(styles.root, [menu && styles.active])}>
      <h2>Logo</h2>
      <div className={styles.links}>
        <a onClick={() => setMenu(false)} href="#">
          Link 1
        </a>
        <a onClick={() => setMenu(false)} href="#">
          Link 2
        </a>
        <a onClick={() => setMenu(false)} href="#">
          Link 3
        </a>
      </div>
      <div onClick={() => setMenu(!menu)} className={styles.burger}>
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export default Navbar;
