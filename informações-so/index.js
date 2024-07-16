const os = require("node:os")

const arquitetura = os.arch()
console.log("Arquitetura do SO: ", arquitetura)
console.log("Informações da CPU:", processadores[0])