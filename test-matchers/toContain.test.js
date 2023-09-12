let texto = "Estou estudando os matchers do Jest"
let matchers = ["toBe", "toEqual", "toContain"]

test("Deveria encontrar a substring 'Jest' no texto", ()=>{
    expect(texto).toContain("Jest");
})

test("Deveria ter o item 'toBe' na lista de matchers", ()=>{
    expect(matchers).toContain("toBe");
})