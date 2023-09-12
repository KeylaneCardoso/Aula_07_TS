//compara intancias diferentes

const pessoaA = {
    nome: "Maria",
    idade: 20
}

const pessoaB = {
    nome: "Maria",
    idade: 20
}

test("Deveriam ser pessoas diferentes, com os mesmos atributos", ()=>{
    expect(pessoaA).toEqual(pessoaB)
});

/*test("Deveriam ser pessoas diferentes, com os mesmos atributos", ()=>{
    expect(pessoaA).toBe(pessoaB)
});*/