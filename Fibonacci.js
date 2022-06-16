function fibonacciTeste(number){
let fibonacci = []
fibonacci[0] = 0
fibonacci[1] = 1
// teste de presença do número na sequência nas primeiras interações da sequência Fibonacci
for (let i = 2; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1]
  }
  console.log(fibonacci);
if (fibonacci.indexOf(number) < 0 ){
    console.log(`O número ${number} não faz parte da sequência.`)
    }
    else{
        console.log(`O número ${number} faz parte da sequência.`)
    }
}
fibonacciTeste(12)