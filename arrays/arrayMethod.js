const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"]
pilotos.pop() //Massa quebrou o carro
console.log(pilotos)

pilotos.push("Verstappen")
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento
console.log(pilotos)

pilotos.unshift("Hamilton")
console.log(pilotos)

// Metodo slice para pegar uma parte do array
// Adicionar
pilotos.splice(2, 0, "Bottas", "Massa")
console.log(pilotos)

// Remove
pilotos.splice(3, 1) // Massa quebrou
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)
console.log(pilotos)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(pilotos)
