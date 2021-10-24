const { dayAt, parseIntRange, decodeMilitaryHour, fillMissingDays } = require("./utils");

function parseType(value) {
  if (typeof value !== 'string') return null;
  value = value.trim().toUpperCase();
  if (value != 'FULL_DAY' && value !== 'RANGE' && value !== 'CLOSED') {
    return null;
  }
  return value;
}


function parseDay(at) {
  if (typeof at !== 'number') return null;
  if (at < 0) return null;
  if (at > 6) return null;
  return at;
}

function formatTimeRange({ type: _type, hours, day: _day }, options = {}) {
  
  const type = parseType(_type);
  if (!type) throw new Error('type is invalid. please use either FULL_DAY, CLOSED, or RANGE');
  
  const day = parseDay(_day);
  if (day === null) throw new Error('day is out of range.');

  const dayName = dayAt(day, options.days);

  if (type === 'RANGE') {
    
    if (!hours) {
      return `${dayName}: Closed`;
    }

    if (!Array.isArray(hours)) {
      throw new Error('hours must be an array');
    }

    if (hours.length === 0) {
      return `${dayName}: Closed`;
    }

    if (!hours.every(hourRange => hourRange.length >= 2)) {
      throw new Error('Some hour value is invalid. \n' +
      'Each hour must have at least two value. JSON: \n'
        + JSON.stringify(hours, null, 2));
    }

    const rangeString = hours.map(parseIntRange)
      .map(([from, to]) => `${decodeMilitaryHour(from)} - ${decodeMilitaryHour(to)}`)
      .join(', ')
    
    return `${dayName}: ${rangeString}`;
  }

  if (type === 'FULL_DAY') {
    return `${dayName}: Open 24/7`;
  }

  if (type === 'CLOSED') {
    return `${dayName}: Closed`;
  }
    
}

function formatDays(items = [], options = {}) {
  if (!Array.isArray(items)) throw new Error('Invalid data');
  const _autofill = options.autofill;


  if (_autofill) {
    items = fillMissingDays(items);
  }

  return items.map((day) => formatTimeRange(day, options)).join("\n");
}


module.exports = {
  formatTimeRange,
  formatDays,
};