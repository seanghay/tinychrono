/**
 * Create an integer range array
 * @param {number} from
 * @param {number} to
 * @returns {number[]}
 */
function createIntRange(from, to) {
  const items = [];
  for (let i = from; i <= to; i++) items.push(i);
  return items;
}

/**
 * Parse Int Range
 * @param {number[]} items
 * @returns {number[]}
 */
function parseIntRange(items) {
  return [Math.min(...items), Math.max(...items)];
}

/**
 * "08:00 AM" -> 800
 * @param {string} value
 * @returns {number}
 */
function encodeMilitaryHour(value) {
  const isAM = value.slice(-2).toUpperCase() === "AM";
  const time = value.slice(0, -1).trim();

  let [hour = '', minute = ''] = time.split(":");

  hour = parseInt(hour.trim()) || 0;
  minute = parseInt(minute.trim()) || 0;

  if (!isAM)
    if (hour === 12) hour = 12;
    else hour += 12;
  else if (hour === 12) hour = 0;

  return hour * 100 + minute;
}

/**
 * 800 -> "08:00 AM"
 * @param {number} value
 * @returns {string}
 */
function decodeMilitaryHour(value, pad = 2) {
  let hour = Math.floor(value / 100);
  let minute = value % 100;

  const isAM = hour < 12;

  if (!isAM) {
    hour -= 12;
  }

  if (hour > 12) hour %= 12;
  if (hour === 0) hour = 12;

  hour = hour.toString().padStart(pad, 0);
  minute = minute.toString().padStart(pad, 0);

  return `${hour}:${minute} ${isAM ? "AM" : "PM"}`;
}

const WEEKDAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

function weekdayAt(index) {
  return WEEKDAYS[index % WEEKDAYS.length]
}

// mode = ['FULL', 'CLOSED', 'RANGE']

const operationTimes = [
  {
    weekday: 0,
    type: "RANGE",
    hours: [
      [1000, 2000],
      [2200, 2230],
    ],
  },
  
];

module.exports = {
  createIntRange,
  parseIntRange,
  encodeMilitaryHour,
  decodeMilitaryHour,
  weekdayAt,
};