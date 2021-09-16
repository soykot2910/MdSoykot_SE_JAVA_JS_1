import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Sidebar from "../Components/DashboardComp/SideBar/SideBar";
import Navbar from "../Components/DashboardComp/Navbar/Navbar";
import FeaturedInfo from "../Components/FeaturedInfo/FeaturedInfo";
import Chart from "../Components/Chart/Chart";

import { userData } from "../assets/data/dummyData";

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
          <div className="dashboard" style={{ marginTop: "7rem" }}>
            <FeaturedInfo />
            <Chart
              data={userData}
              title="User Analytics"
              grid
              dataKey="Active User"
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
