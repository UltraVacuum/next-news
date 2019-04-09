import React from "react";

import "./index.scss";

export default function Footer() {
  const now = new Date(Date.now());
  const year = now.getFullYear();
  return (
    <footer className="main-footer">
      <nav className="container navbar text-center">
        <span className="nav-link" href="#">
          Next-News @2013-{year}
        </span>
      </nav>
    </footer>
  );
}
