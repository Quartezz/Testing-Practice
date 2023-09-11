const capitalize = require("./capitalize");

test("capitalize first char in a string", () =>{
    expect(capitalize("banana").toBe("Banana"))
});