// Modules
import React from "react";
import { Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

// icons
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

// interfaces
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface Activity {
  id: number;
  logo: IconProp;
  title: string;
  date: string;
  balanceChange: number;
}

const RecentActivity: React.FC = () => {
  const Activity: Activity[] = [
    {
      id: 1,
      logo: faCoffee,
      title: "faCoffee",
      date: "2020-01-01",
      balanceChange: -100,
    },
    {
      id: 2,
      logo: faCoffee,
      title: "faCoffee",
      date: "2022-01-01",
      balanceChange: 140,
    },
    {
      id: 3,
      logo: faCoffee,
      title: "faCoffee",
      date: "2024-01-01",
      balanceChange: -100,
    },
    {
      id: 4,
      logo: faCoffee,
      title: "faCoffee",
      date: "2026-01-01",
      balanceChange: 140,
    },
    {
      id: 5,
      logo: faCoffee,
      title: "faCoffee",
      date: "2028-01-01",
      balanceChange: -100,
    },
    {
      id: 6,
      logo: faCoffee,
      title: "faCoffee",
      date: "2030-01-01",
      balanceChange: 140,
    },
    {
      id: 7,
      logo: faCoffee,
      title: "faCoffee",
      date: "2032-01-01",
      balanceChange: -100,
    },
  ];

  return (
    <div className="RecentActivityContainer ">
      <div className="d-flex justify-content-between mb-2">
        <h3 className="">Recent Activity</h3>
        <Link to="/dashboard/new-activity">
          <Button variant="primary">
            <FontAwesomeIcon icon={faPlus} /> New Transaction
          </Button>
        </Link>
      </div>

      <Card className="py-4">
        {Activity.slice(0, 5).map((item: any) => {
          return (
            <Card.Body
              key={item.id}
              className="d-flex justify-content-around flex-wrap"
            >
              <div className="d-flex justify-content-center">
                {/* logo */}
                <div className="logoContainer">
                  <FontAwesomeIcon icon={item.logo} />
                </div>

                <div>
                  {/* title */}
                  <Card.Text>{item.title}</Card.Text>

                  {/* time */}
                  <Card.Text className="secondary-text">{item.date}</Card.Text>
                </div>
              </div>
              {/* Balance change made */}
              <Card.Text
                className={
                  item.balanceChange > 0 ? "success-text" : "danger-text"
                }
              >
                <p>$ {item.balanceChange} USD</p>
              </Card.Text>
            </Card.Body>
          );
        })}
      </Card>
    </div>
  );
};

export default RecentActivity;
