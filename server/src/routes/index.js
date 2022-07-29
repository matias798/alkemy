var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/activities", function (req, res, next) {
  const activity = [
    {
      title: "Activity 1",
      id: 1,
      logo: "IconProp",
      date: "01/01/2019",
      balanceChange: 3,
    },
    {
      title: "Activity 2",
      id: 2,
      logo: "IconProp",
      date: "01/01/2019",
      balanceChange: 3,
    },
  ];

  res.json({
    status: "success",
    data: activity,
  });
});
module.exports = router;
