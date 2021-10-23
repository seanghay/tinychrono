const {
  createIntRange,
  parseIntRange,
  encodeMilitaryHour,
  decodeMilitaryHour,
} = require("../src/utils");

describe("utility functions", () => {
  it("should create an array from two integers", () => {
    const items = createIntRange(0, 10);
    expect(items).toBeInstanceOf(Array);
    expect(items.length).toEqual(11);
    expect(items[0]).toEqual(0);
    expect(items[1]).toEqual(1);
    expect(items[2]).toEqual(2);
    expect(items[10]).toEqual(10);
  });

  it("should parse range from an array", () => {
    const [from, to] = parseIntRange([0, 1, 2, 3]);
    expect(from).toEqual(0);
    expect(to).toEqual(3);
  });

  it("should encode military time - AM", () => {
    const fixures = [
      ["10:00 AM", 1000],
      ["11:50 AM", 1150],
      ["7:50 AM", 750],
      ["06:50AM", 650],
      ["12:50 AM", 50],
    ];

    fixures.forEach(([input, result]) => {
      expect(encodeMilitaryHour(input)).toEqual(result);
    });
  });

  it("should encode military time - AM", () => {
    const fixures = [
      ["10:00 AM", 1000],
      ["11:50 AM", 1150],
      ["07:50 AM", 750],
      ["06:50 AM", 650],
      ["12:50 AM", 50],
    ];

    fixures.forEach(([result, input]) => {
      expect(decodeMilitaryHour(input)).toEqual(result);
    });
    
  });


  it("should decode military time -> PM", () => {
    const fixures = [
      ["10:00 PM", 2200],
      ["11:50 PM", 2350],
      ["07:50 PM", 1950],
      ["06:50 PM", 1850],
      ["12:50 PM", 1250],
    ];

    fixures.forEach(([result, input]) => {
      expect(decodeMilitaryHour(input)).toEqual(result);
    });
  });

  it("should decode military time -> PM", () => {
    
    const fixures = [
      ["10:00 PM", 2200],
      ["11:50 PM", 2350],
      ["07:50 PM", 1950],
      ["06:50 PM", 1850],
      ["12:50 PM", 1250],
    ];

    fixures.forEach(([result, input]) => {
      expect(decodeMilitaryHour(input)).toEqual(result);
    });
  
  });
});
