const soma = require("./soma")

test("Deveria somar 1 + 2  e retornar 3", ()=>{
    expect(soma(1, 2)).toBe(3)
})

test("Deveria somar -1 + (-1)  e retornar -2", ()=>{
    expect(soma(-1, -1)).toBe(-2)
})