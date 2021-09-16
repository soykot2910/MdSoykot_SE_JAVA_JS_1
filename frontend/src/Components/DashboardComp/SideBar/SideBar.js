import React from "react";
import classes from "./SideBar.module.css";
import { Columns } from "react-bootstrap-icons";

import Accordion from "../Accordion/Accordion";

import menus from "./data";

const SideBar = () => {
  return (
    <div className={classes.sideBar}>
      <div className="my-3">
        <a
          href="/admin/dashboard"
          className={`${classes.anchorTag} w-100 btn btn-outline-secondary my-1`}
        >
          <Columns className="me-3" />
          Dashboard
        </a>
        <div>
          {menus.map((item) => (
            <Accordion item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
