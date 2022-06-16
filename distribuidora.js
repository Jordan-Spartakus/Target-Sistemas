const jsonDados= require('./dados.json'); 
let arr = []
a = 0 
b = 0
c = 0
d = 0
e = 0
//Contabilizando os dias válidos e criando um novo array somente para os dados utilizados
for(i = 0; i < jsonDados.length; i++){
    a = parseFloat(jsonDados[i].valor)
    if(a > 0){
        b++
        c = parseFloat(jsonDados[i].valor)
           
    }
     arr.push(c)
    
}
// Maior e Menor
var maior = 0;
for (var i = 0; i < arr.length; i++) {
   if ( arr[i] > maior ) {
      maior = arr[i];
   }
}
var menor = maior;
for (var i = 0; i < arr.length; i++) {
   if ( arr[i] <menor ) {
      menor = arr[i];
          }
}
// Média e dias com faturamento maior que a média mensal
for(i = 0; i <arr.length; i++){
    let valor = parseFloat(arr[i])
    d += valor
}
media = parseFloat((d/b).toFixed(2))
for(i=0; i < arr.length; i++){
    if(arr[i]>media)
    e++
}
// Solução
console.log(`Maior valor no mês: ${maior}`)
console.log(`Menor valor no mês: ${menor}`)
console.log(`Média do mês: ${media}`)
console.log(`Número de dias em que o faturamento diário ultrapassou a média mensal: ${e}`)