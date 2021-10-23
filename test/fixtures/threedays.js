const { dayAt } = require("../../src/utils");

const items = [];

for (let i = 1; i < 4; i++) {
  items.push({
    day: i,
    type: "RANGE",
    name: dayAt(i),
    hours: [[800, 1700]],
  });

}

module.exports = items;
