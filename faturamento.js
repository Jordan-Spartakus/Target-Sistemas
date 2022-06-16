// Transformando os dados em objetos
const faturamento = [{estado: 'SP', faturamento : '67836.43'},
{estado: 'RJ', faturamento: '36678.66'},
{estado: 'MG', faturamento: '29229.88' },
{estado: 'ES', faturamento: '27165.48'},
{estado: 'Outros', faturamento:'19849.53'}
]
// Resolução
a = 0
for(i = 0; i <faturamento.length; i++){
    let valor = parseFloat(faturamento[i].faturamento)
    a += valor
}
console.log(`O faturamento total foi de R$${a}`)
for(i = 0; i < faturamento.length; i++){
    b = ((faturamento[i].faturamento / a) * 100)
    c = parseFloat(b.toFixed(2))
    console.log(`A porcentagem de ${faturamento[i].estado} em relação ao faturamento total é ${c}%`)
}



