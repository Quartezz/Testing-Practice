const reverse = require("./reverseString");

test("function is reversing a string", () => {
    expect(reverse("bananabread")).toBe("daerbananab")
})

test("reversing string with spaces", () => {
    expect(reverse("banana bread")).toBe("daerbananab")
})

test("function reverse numbers", () => {
    expect(reverse("12345")).toBe("54321")
})