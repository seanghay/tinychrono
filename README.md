# Tiny Chrono

Create short operation hour range

[![Tests](https://github.com/seanghay/tinychrono/actions/workflows/test.yml/badge.svg)](https://github.com/seanghay/tinychrono/actions/workflows/test.yml)


## Installation

```sh
npm install tinychrono
```

## Basic Usage

Single weekday

```js
const { formatTimeRange } = require('tinychrono');

const content = formatTimeRange({
  weekday: 1,
  type: 'RANGE',
  hours: [
    [830, 1200],
    [1300, 1740],
  ],
});

console.log(content);
// Monday - 08:30 AM-12:00 PM, 01:00 PM-05:40 PM

```
