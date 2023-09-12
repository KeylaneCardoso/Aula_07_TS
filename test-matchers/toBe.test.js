function calcularAreaQuadrado(Lado){
    return Lado * Lado
}

test("Deveria retornar 100 para lado", ()=>{
    expect(calcularAreaQuadrado(10)).toBe(100)
});

let ladoTerreno = 10

/*test("Deveria ter um valor atribuido a lado terreno", ()=>{
    resultado = calcularAreaQuadrado(ladoTerreno)
    expect(resultado).toBe(100)
});*/

// o toBeDefined vê se a constante foi atribuida
test("Deveria ter um valor atribuido a lado terreno", ()=>{
    expect(ladoTerreno).toBeDefined()
});