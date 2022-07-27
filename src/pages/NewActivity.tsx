import React from "react";
// import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Form, Button } from "react-bootstrap";

const NewActivity: React.FC = () => {
  const [Title, setTitle] = React.useState<string>("");
  const [Date, setDate] = React.useState<string>("");
  const [Logo, setLogo] = React.useState<any>();
  const [BalanceChange, setBalanceChange] = React.useState<number>(0);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const handleLogoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogo(event.target.value);
  };

  const handleBalanceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof event.target.value === "string") {
      return;
    }

    setBalanceChange(event.target.value);
  };

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // prevent default action of reloading the page
    event.preventDefault();
    console.log(Title, Date, Logo, BalanceChange);
    // console.log(event.target);
  };

  return (
    <div className="NewActivity">
      <h3 className="text-center mt-5">Create New Activity</h3>

      <Form className="m-5 p-5">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title"
            value={Title}
            onChange={handleTitleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter Date"
            value={Date}
            onChange={handleDateChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Logo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Logo"
            value={Logo}
            onChange={handleLogoChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Balance Change</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Balance Change"
            value={BalanceChange}
            onChange={handleBalanceChange}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="button"
          onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            handleSubmit(event);
          }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default NewActivity;
