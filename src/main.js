const { weekdayAt, createIntRange, parseIntRange, decodeMilitaryHour } = require("./utils");

function parseType(value) {
  if (typeof value !== 'string') return null;
  value = value.trim().toUpperCase();
  if (value != 'FULL_DAY' && value !== 'RANGE' && value !== 'CLOSED') {
    return null;
  }
  return value;
}


function parseWeekday(at) {
  if (typeof at !== 'number') return null;
  if (at < 0) return null;
  if (at > 6) return null;
  return at;
}



function formatTimeRange({ type: _type, hours, weekday: _weekday }) {
  
  const type = parseType(_type);
  if (!type) throw new Error('type is invalid. please use either FULL_DAY, CLOSED, or RANGE');
  
  const weekday = parseWeekday(_weekday);
  if (weekday === null) throw new Error('weekday is out of range.');

  const weekdayName = weekdayAt(weekday);

  if (type === 'RANGE') {
    
    if (!hours) {
      return `${weekdayName} - CLOSED`;
    }

    if (!Array.isArray(hours)) {
      throw new Error('hours must be an array');
    }

    if (hours.length === 0) {
      return `${weekdayName} - CLOSED`;
    }

    if (!hours.every(hourRange => hourRange.length >= 2)) {
      throw new Error('Some hour value is invalid. \n' +
      'Each hour must have at least two value. JSON: \n'
        + JSON.stringify(hours, null, 2));
    }

    const rangeString = hours.map(parseIntRange)
      .map(([from, to]) => `${decodeMilitaryHour(from)}-${decodeMilitaryHour(to)}`)
      .join(', ')
    
    return `${weekdayName} - ${rangeString}`;
  }

  if (type === 'FULL_DAY') {
    return `${weekdayName} - Open 24/7`
  }

  throw new Error('Unimplemented!');
}

module.exports = {
  formatTimeRange,
};