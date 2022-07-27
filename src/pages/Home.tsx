import React from "react";
import Chart from "./../components/Chart";
import RecentActivity from "./../components/RecentActivity";
import TotalBalance from "./../components/TotalBalance";
const Home: React.FC = () => {
  return (
    <>
      {/* <h1>Home</h1> */}
      <div className="d-flex justify-content-center">
        <div className="BalanceActivityContainer">
          <TotalBalance />
          <Chart />
        </div>
        <RecentActivity />
      </div>
    </>
  );
};

export default Home;
