import React from "react";

const TotalBalance: React.FC = () => {
  return (
    <div className="totalBalanceContainer">
      <h3>Total Balance</h3>
        <div className="TotalBalance">
          <div className="TotalBalance__left">
            <p>$0.00</p>
          </div>
        </div>
    </div>
  );
};

export default TotalBalance;
