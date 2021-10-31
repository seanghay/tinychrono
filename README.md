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

// Monday: 08:30 AM - 12:00 PM, 01:00 PM - 05:40 PM

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

// Monday: 08:30 AM - 12:00 PM, 01:00 PM - 05:40 PM
// Friday: Open 24/7
// Saturday: Closed
// Sunday: 07:00 AM - 11:00 AM
```

## Autofill Missing Days

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
], { autofill: true });

console.log(content);

// Sunday: 07:00 AM - 11:00 AM
// Monday: 08:30 AM - 12:00 PM, 01:00 PM - 05:40 PM
// Tuesday: Closed
// Wednesday: Closed
// Thursday: Closed
// Friday: Open 24/7
// Saturday: Closed

```



## Milestone

- [x] Format Days  
- [x] Day names localization
- [x] Autofill missing days
- [x] Autofill with default options or maybe with a factory function. [autofill now supports function as a factory](https://github.com/seanghay/tinychrono/commit/e866b9e7098a54e71f4b68a502a49fbb1be5b1c5)
- [ ] Parse string to day objects
- [ ] Use Rollup to build ESM and UMD 
- [ ] types.d.ts
- [ ] Expose utility functions
- [ ] Use pattern for formatting
- [ ] Date range comparison (e.g. Opening Now, Closed Now)
