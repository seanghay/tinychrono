const { weekdayAt } = require("../../src/utils");

const items = [];

for (let i = 1; i < 4; i++) {
  items.push({
    weekday: i,
    type: "RANGE",
    name: weekdayAt(i),
    hours: [
      [800, 1700]
    ]
  });

}

module.exports = items;
