# Tiny Chrono

Create short operation hour range

[![Tests](https://github.com/seanghay/tinychrono/actions/workflows/test.yml/badge.svg)](https://github.com/seanghay/tinychrono/actions/workflows/test.yml)


## Installation

```sh
npm install tinychrono
```

## Basic Usage

Single day

```js
const { formatTimeRange } = require('tinychrono');

const content = formatTimeRange({
  day: 1,
  type: 'RANGE',
  hours: [
    [830, 1200],
    [1300, 1740],
  ],
});

console.log(content);
// Monday - 08:30 AM-12:00 PM, 01:00 PM-05:40 PM

```
## Multiple Days

```js
const { formatDays } = require('tinychrono');

const content = formatDays([
  {
    day: 1,
    type: 'RANGE',
    hours: [
      [830, 1200],
      [1300, 1740],
    ],
  },
  {
    day: 5,
    type: 'FULL_DAY',
  },
  {
    day: 6,
    type: 'CLOSED',
  },
  {
    day: 0,
    type: 'RANGE',
    hours: [[700, 1100]],
  },
]);

console.log(content);

// Monday - 08:30 AM-12:00 PM, 01:00 PM-05:40 PM
// Friday - Open 24/7
// Saturday - Closed
// Sunday - 07:00 AM-11:00 AM
```

## Milestone

- [x] Format Days  
- [ ] Parse string to day objects
- [ ] Use Rollup to build ESM and UMD 
- [ ] types.d.ts
- [ ] Expose utility functions
