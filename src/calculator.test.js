const calc = require("./calculator");

test("adding numbers", () => {
    expect(calc.add(1, 1)).toBe(2);
})

test("subtract numbers", () => {
    expect(calc.subtract(2, 1)).toBe(1);
})

test("dividing numbers", () => {
    expect(calc.divide(4, 2)).toBe(2);
})

test("multiplying numbers", () => {
    expect(calc.multiply(4, 2)).toBe(8);
})