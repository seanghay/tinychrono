const { formatTimeRange } = require("../src/main");
const fixtures = require("./fixtures");

describe('format', () => {
  
  it('should for everyday working hour to string', () => {
    expect(formatTimeRange(fixtures.everyday[0])).toEqual("Sunday - Open 24/7");
    expect(formatTimeRange(fixtures.everyday[1])).toEqual("Monday - Open 24/7");
    expect(formatTimeRange(fixtures.everyday[6])).toEqual("Saturday - Open 24/7");
  });

  it('should return CLOSED when not providing hours on RANGE type', () => {
    expect(
      formatTimeRange({
        type: 'RANGE',
        weekday: 1,
      })
    ).toEqual('Monday - CLOSED');
  });


  it("should return CLOSED when providing hours: [] on RANGE type", () => {
    expect(
      formatTimeRange({
        type: "RANGE",
        weekday: 1,
        hours: [],

      })
    ).toEqual("Monday - CLOSED");
  });

  it('should throw error when providing invalid hour range', () => {
    expect(
      () => formatTimeRange({
        type: "RANGE",
        weekday: 1,
        hours: [{}],
      })
    ).toThrowError()
  })


  it('should format RANGE hours', () => {
    expect(
      formatTimeRange({
        type: "RANGE",
        weekday: 1,
        hours: [
          [800, 1600],
          [1800, 2230],
        ],
      })
    ).toEqual("Monday - 08:00 AM-04:00 PM, 06:00 PM-10:30 PM");
  })

})