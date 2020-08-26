import React from "react";
import "./sidebar.styles.scss";
const SideBar = ({ classname, children }) => {
  return (
    <aside class="sidebar">
      <nav class="nav">
        <ul>
          <li class="active">
            <a href="#">Welcome</a>
          </li>
          <li>
            <a href="#">Who We Are</a>
          </li>
          <li>
            <a href="#">What We Do</a>
          </li>
          <li>
            <a href="#">Get In Touch</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
  //   return <aside className={`sidebar sidebar ${classname}`}>{children}</aside>;
};

export default SideBar;
