console.log('Início');

// Função assíncrona (callback)
setTimeout(() => {
  console.log('Executando dentro do setTimeout');
}, 1000);

// Promessa
new Promise((resolve, reject) => {
  console.log('Executando dentro da promessa');
  resolve('Resolvendo a promessa');
}).then((mensagem) => {
  console.log(mensagem);
});

console.log('Fim');
