const { formatTimeRange, formatdays, formatDays } = require("../src/main");
const fixtures = require("./fixtures");

describe('format', () => {
  
  it('should for everyday working hour to string', () => {
    expect(formatTimeRange(fixtures.everyday[0])).toEqual("Sunday: Open 24/7");
    expect(formatTimeRange(fixtures.everyday[1])).toEqual("Monday: Open 24/7");
    expect(formatTimeRange(fixtures.everyday[6])).toEqual("Saturday: Open 24/7");
  });

  it('should return CLOSED when not providing hours on RANGE type', () => {
    expect(
      formatTimeRange({
        type: 'RANGE',
        day: 1,
      })
    ).toEqual('Monday: Closed');
  });


  it("should return CLOSED when providing hours: [] on RANGE type", () => {
    expect(
      formatTimeRange({
        type: "RANGE",
        day: 1,
        hours: [],

      })
    ).toEqual("Monday: Closed");
  });

  it('should throw error when providing invalid hour range', () => {
    expect(
      () => formatTimeRange({
        type: "RANGE",
        day: 1,
        hours: [{}],
      })
    ).toThrowError()
  })

  it('should format RANGE hours', () => {
    expect(
      formatTimeRange({
        type: "RANGE",
        day: 1,
        hours: [
          [800, 1600],
          [1800, 2230],
        ],
      })
    ).toEqual("Monday: 08:00 AM - 04:00 PM, 06:00 PM - 10:30 PM");
  })

  it('should format CLOSED day', () => {
    expect(formatTimeRange({
      type: 'CLOSED',
      day: 1,
    })).toEqual('Monday: Closed')
  })

  it('should format multiple days open everyday', () => {
    expect(formatDays(fixtures.everyday)).toEqual(
      'Sunday: Open 24/7\n' +
      'Monday: Open 24/7\n' +
      'Tuesday: Open 24/7\n' +
      'Wednesday: Open 24/7\n' +
      'Thursday: Open 24/7\n' +
      'Friday: Open 24/7\n' +
      'Saturday: Open 24/7'
    );
  })

  it("should format multiple days", () => {
    expect(formatDays(fixtures.threedays)).toEqual(
      "Monday: 08:00 AM - 05:00 PM\n" +
        "Tuesday: 08:00 AM - 05:00 PM\n" +
        "Wednesday: 08:00 AM - 05:00 PM"
    );
  });

    it("should format multiple days with autofill", () => {
      expect(formatDays(fixtures.threedays, { autofill: true })).toEqual(
        "Sunday: Closed\n" +
        "Monday: 08:00 AM - 05:00 PM\n" +
        "Tuesday: 08:00 AM - 05:00 PM\n" +
        "Wednesday: 08:00 AM - 05:00 PM\n" +
        "Thursday: Closed\n" +
        "Friday: Closed\n" +
        "Saturday: Closed"
      );
    });


  it('should format multiple days with localization', () => {

    const DAYS = [
      "ថ្ងៃអាទិត្យ",
      "ថ្ងៃច័ន្ទ",
      "ថ្ងៃអង្គារ",
      "ថ្ងៃពុធ",
      "ថ្ងៃព្រហស្បតិ៍",
      "ថ្ងៃសុក្រ",
      "ថ្ងៃសៅរ៍",
    ];

    expect(formatDays(fixtures.threedays, { days: DAYS })).toEqual(
      "ថ្ងៃច័ន្ទ: 08:00 AM - 05:00 PM\n" +
        "ថ្ងៃអង្គារ: 08:00 AM - 05:00 PM\n" +
        "ថ្ងៃពុធ: 08:00 AM - 05:00 PM"
    );
  })

})