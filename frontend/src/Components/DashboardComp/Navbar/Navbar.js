import React, { useState, useEffect } from "react";
import classes from "./Navbar.module.css";
import {
  Form,
  FormControl,
  Button,
  InputGroup,
  Dropdown,
} from "react-bootstrap";

import {
  Cart,
  PersonCircle,
  Bell,
  List,
  Envelope,
  Inbox,
} from "react-bootstrap-icons";

export default function DashboardNav({ handleMenu }) {
  const logoutHandler = () => {
    //
  };

  return (
    <div className={`shadow ${classes.header}`}>
      <List
        className={`${classes.sideBar} ${classes.icon}`}
        onClick={handleMenu}
      />
      <Form className={classes.search}>
        <InputGroup>
          <FormControl placeholder="Search" />
          <Button variant="primary" id="button-addon2">
            Search
          </Button>
        </InputGroup>
      </Form>
      <div className="d-flex">
        <Bell className={`${classes.icon} mx-3`} />
        <Cart className={`${classes.icon} mx-3`} />
        <Dropdown>
          <Dropdown.Toggle
            className={classes.dropDown}
            variant="success"
            id="dropdown-basic"
          >
            <PersonCircle className="me-2" />
            user Name
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              href="/admin/profile"
              className={classes.dropDownItem}
            >
              Profile
            </Dropdown.Item>
            <Dropdown.Item
              href="/"
              className={classes.dropDownItem}
              onClick={logoutHandler}
            >
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}
