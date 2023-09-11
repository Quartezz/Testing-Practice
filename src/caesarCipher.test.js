const caesarCipher = require("./caesarCipher");

test("wrapping from z to a", () => {
    expect(caesarCipher("zip code", 1)).toBe("ajq dpef")
})

test("keeping the same case", () => {
    expect(caesarCipher("Zip Code", 1)).toBe("Ajq Dpef")
})

test("punctuaction test", () => {
    expect(caesarCipher("zip. code.", 1)).toBe("ajq. dpef.")
})