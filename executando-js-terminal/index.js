const fs = require('fs');

const content = 'Este é o conteúdo a ser escrito no arquivo.';

fs.writeFile('output.txt', content, err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Arquivo foi escrito com sucesso!');
});
