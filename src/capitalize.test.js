const capitalize = require("./capitalize");

test("capitalize first char in a string", () =>{
    expect(capitalize("banana")).toEqual("Banana")
});

test("do not change an already capitalized string", () => {
    expect(capitalize("Robot")).toEqual("Robot")
})

test("work on empty strings", () => {
    expect(capitalize("")).toEqual("")
})

test("capitalize a single character string", () => {
    expect(capitalize("W")).toEqual("W")
})