const { weekdayAt } = require("../../src/utils");

const items = [];

for (let i = 0; i < 7; i++) {
  items.push({
    weekday: i,
    type: "FULL_DAY",
    name: weekdayAt(i),
  });
}

module.exports = items;