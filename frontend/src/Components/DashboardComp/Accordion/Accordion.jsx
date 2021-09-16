import React from "react";
import classes from "./accordion.module.css";
import { ChevronRight } from "react-bootstrap-icons";

const Accordion = ({ item }) => {
  return (
    <div>
      <p
        className={`${classes.anchorTag} w-100 btn d-flex justify-content-between align-items-center btn-outline-secondary mb-1`}
      >
        <item.Icon className="me-3" />
        {item.title}
        <ChevronRight style={{ marginLeft: "5rem" }} />
      </p>
    </div>
  );
};

export default Accordion;
