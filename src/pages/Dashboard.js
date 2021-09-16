import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Sidebar from "../Components/DashboardComp/SideBar/SideBar";
import Navbar from "../Components/DashboardComp/Navbar/Navbar";

const Dashboard = () => {
  const [mbl, setMbl] = useState(false);

  const handleMblMenu = () => {
    mbl ? setMbl(false) : setMbl(true);
  };

  const updateDimensions = () => {
    if (window.innerWidth > 768) {
      setMbl(false);
    } else {
      setMbl(true);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return (
    <div className="d-flex">
      <div className="dashboardSibeBar">{mbl ? null : <Sidebar />}</div>
      <div className="menu">
        <Navbar handleMenu={handleMblMenu} />
        <Container>
          <div className="dashboard">
            <h3>helo</h3>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
