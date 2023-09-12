const subtrair = require("./subtrair")

test("Deveria subtrair 1 - 3  e retornar 2", ()=>{
    expect(subtrair(1, 3)).toBe(-2)
});

test("Deveria subtrair -1 - (-4)  e retornar 3", ()=>{
    expect(subtrair(-1, -4)).toBe(3)
});