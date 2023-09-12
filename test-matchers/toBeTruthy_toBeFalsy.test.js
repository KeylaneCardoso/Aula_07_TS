let valorT = true
let valorF = false

test("Deveria ser veradadeiro", ()=>{
    expect(valorT).toBeTruthy();
})

test("Deveria ser falso", ()=>{
    expect(valorF).toBeFalsy();
})