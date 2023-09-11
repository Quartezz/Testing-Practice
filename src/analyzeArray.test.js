const analyze = require("./analyzeArray");

test('returns null for an empty array', () => {
    const result = analyze([]);
    expect(result).toBeNull();
  });

test('correctly analyzes an array of positive numbers', () => {
    const numbers = [2, 4, 6, 8, 10];
    const result = analyze(numbers);
    expect(result).toEqual({
      average: 6,
      min: 2,
      max: 10,
      length: 5,
    });
  });

  test('correctly analyzes an array of negative numbers', () => {
    const numbers = [-5, -3, -1, -7];
    const result = analyze(numbers);
    expect(result).toEqual({
      average: -4,
      min: -7,
      max: -1,
      length: 4,
    });
  });

  test('correctly analyzes an array with a single number', () => {
    const numbers = [42];
    const result = analyze(numbers);
    expect(result).toEqual({
      average: 42,
      min: 42,
      max: 42,
      length: 1,
    });
  });