const { dayAt } = require("../../src/utils");

const items = [];

for (let i = 0; i < 7; i++) {
  items.push({
    day: i,
    type: "FULL_DAY",
    name: dayAt(i),
  });
}

module.exports = items;