import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import clsx from "clsx";

import { useSelector } from "react-redux";

const authLinks = [
  {
    name: "Challenges",
    to: "challenges",
  },
  {
    name: "Leaderboard",
    to: "leaderboard",
  },
  {
    name: "Knowledge base",
    to: "knowledge",
  },
  {
    name: "Logout",
    to: "logout",
  },
];

function Navbar() {
  const [menu, setMenu] = useState(false);
  const location = useLocation();

  const token = useSelector((state) => state.auth.token);

  const links = token ? authLinks : [];

  return (
    <div className={clsx(styles.root, [menu && styles.active])}>
      <h2>
        <Link to="/">ETH Quiz</Link>
      </h2>
      <div className={styles.links}>
        {links.map((link, i) => (
          <Link
            key={`nav-link-${i}`}
            onClick={() => setMenu(false)}
            to={link.to}
            className={clsx(
              location.pathname.substr(1) === link.to && styles.activeLink
            )}
          >
            {link.name}
          </Link>
        ))}
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
