// const estudante = {
//   nome: "Maria",
//   sobreNome: "Silva",
//   numeroMatricula: "123456",
//   notasDoSemestre: [10, 8.5, 4, 7]
// }
// console.log(estudante)

// estudante.modulo = 2

// console.log(estudante);

// console.log(estudante.nome);

// console.log(estudante.notasDoSemestre[1])

// console.log(estudante.modulo)

// const copiaEstudante = {
//     ...estudante, 
//     nome: "Astrodev",
//     //copiaEstudante.notasDoSemestre.push(10)
//     notasDoSemestre: [...estudante.notasDoSemestre, 9],

//     modulo: estudante.modulo+1
// }
// console.log(copiaEstudante)

// const estudanteLabenu = []
// estudanteLabenu.push(estudante, copiaEstudante)
// console.log(estudanteLabenu)


const carrinho = {
  nome: 'Maria',
  forma: 'Dinheiro',
  endereco: 'Rua A, 265'
}

carrinho.compras = [
  {
    nomeDoProduto: 'arroz', 
    preco: 15.00,
    quantidade: '5kg'
  },
  {
    nomeDoProduto: 'feijão', 
    preco: 11.00,
    quantidade: '2kg'
  }
]

console.log(carrinho.compras)

const carrinhoPresente = {
  ...carrinho,
  nome: 'Outra Maria',
  forma: 'Cartão presente'
}
console.log(carrinhoPresente);