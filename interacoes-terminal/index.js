process.stdout.write("Olá, mundo!\n")

process.stdin.on("data", (data) => {
  process.stdout.write(`Você digitou: ${data}`)
})
const readline = require("node:readline")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.on("line", (input) => {
  rl.write(`Você digitou: "${input}"`)
})